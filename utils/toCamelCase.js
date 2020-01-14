export default function toCamelCase(string) {
  let aux = string.split('-');
  let newStr= '';
  for(let i = 0; i<aux.length; i++) {
    newStr += aux[i].split('').map((char, index ) => {
      return index === 0 ? char.toUpperCase() : char.toLowerCase()
    }).join('');
  }
  return newStr;
}
