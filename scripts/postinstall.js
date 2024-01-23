const fs = require('fs');
const path = require('path');

const tailwindConfigPath = path.resolve(__dirname, '../tailwind.config.js');

// Your custom content to be added to tailwind.config.js
const customConfigContent = `
const path = require('path');
const modulePath = require.resolve('radiuskit/package.json');
const packageDirectory = path.dirname(modulePath);

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    \`\${packageDirectory}/src/**/*.{js,jsx,ts,tsx}\`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;

// Check if tailwind.config.js already exists
if (fs.existsSync(tailwindConfigPath)) {
  // Read the existing content
  const existingConfig = fs.readFileSync(tailwindConfigPath, 'utf-8');

  // Append the custom content to tailwind.config.js
  fs.writeFileSync(tailwindConfigPath, existingConfig + customConfigContent);
} else {
  // If tailwind.config.js doesn't exist, create it with the custom content
  fs.writeFileSync(tailwindConfigPath, customConfigContent);
}

console.log('Custom Tailwind CSS configuration added.');
