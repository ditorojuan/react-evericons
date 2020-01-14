import fs from 'fs';
import {parse} from 'svgson';
import toCamelCase from "./utils/toCamelCase";

const exportPath = `${__dirname}/../js-package`;
const filePrefix = 'evi-';

if (!fs.existsSync(exportPath)) {
  fs.mkdirSync(exportPath)
}

if(fs.existsSync(`${exportPath}/index.js`)) {
  fs.unlinkSync(`${exportPath}/index.js`);
}

fs.readdir(`${__dirname}/../icons/svg`, (err, folders) => {
  // ignore .DS_Store
  const categories = folders.filter((name) => name !== '.DS_Store');
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const path = `${__dirname}/../icons/svg/${category}`;
    const files = fs.readdirSync(path);

    // ignore .DS_Store
    const icons = files.filter((name) => name !== '.DS_Store');

    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i].slice(0, icons[i].indexOf('.svg'));
      const svg = fs.readFileSync(`${path}/${icon}.svg`, 'utf8');
      parse(svg).then((svgson) => JSON.stringify(svgson.children)).then((json) => {
        const jsFile = `module.exports = ${json};`;
        fs.writeFile(`${exportPath}/${filePrefix + icon}.js`, jsFile, {flag: 'w+'}, (err) => {

          fs.writeFileSync(`${exportPath}/index.js`, `export { default as ${toCamelCase(filePrefix + icon)} } from "./${filePrefix + icon}.js" \n`, {flag: 'a'}, (err) => {});

          if (err) {
            console.error('Error while saving ' + icon + ' file', err);
            return;
          }
          console.log("Succesfully created " + icon + " file");
        })
      });
    }
  }
});

