#!/usr/bin/env node

var fs = require('fs'),
  compressor = require('node-minify');

new compressor.minify({
  type: 'gcc',
  fileIn: '../_s.js',
  fileOut: '../minified/_s.min.js',
  callback: function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("JS minified successfully.");
    }
  }
});
