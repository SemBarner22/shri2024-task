const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const inputFilePath = path.join(__dirname, 'src', 'index.jsx');
const outputFilePath = path.join(__dirname, 'dist', 'index.js');

babel.transformFile(inputFilePath, {}, (err, result) => {
    if (err) {
        console.error('Error transforming file:', err);
    } else {
        fs.writeFileSync(outputFilePath, result.code, 'utf8');
        console.log('File successfully compiled:', outputFilePath);
    }
});