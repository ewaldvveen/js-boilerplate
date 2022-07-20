// This file isn't transpiled, so must use CommonJS and ES5.

// Register Babel to transpile before the tests run.
require('@babel/register')();

// Disable Webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
