export default function hasValuesFromArray(set, arrays) {
  for (const elm of arrays) {
    if (!set.has(elm)) return false;
  }
  return true;
}
