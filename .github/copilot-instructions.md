# GitHub Copilot Instructions for ioBroker.beckhoff

This document provides guidelines for GitHub Copilot when working on the ioBroker.beckhoff adapter repository.

## General Guidelines

This repository contains an ioBroker adapter for communicating with Beckhoff PLCs via the ADS protocol. The adapter is implemented in JavaScript (Node.js) and follows the standard ioBroker adapter structure.

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