export default function pathExtractor(file) {
  return file.slice(file.indexOf('d="') + 3, file.lastIndexOf('"'))
}
