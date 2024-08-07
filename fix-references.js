const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Directory where Next.js export files are located
const exportDir = path.join(__dirname, 'out');

// Function to fix references in an HTML file
function fixReferences(htmlFile) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const $ = cheerio.load(html);

  // Update CSS file references
  $('link[rel="stylesheet"]').each((i, link) => {
    const href = $(link).attr('href');
    if (href && href.startsWith('/_next')) {
      $(link).attr('href', href.replace('/_next', './_next'));
    }
  });

  // Update JavaScript file references
  $('script').each((i, script) => {
    const src = $(script).attr('src');
    if (src && src.startsWith('/_next')) {
      $(script).attr('src', src.replace('/_next', './_next'));
    }
  });

  // Update image file references
  $('img').each((i, img) => {
    const src = $(img).attr('src');
    if (src && src.startsWith('/_next')) {
      $(img).attr('src', src.replace('/_next', './_next'));
    }
  });

  // Update font file references
  $('link[rel="preload"]').each((i, link) => {
    const href = $(link).attr('href');
    if (href && href.startsWith('/_next')) {
      $(link).attr('href', href.replace('/_next', './_next'));
    }
  });

  // Update background image references in inline styles
  $('[style]').each((i, el) => {
    const style = $(el).attr('style');
    if (style && style.includes('url(')) {
      $(el).attr('style', style.replace(/url\(\/_next/g, 'url(./_next'));
    }
  });

  // Save the modified HTML back to file
  fs.writeFileSync(htmlFile, $.html(), 'utf8');
}

// Function to process all HTML files in the export directory
function processHtmlFiles() {
  const htmlFiles = fs.readdirSync(exportDir).filter(file => file.endsWith('.html'));

  htmlFiles.forEach(htmlFile => {
    const filePath = path.join(exportDir, htmlFile);
    fixReferences(filePath);
  });
}

// Execute the main function
processHtmlFiles();
