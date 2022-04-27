import { readFileSync, writeFileSync } from 'fs';

const textIn = readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
writeFileSync('./1-node-farm/starter/txt/outputD.txt', textOut);
console.log('File has been Writting');