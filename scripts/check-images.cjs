const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const srcDir = path.join(workspaceRoot, 'src');
const imagesDir = path.join(srcDir, 'assets', 'images');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, filelist);
    } else if (/\.(js|jsx|ts|tsx|css|html)$/.test(file)) {
      filelist.push(full);
    }
  });
  return filelist;
}

function extractImagePaths(fileContent) {
  const re = /\/src\/assets\/images\/[A-Za-z0-9 _\-\.\(\)]+?\.(?:jpg|jpeg|png|svg|webp|avif)/gi;
  const matches = fileContent.match(re) || [];
  return matches.map(m => m.replace(/\\/g, '/'));
}

const files = walk(srcDir);
const allRefs = new Set();
files.forEach(f => {
  try {
    const txt = fs.readFileSync(f, 'utf8');
    const refs = extractImagePaths(txt);
    refs.forEach(r => allRefs.add(r));
  } catch (err) {
    // ignore
  }
});

const refs = Array.from(allRefs).sort();

const results = refs.map(r => {
  const filename = r.replace('/src/assets/images/', '');
  const candidate = path.join(imagesDir, filename);
  const exists = fs.existsSync(candidate);
  return { ref: r, filename, candidate, exists };
});

let actual = [];
try {
  actual = fs.readdirSync(imagesDir).sort();
} catch (err) {
  actual = [];
}

const summary = {
  scannedFiles: files.length,
  referencedCount: refs.length,
  existingImageFilesCount: actual.length,
  results,
  actual
};

console.log(JSON.stringify(summary, null, 2));
