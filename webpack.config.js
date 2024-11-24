const path = require('path');

module.exports = {
  entry: './script.js',  // This should point to the location of your script.js file
  output: {
    path: path.resolve(__dirname, 'dist'),  // The output folder where the bundle will be placed
    filename: 'bundle.js',  // Name of the output bundled file
  },
  mode: 'development',  // Use development mode
};