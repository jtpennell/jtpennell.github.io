const fs = require('fs');
const prettier = require('prettier');

// Directory where Next.js export files are located
const exportDir = 'out';

// Function to format HTML files
function formatHtmlFiles() {
  const htmlFiles = fs.readdirSync(exportDir).filter(file => file.endsWith('.html'));

  htmlFiles.forEach(htmlFile => {
    const filePath = `${exportDir}/${htmlFile}`;
    const html = fs.readFileSync(filePath, 'utf8');
    const formattedHtml = prettier.format(html, {
      parser: 'html',
      printWidth: 120, // Adjust as needed
      htmlWhitespaceSensitivity: 'ignore', // Preserve inline whitespace
    });
    fs.writeFileSync(filePath, formattedHtml);
  });
}

// Execute the main function
formatHtmlFiles();
