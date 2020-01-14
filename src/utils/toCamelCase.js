export default function toCamelCase(string) {
  let aux = string.split('-');
  let newStr= [];
  for(let i = 0; i<aux.length; i++) {
    newStr.push(aux[i].split('').map((char, index ) => {
      return index === 0 ? char.toUpperCase() : char.toLowerCase()
    }));
  }

  //just in case
  newStr[0][0] = newStr[0][0].toLowerCase();
  return  Array.prototype.concat.apply([], newStr).join('');
}
