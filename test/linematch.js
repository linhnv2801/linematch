'use strict';

var test = require('tap').test;
var linematch = require('../');

// Get command-line arguments
var lines1File = process.argv[2]; // First argument is the path to lines1 file
var lines2File = process.argv[3]; // Second argument is the path to lines2 file
var threshold = parseFloat(process.argv[4]); // Third argument is the threshold as a float

// Load lines1 and lines2 data from files or any other source as needed
var lines1 = require(lines1File);
var lines2 = require(lines2File);

test('sample linematch', function (t) {
    var result = linematch(lines1, lines2, threshold);
    t.end();
});

