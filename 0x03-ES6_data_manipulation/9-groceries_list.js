export default function groceriesList() {
  const arrays = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceriesMap = new Map();
  for (const elm of arrays) {
    groceriesMap.set(elm[0], elm[1]);
  }
  return groceriesMap;
}
