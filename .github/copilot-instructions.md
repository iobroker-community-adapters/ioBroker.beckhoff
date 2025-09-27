# ioBroker Adapter Development with GitHub Copilot

**Version:** 0.4.0
**Template Source:** https://github.com/DrozmotiX/ioBroker-Copilot-Instructions

This file contains instructions and best practices for GitHub Copilot when working on ioBroker adapter development.

## Project Context

You are working on an ioBroker adapter. ioBroker is an integration platform for the Internet of Things, focused on building smart home and industrial IoT solutions. Adapters are plugins that connect ioBroker to external systems, devices, or services.

### Beckhoff Adapter Specific Context

This is the ioBroker.beckhoff adapter for communicating with Beckhoff PLCs via the ADS (Automation Device Specification) protocol. The adapter is implemented in JavaScript (Node.js) and follows the standard ioBroker adapter structure.

**Key Technical Context:**
- **Primary Function**: Bidirectional communication with Beckhoff PLCs using ADS protocol
- **Target Systems**: TwinCAT 2, TwinCAT 3, and legacy TwinCAT 2 <= v2.11.2240
- **Key Dependencies**: node-ads-api for ADS protocol implementation, xml2js for TPY file parsing
- **Configuration Requirements**: AMS NetID, IP address, port configuration, optional TPY file upload
- **Data Exchange Patterns**: Automatic PLC-to-ioBroker synchronization, triggered ioBroker-to-PLC updates
- **Connection Management**: Automatic reconnection, connection state monitoring, error handling for industrial environments

**Development Patterns Specific to This Adapter:**
- ADS client connection lifecycle management
- Symbol table parsing and object creation from PLC structures
- Bidirectional data synchronization with ACK handling
- TPY file parsing for legacy TwinCAT versions
- Industrial-grade error handling and reconnection strategies

## Testing

### Unit Testing
- Use Jest as the primary testing framework for ioBroker adapters
- Create tests for all adapter main functions and helper methods
- Test error handling scenarios and edge cases
- Mock external API calls and hardware dependencies
- For adapters connecting to PLCs not reachable by internet, provide example data files to allow testing of functionality without live connections
- Example test structure:
  ```javascript
  describe('BeckhoffAdapter', () => {
    let adapter;
    
    beforeEach(() => {
      // Setup test adapter instance
    });
    
    test('should initialize correctly', () => {
      // Test adapter initialization
    });
    
    test('should handle ADS connection errors gracefully', () => {
      // Test error scenarios
    });
  });
  ```

### Integration Testing

**IMPORTANT**: Use the official `@iobroker/testing` framework for all integration tests. This is the ONLY correct way to test ioBroker adapters.

**Official Documentation**: https://github.com/ioBroker/testing

#### Framework Structure for Beckhoff Adapter
Integration tests should mock PLC connections since actual PLCs are not available in CI/CD environments:

```javascript
const path = require('path');
const { tests } = require('@iobroker/testing');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Use tests.integration() with defineAdditionalTests
tests.integration(path.join(__dirname, '..'), {
    defineAdditionalTests({ suite }) {
        suite('Test Beckhoff adapter with mock PLC', (getHarness) => {
            let harness;

            before(() => {
                harness = getHarness();
            });

            it('should configure and start adapter with mock PLC connection', function () {
                return new Promise(async (resolve, reject) => {
                    try {
                        harness = getHarness();
                        
                        // Get adapter object
                        const obj = await new Promise((res, rej) => {
                            harness.objects.getObject('system.adapter.beckhoff.0', (err, o) => {
                                if (err) return rej(err);
                                res(o);
                            });
                        });
                        
                        if (!obj) {
                            return reject(new Error('Adapter object not found'));
                        }

                        // Configure adapter properties for mock testing
                        Object.assign(obj.native, {
                            targetIpAdress: '127.0.0.1',
                            targetAmsNetId: '192.168.1.100.1.1',
                            targetAmsPort: '851',
                            targetTcpPort: 48898,
                            sourceAmsNetId: '192.168.1.200.1.1',
                            sourceAmsPort: 32905,
                            reconnectInterval: 5
                        });

                        // Set the updated configuration
                        harness.objects.setObject(obj._id, obj);

                        console.log('✅ Step 1: Configuration written, starting adapter...');
                        
                        // Start adapter and wait
                        await harness.startAdapterAndWait();
                        
                        console.log('✅ Step 2: Adapter started');

                        // Wait for adapter to attempt connection
                        const waitMs = 10000;
                        await wait(waitMs);

                        console.log('🔍 Step 3: Checking connection state...');
                        
                        // Verify adapter attempted connection (even if it fails with mock)
                        const connectionState = await harness.states.getStateAsync('beckhoff.0.info.connection');
                        
                        // For mock testing, we expect connection to fail, but adapter should handle gracefully
                        console.log('Connection state:', connectionState);
                        
                        resolve('Test completed successfully');
                    } catch (err) {
                        reject(err);
                    }
                });
            }).timeout(30000);
        });
    }
});
```

## ioBroker Development Guidelines

### Adapter Structure and Best Practices

#### Main Adapter File Structure
```javascript
const utils = require('@iobroker/adapter-core');

class YourAdapter extends utils.Adapter {
    constructor(options = {}) {
        super({
            ...options,
            name: 'your-adapter',
        });
        
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    async onReady() {
        this.setState('info.connection', false, true);
        // Initialize your adapter
    }

    async onStateChange(id, state) {
        if (!state || state.ack) return;
        
        try {
            // Handle state changes
            this.setState(id, state.val, true);
        } catch (error) {
            this.log.error(`Error handling state change: ${error.message}`);
        }
    }

    async onUnload(callback) {
        try {
            // Clean up resources
            this.setState('info.connection', false, true);
            callback();
        } catch (e) {
            callback();
        }
    }
}

if (require.main !== module) {
    module.exports = (options) => new YourAdapter(options);
} else {
    new YourAdapter();
}
```

### State Management

#### Creating States
```javascript
await this.createStateAsync('device.channel.state', {
    type: 'state',
    common: {
        name: 'State name',
        type: 'boolean',
        role: 'indicator',
        read: true,
        write: false,
    },
    native: {},
});
```

#### Setting States
```javascript
// Set state with acknowledgment
await this.setStateAsync('device.state', value, true);

// Set state without acknowledgment (triggers onStateChange)
await this.setStateAsync('device.state', value, false);
```

#### Reading States
```javascript
const state = await this.getStateAsync('device.state');
if (state && !state.ack) {
    // Handle unacknowledged state
}
```

### Object Management

#### Creating Objects
```javascript
await this.setObjectAsync('device', {
    type: 'device',
    common: {
        name: 'Device Name',
    },
    native: {},
});

await this.setObjectAsync('device.channel', {
    type: 'channel',
    common: {
        name: 'Channel Name',
    },
    native: {},
});
```

#### Deleting Objects
```javascript
// Delete single object
await this.delObjectAsync('device.obsoleteState');

// Delete object tree
await this.delObjectAsync('device.obsoleteChannel', { recursive: true });
```

### Configuration Management

#### Accessing Configuration
```javascript
const config = this.config;
const apiKey = config.apiKey;
const interval = config.interval || 60000; // Default 60 seconds
```

#### Configuration Validation
```javascript
onReady() {
    if (!this.config.apiKey) {
        this.log.error('API key is required');
        return;
    }
    
    if (this.config.interval < 1000) {
        this.log.warn('Interval too small, using 1000ms minimum');
        this.config.interval = 1000;
    }
}
```

### Error Handling

#### Comprehensive Error Handling
```javascript
async onReady() {
    try {
        await this.initializeAdapter();
    } catch (error) {
        this.log.error(`Initialization failed: ${error.message}`);
        this.setState('info.connection', false, true);
        
        // Schedule retry
        this.setTimeout(() => {
            this.restart();
        }, 30000);
    }
}

async apiCall(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        this.log.error(`API call failed: ${error.message}`);
        throw error;
    }
}
```

#### Graceful Degradation
```javascript
async fetchData() {
    try {
        const data = await this.apiCall('/data');
        this.setState('info.connection', true, true);
        return data;
    } catch (error) {
        this.setState('info.connection', false, true);
        this.log.warn(`Using cached data due to API error: ${error.message}`);
        return this.getCachedData();
    }
}
```

### Logging Best Practices

#### Structured Logging
```javascript
// Use appropriate log levels
this.log.error('Critical error that affects functionality');
this.log.warn('Warning about potential issues');
this.log.info('Important information for users');
this.log.debug('Detailed information for debugging');
this.log.silly('Very verbose debug information');

// Include context in log messages
this.log.info(`Processing ${deviceCount} devices`);
this.log.error(`Device ${deviceId} connection failed: ${error.message}`);
```

#### Conditional Debug Logging
```javascript
if (this.log.level === 'debug') {
    this.log.debug(`Raw API response: ${JSON.stringify(response, null, 2)}`);
}
```

### Connection State Management

#### Connection State Tracking
```javascript
class YourAdapter extends utils.Adapter {
    constructor(options = {}) {
        super(options);
        this.connected = false;
    }

    async setConnectionState(connected) {
        if (this.connected !== connected) {
            this.connected = connected;
            await this.setState('info.connection', connected, true);
            this.log.info(`Connection ${connected ? 'established' : 'lost'}`);
        }
    }
}
```

### Timer and Interval Management

#### Managing Timers
```javascript
class YourAdapter extends utils.Adapter {
    constructor(options = {}) {
        super(options);
        this.pollingTimer = null;
    }

    startPolling() {
        this.stopPolling(); // Ensure no duplicate timers
        
        this.pollingTimer = this.setInterval(() => {
            this.fetchData();
        }, this.config.interval || 60000);
    }

    stopPolling() {
        if (this.pollingTimer) {
            this.clearInterval(this.pollingTimer);
            this.pollingTimer = null;
        }
    }

    onUnload(callback) {
        this.stopPolling();
        callback();
    }
}
```

### Resource Cleanup

#### Proper Cleanup in unload()
```javascript
async onUnload(callback) {
    try {
        // Stop all timers
        if (this.connectionTimer) {
            this.clearTimeout(this.connectionTimer);
            this.connectionTimer = undefined;
        }
        
        if (this.pollingInterval) {
            this.clearInterval(this.pollingInterval);
            this.pollingInterval = undefined;
        }
        
        // Close connections
        if (this.client) {
            await this.client.disconnect();
            this.client = null;
        }
        
        // Set connection state
        await this.setStateAsync('info.connection', false, true);
        
        callback();
    } catch (e) {
        callback();
    }
}
```

### Testing Best Practices for Industrial Adapters

#### Mock External Dependencies
Since PLCs are not available in CI environments:
- Mock the `node-ads-api` module for unit tests
- Provide example PLC data structures for testing
- Test error handling for connection failures
- Verify reconnection logic without actual PLC

#### Example Mock Setup
```javascript
// Test setup with mocked ADS client
const mockAdsClient = {
    connect: jest.fn().mockResolvedValue(true),
    readSymbols: jest.fn().mockResolvedValue([
        { name: 'TestVar1', type: 'BOOL' },
        { name: 'TestVar2', type: 'INT' }
    ]),
    disconnect: jest.fn().mockResolvedValue(true)
};

jest.mock('node-ads-api', () => ({
    connect: () => mockAdsClient
}));
```

## Issue and Pull Request Management

### Issue Handling
- **Do not close issues solved by a PR automatically**
- When a PR fixes an issue:
  1. Add the label `fixed` to the issue
  2. Add a reference to the PR as a comment in the issue
  3. Leave the issue open for maintainers to close manually

### Pull Request Guidelines
- Reference related issues in PR descriptions using standard GitHub syntax
- Ensure PR titles are descriptive and follow conventional commit format when applicable
- Include testing instructions when relevant

## Changelog Management

### Adding Changes to Changelog
- **All changes must be documented in the changelog section of README.md**
- Add new entries below the `### WORK_IN_PROGRESS` label (around line 103 in README.md)
- **Do not remove or modify the template comment for `### WORK_IN_PROGRESS`**
- Follow the existing changelog format with version, date, and bullet points
- Include the type of change (feature, fix, breaking change, etc.)

### Changelog Format
```markdown
### **WORK IN PROGRESS**
* (contributor) Description of change
* (contributor) Another change description
```

## Documentation Changes

### Separate Documentation PRs
- **When changing documentation files only:**
  - Do not commit any code changes
  - Do not rebuild the project
  - Do not commit any build artifacts
  - Create separate PRs specifically for documentation changes
  - Focus only on documentation improvements

### Documentation Files
Documentation files in this repository include:
- `README.md` (main documentation)
- Files in `docs/` directory (German and English admin documentation)
- Inline code comments and JSDoc comments

## Code Guidelines

### Project Structure
- Main adapter logic: `beckhoff.js`
- Admin interface: `admin/` directory
- Configuration: `io-package.json`
- Dependencies: `package.json`

### Development Workflow
1. Install dependencies: `npm install`
2. Run linting: `npm run lint`
3. Run tests: `npm test`
4. Check TypeScript types: `npm run check`

### Code Quality
- Follow existing code style and patterns
- Use ESLint and Prettier for code formatting
- Ensure all tests pass before submitting PRs
- Add appropriate error handling and logging

## Testing

- Run the full test suite with `npm test`
- Ensure new features include appropriate tests
- Test adapter functionality with actual Beckhoff PLC when possible
- Verify admin interface changes in ioBroker environment

## Dependencies

- Keep dependencies minimal and up-to-date
- Prefer established, well-maintained packages
- Document any new dependencies in PR descriptions
- Consider security implications of new dependencies

## Compatibility

- Maintain compatibility with ioBroker adapter standards
- Support Node.js versions as specified in `package.json` engines field
- Ensure compatibility with TwinCAT 2 and TwinCAT 3 systems
- Test with different Beckhoff PLC configurations when possible

## Code Style and Standards

- Follow JavaScript/TypeScript best practices
- Use async/await for asynchronous operations
- Implement proper resource cleanup in `unload()` method
- Use semantic versioning for adapter releases
- Include proper JSDoc comments for public methods
- Test with different Beckhoff PLC configurations when possible