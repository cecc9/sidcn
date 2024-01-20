//const path = require('path');

//const modulePath = require.resolve('radiuskit/package.json');

//const packageDirectory = path.dirname(modulePath);


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example app's own components
    './src/**/*.{js,jsx,ts,tsx}',
    '../src/**/*.{js,jsx,ts,tsx}',

    //`${packageDirectory}/src/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
