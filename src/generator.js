import fs from 'fs';
import pathExtractor from "../utils/pathExtractor";

let dict_pathsByName = {};
const exportPath = `${__dirname}/../const`;

fs.readdir(`${__dirname}/../icons/svg`, (err, folders) => {
  // ignore .DS_Store
  const categories = folders.filter((name) => name !== '.DS_Store');
  for (const index in categories) {
    const category = categories[index];
    const path = `${__dirname}/../icons/svg/${category}`;
    const files = fs.readdirSync(path);

    // ignore .DS_Store
    const icons = files.filter((name) => name !== '.DS_Store');

    for (const index in icons) {
      const icon = icons[index].slice(0, icons[index].indexOf('.svg'));
      const iconFile = fs.readFileSync(`${path}/${icon}.svg`, 'utf8');
      dict_pathsByName[`${icon}`] = pathExtractor(iconFile);
    }
  }
  if (!fs.existsSync(exportPath)) {
    fs.mkdirSync(exportPath)
  }
  fs.writeFile(`${exportPath}/icons.json`, JSON.stringify(dict_pathsByName), { flag: 'w+' }, (err) => {
    if (err) {
      console.error('Error while saving file', err);
      return;
    }
    console.log("Succesfully created paths file");
  });
});
