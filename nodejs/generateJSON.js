const fs = require('fs');

const obj = {
  table: [],
};

obj.table.push({id: 1, square:2});

const json = JSON.stringify(obj);

fs.writeFile("myjsonfile.json", json, "utf8", () => {});
