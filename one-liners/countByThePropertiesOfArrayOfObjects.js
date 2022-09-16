const countElementsByProp = (arr, prop) =>
  arr.reduce(
    (prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev),
    {}
  );

// example
countElementsByProp(
  [
    { manufacturer: 'audi', model: 'q8', year: '2019' },
    { manufacturer: 'audi', model: 'rs7', year: '2020' },
    { manufacturer: 'ford', model: 'mustang', year: '2019' },
    { manufacturer: 'ford', model: 'explorer', year: '2020' },
    { manufacturer: 'bmw', model: 'x7', year: '2020' },
  ],
  'manufacturer'
); // { 'audi': 2, 'ford': 2, 'bmw': 1 }
