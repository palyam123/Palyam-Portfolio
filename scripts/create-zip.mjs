import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import archiver from 'archiver';

async function createZip() {
  const output = createWriteStream('portfolio-website.zip');
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  archive.pipe(output);

  // Add all files except node_modules, .git, .bolt, and package-lock.json
  archive.glob('**/*', {
    ignore: [
      'node_modules/**',
      '.git/**',
      '.bolt/**',
      'package-lock.json',
      'portfolio-website.zip'
    ]
  });

  await archive.finalize();
  console.log('Portfolio website zip created successfully!');
}

createZip().catch(console.error);