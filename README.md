![Logo](docs/en/img/beckhoff.png)

# ioBroker.beckhoff

## Fork preview release: 1.8.0-beta.5

[Release notes and downloads](https://github.com/zonfacter/ioBroker.beckhoff/releases/tag/v1.8.0-beta.5) · [Installable adapter package](https://github.com/zonfacter/ioBroker.beckhoff/releases/download/v1.8.0-beta.5/iobroker.beckhoff-1.8.0-beta.5.tgz) · [Changelog](#changelog)

This preview is maintained in the `zonfacter` fork. The npm and ioBroker stable badges below refer to the original adapter. The beta requires Node.js >=20.19.4, js-controller >=6.0.11 and Admin >=7.7.22.

[![GitHub license](https://img.shields.io/github/license/iobroker-community-adapters/ioBroker.beckhoff)](https://github.com/iobroker-community-adapters/ioBroker.beckhoff/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/iobroker.beckhoff.svg)](https://www.npmjs.com/package/iobroker.beckhoff)
![GitHub repo size](https://img.shields.io/github/repo-size/iobroker-community-adapters/ioBroker.beckhoff)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/beckhoff/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)</br>
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/iobroker-community-adapters/ioBroker.beckhoff)
![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/iobroker-community-adapters/ioBroker.beckhoff/latest)
![GitHub last commit](https://img.shields.io/github/last-commit/iobroker-community-adapters/ioBroker.beckhoff)
![GitHub issues](https://img.shields.io/github/issues/iobroker-community-adapters/ioBroker.beckhoff)
</br>
**Version:** </br>
[![NPM version](http://img.shields.io/npm/v/iobroker.beckhoff.svg)](https://www.npmjs.com/package/iobroker.beckhoff)
![Current version in stable repository](https://iobroker.live/badges/beckhoff-stable.svg)
![Number of Installations](https://iobroker.live/badges/beckhoff-installed.svg)
</br>
**Tests:** </br>
[![Test and Release](https://github.com/iobroker-community-adapters/ioBroker.beckhoff/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/iobroker-community-adapters/ioBroker.beckhoff/actions/workflows/test-and-release.yml)
[![CodeQL](https://github.com/iobroker-community-adapters/ioBroker.beckhoff/actions/workflows/codeql.yml/badge.svg)](https://github.com/iobroker-community-adapters/ioBroker.beckhoff/actions/workflows/codeql.yml)

<!--
## Sentry
**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.**
For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.
-->

## BECKHOFF Adapter for ioBroker

This adapter for ioBroker can Communicate with a Beckhoff Automation System (Twincat 2 or 3) over the ADS Protocol.
The ADS Protocol is implemented in every System of Beckhoff and can be used without any License on ioBroker or Automation System.

This Project is not affilate to Beckhoff in any way

## Description

### Requirements

- Beckhoff PLC that has an ethernet connection and is connected to your LAN
  - Make your you give the PLC a fixed IP address
  - Make sure you can ping the PLC from ioBroker
  - TwinCat 2 **excluding BC Runtimes** or TwinCat 3

### PLC Configuration

1. Enable ADS on your PLC project. To do this click on your task and then enable the checkbox before `Create symbols`. Download the new configuration and make sure you reboot your PLC. The reboot is only needed when you are using TwinCat 2.

   ![createSymbols](docs/en/img/createSymbols.png)

2. Now add a static route to our Beckhoff PLC. The route should point to your server that will run the proxy application.

   Here an example to add a Static Route directly on PLC u can add this Route also from your EngineeringPC to the PLC.

   ![createSymbols](docs/en/img/addRoute.png)

   Important is that the AmsNetId and the AdressInfo (IP-Adress) matches with the Adapter Settings. For further Information about TwinCat Router and Security read Documentation on Synchronisierung [Beckhoff Information System](https://infosys.beckhoff.com/ 'Beckhoff Information System')

3. On TwinCat 2 Create a Struct and fill in your needed Symbols. Then add this Struct to a GlobalVariableTable.

   ##### Currently Supported Types: BOOL, BYTE, WORD, DWORD, SINT, USINT, INT, UINT, DINT, UDINT, REAL, LREAL, TIME, TIME_OF_DAY, TOD, DATE, DATE_AND_TIME, DT, STRING

   OPTIONAL: You can create a Variable in root of Struct with the exact name -> ioBrokerResync (Not Casesensitiv and not matter which Type) -> Every time this Variable changes his value the Table get resynced in ioBroker.

4. On TwinCat 3 Create a GlobalVariableTable and fill in your needed Symbols.

   ##### Currently Supported Types: BOOL, BYTE, WORD, DWORD, SINT, USINT, INT, UINT, DINT, UDINT, REAL, LREAL, TIME, TIME_OF_DAY, TOD, DATE, DATE_AND_TIME, DT, STRING

   OPTIONAL: You can create a Variable in root of Variable Table with the exact name -> ioBrokerResync (Not Casesensitiv and not matter which Type) -> Every time this Variable changes his value the Table get resynced in ioBroker.

### Adapter Configuration

#### Twincat 3 and Twincat 2

1. Choose your Runtime Version
2. Fill in the target IP address or hostname and AMS-Net-ID.
3. On TwinCat 2 fill in the Instance Name of Struct.
4. On TwinCat 3 fill in the correct Tablename of the before created GlobalVariableTable.
5. All other Points u mostly not need to Change.

#### Twincat 2 <= v2.11.2240

Upload your \*.tpy File from your PLC Project -> Every Time you change something on the Struct u communicate with the ioBroker, you need to Upload it again.

### Dataexchange

- When some Value is changed in PLC then it will be automatic transferred to ioBroker
- When a Value is changed in ioBroker (Important: ACK need to be FALSE!!) then the Value will be automatic transferred to PLC. After that the Adapter set ACK to TRUE.

### Attention

1. TwinCAT AMS Router doesn't allow multiple TCP connections from the same host. So when you use two instances on the same host to connect to the same TwinCAT router, you will see that TwinCAT will close the first TCP connection and only respond to the newest.
2. A full metadata synchronization runs on adapter startup, on symbol-version changes, after an observed PLC STOP/RUN transition, and when `ioBrokerResync` changes.
3. A reconnect after a short network outage can reuse symbol names and data types. ADS handles and notifications are recreated, and current PLC values are read again. Object IDs and user-defined mappings are preserved.

### Connection settings

- **ADS request timeout (ms)** (`adsTimeout`, default **500**): timeout for each ADS request. For slow or VPN connections, try **2000**. This does not change the reconnect interval.
- **Interval for reconnect** (`reconnectInterval`, default **15 seconds**): delay between connection attempts and interval for PLC-state/acknowledgement checks.
- **Reuse symbol metadata after short outages** (`cacheSymbolTable`, default **true**): keeps an in-memory metadata cache for the same configured PLC and variable table. A new adapter process always performs a full synchronization.
- **Maximum outage for symbol cache** (`symbolCacheMaxAge`, default **300 seconds**): longer outages require a full synchronization. Set to zero or disable caching to always reload metadata.

The cache is checked against the ADS symbol version before and after registration. Version changes, observed PLC stops, failed cached subscriptions/reads and explicit resync requests trigger a full synchronization. A missing write acknowledgement only refreshes current values; it does not download symbol metadata or replay PLC writes.

The ADS symbol version is an 8-bit counter, not a unique PLC boot/program identifier. A PLC restart or counter wrap during an unobserved outage can reuse the same number. For installations where this can occur, disable caching or maintain a PLC `ioBrokerResync` counter that changes on startup/program changes. The outage limit reduces reuse after long gaps; it cannot prove program identity.

### Legacy TPY files

For TwinCAT 2 <= v2.11.2240, upload and select a `.tpy` file in the configuration UI. Files are stored under `beckhoff.<instance>.tpy` and are read on adapter startup. The existing `xmlTpyData` configuration remains supported: clear the file selection to use or edit the existing XML contents. A selected file takes precedence. Upload a new TPY file whenever the PLC symbol definitions change.

Existing TPY files are copied into the named `tpy/` directory at startup. Originals remain available, and differing existing files are never overwritten. The configuration dialog maps an old selection to its managed copy; saving the settings persists that path. Upload, file listing and selected values now use the same directory. The adapter continues to support existing saved paths.

### Development validation

Use Node.js 22 or newer. The adapter runtime supports Node.js >=20.19.4. Development tools require Node.js >=22.19.0. CI tests Node.js 20.19.4, 22, 24 and 26 on Linux, Windows and macOS. Run `npm ci`, `npm test`, `npm run check`, `npm run lint` and `npm run test:integration`. The connection regression tests use simulated ADS clients and never control a real PLC. Successful startup/CI tests do not replace validation against the target TwinCAT runtime.


## Changelog
<!--
    Placeholder for the next version (at the beginning of the line):
    ### **WORK IN PROGRESS**
-->

### 1.8.0-beta.5 (2026-10-14)
- (zonfacter) Fix the native TPY dropdown by using a named tpy directory instead of Admin's invalid null root-directory request
- (zonfacter) Prepare existing TPY files before startup, retain originals, avoid overwriting different contents and return matching selection values to the configuration UI

### 1.8.0-beta.4 (2026-10-13)
- (zonfacter) Restore German umlauts that had been replaced by literal question marks in Admin translations, documentation and release notes

### 1.8.0-beta.3 (2026-10-13)
- (zonfacter) Show the selected TPY filename directly from saved configuration, independently of the native file-selector dropdown
- (zonfacter) Update TPY feedback immediately on selection changes and distinguish stored legacy XML from an empty selection

### 1.8.0-beta.2 (2026-10-13)
- (zonfacter) Preserve existing prefix selection, including similarly named global tables
- (zonfacter) Reuse symbol metadata after short outages; recreate ADS handles/notifications and refresh current values
- (zonfacter) Refresh missing write acknowledgements without reloading metadata or replaying writes
- (zonfacter) Add configurable ADS request timeout and hostname support
- (zonfacter) Replace the old configuration UI with responsive jsonConfig, native TPY upload and packaged translations; preserve existing configuration keys and legacy TPY data
- (zonfacter) Isolate compact-mode connections and reject stale callbacks
- (zonfacter) Support Node.js >=20.19.4 at runtime; test Node 20 with js-controller 7.1.0 separately from modern development tools
- (zonfacter) Update dependencies, type checking and CI; restrict automatic npm publishing to the original repository

Verified with 25 connection/protocol regression tests, 61 package/schema checks, type checking and an existing TwinCAT 2 installation. Existing TPY data and object mappings were preserved. Browser rendering of the new configuration UI and a deliberate timeout on the production PLC have not been tested. The ADS symbol-version counter is not a unique program identity; see the cache limitations above.

### 1.8.0-beta.1 (2026-10-13)
- (zonfacter) Verify runtime support for Node.js 20.19.4 to preserve existing installations

### 1.8.0-beta.0 (2026-10-13)
- (zonfacter) Reuse symbol metadata on short reconnects, renew session handles and refresh values
- (zonfacter) Add configurable ADS request timeout and hostname support
- (zonfacter) Migrate to responsive jsonConfig with native TPY upload and packaged translations
- (zonfacter) Isolate compact-mode sessions, guard stale callbacks and avoid metadata reloads for missing acknowledgements
- (zonfacter) Update adapter-core, testing tools, CI checks and compatible dependency fixes
- (copilot) Adapter requires node.js >= 22 now
- (copilot) Adapter requires admin >= 7.7.22 now

### 1.7.0 (2026-02-12)
- (mcm1957) Adapter requires node.js >= 20 now
- (copilot) Adapter requires js-controller >= 6.0.11 now
- (copilot) Adapter requires admin >= 7.6.17 now
- (copilot) Migrated to ESLint 9 and @iobroker/eslint-config standard configuration
- (mcm1957) Dependencies have been updated

### 1.6.0 (2024-04-02)

* (mcm1957) Adapter requires node.js 18 and js-controller >= 5 now
* (mcm1957) Dependencies have been updated

### 1.5.3 (2023-10-29)

- (mcm1957) Dependencies have been updated

### 1.5.3-alpha.0 (2023-10-29)

- (mcm1957) Standard test environment has been updated

### 1.5.2 (2023-03-21)

- (dkleber89) Fix Adapter Checker Issues

### 1.5.1 (2022-03-19)

- (PLCHome) Add TIME, TIME_OF_DAY, TOD, DATE, DATE_AND_TIME and DT support
- (PLCHome) Support for strings with all char length

### 1.5.0 (2021-09-28)

- (dkleber89) Process next state in list when register subscriptions not before the previous is finish processed in plc

### 1.4.1 (2021-06-13)

- (dkleber89) Some little Adapter maintenance

### 1.4.0 (2021-01-25)

- (dkleber89) Add LREAL Support

### 1.3.0 (2021-01-25)

- (dkleber89) Set correct type for channels

### 1.2.2 (2020-05-30)

- (dkleber89) Clear reconnectTimeout on Adapter unload;

### 1.2.1 (2020-04-20)

- (dkleber89) Add CI over Github Actions; Update Dependencies;

### 1.2.0 (2020-01-02)

- (dkleber89) Add Support for Strings with fixed length to 80 Chars

### 1.1.0 (2019-11-12)

- (dkleber89) Add Support for older TwinCat2 Systems with no autosync

### 1.0.7 (2019-10-25)

- (dkleber89) Add Support for Compact Mode -> JS Controller >= 2.0.0

### 1.0.6 (2019-08-11)

- (dkleber89) Add check change of Datatype on resync

### 1.0.5 (2019-08-10)

- (dkleber89) Eslint, Prettier with Airbnb Codestyle, CI adopted, little random changes in Project Structure

[Older changelogs can be found there](CHANGELOG_OLD.md)

## License

The MIT License (MIT)

Copyright (c) 2024-2026 iobroker-community-adapters <iobroker-community-adapters@gmx.de>  
Copyright (c) 2018-2023 dkleber89 <dkleber89@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

### Dependency audit (2026-10-13)

Compatible lockfile fixes have been applied. Six npm audit findings remain in the dependency chains of `@iobroker/adapter-core` (`node-forge`, GHSA-86w9-cpqp-85rv) and the development test tooling (`esbuild`, GHSA-67mh-4wv8-2f99). npm currently proposes downgrading adapter-core/testing rather than a compatible fix. No forced downgrade or arbitrary dependency override was applied. Recheck these findings when upstream fixes become available.
