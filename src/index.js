import fs from 'fs'

fs.readdir(`${__dirname}/../icons/svg`, (err, folders) => {
  // ignore .DS_Store
  const categories = folders.filter((name) => name !== '.DS_Store');
  const path = `${__dirname}/../icons/svg/${categories[0]}`;
  fs.readdir(path, (err, files) => {
    // ignore .DS_Store
    const icons = files.filter((name) => name !== '.DS_Store');

    fs.readFile(`${path}/${icons[0]}`, 'utf8', (err, file) => {
      console.log()
    })
  })

})
