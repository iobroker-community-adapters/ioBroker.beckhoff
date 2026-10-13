const path = require('path');
const { tests } = require('@iobroker/testing');

// Run integration tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.integration(path.join(__dirname, '..'), process.env.BECKHOFF_TEST_CONTROLLER ? { controllerVersion: process.env.BECKHOFF_TEST_CONTROLLER } : {});
