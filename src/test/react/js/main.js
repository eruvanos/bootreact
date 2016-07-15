require("jasmine-jquery");

var testsContext = require.context(".", true, /_spec$/);
testsContext.keys().forEach(testsContext);



