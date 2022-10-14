const nth_most_rate = (list, n) => {
  let map = {};
  let sorted = [];

  for (let i = 0; i < list.length; i++) {
    if (!map[list[i]]) {
      map[list[i]] = 0;
    }
    map[list[i]] += 1;
  }

  for (let i in map) {
    sorted.push([i, map[i]]);
  }
  sorted.sort(function (a, b) {
    return a[1] - b[1];
  });
  return sorted[n-1][0];
};
