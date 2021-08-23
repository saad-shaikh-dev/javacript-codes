function flattenArray(a) {
  return Array.isArray(a) ? [].concat(...a.map(flattenArray)) : a;
}

console.log(
  flattenArray([
    [0, 7],
    [2, 5, [7563]],
    [2, 9],
  ])
);
