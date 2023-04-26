export default function cleanSet(set, startString) {
  let results = '';
  if (!startString || !startString.length) return results;
  for (const elm of set) {
    if (elm && elm.startsWith(startString)) {
      results += `${elm.slice(startString.length)}-`;
    }
  }
  return results.slice(0, results.length - 1);
}
