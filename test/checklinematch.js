'use strict';

var test = require('tap').test;
var linematch = require('../');

// Get command-line arguments
var lines1JsonStr = process.argv[2]; // First argument is the JSON string for lines1
var lines2JsonStr = process.argv[3]; // Second argument is the JSON string for lines2
var threshold = parseFloat(process.argv[4]); // Third argument is the threshold as a float

// Parse the JSON strings into JavaScript arrays
var lines1 = JSON.parse(lines1JsonStr);
var lines2 = JSON.parse(lines2JsonStr);

test('sample linematch', function (t) {
    var result = linematch(lines1, lines2, threshold);
    t.end();
});

