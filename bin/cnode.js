const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');
const dependencies = pkg.dependencies || [];
Object.keys(dependencies).forEach((moduleName) => {
  /* eslint-disable global-require */
  // const module = require(`../node_modules/${moduleName}/package.json`);
  // const ext = path.extname(module.main);
  // const input = path.join(__dirname, `../node_modules/${moduleName}`, `${module.main}${!ext ? '.js' : ''}`);
  // const output = path.join(__dirname, `../src/lib/${moduleName}${!ext ? '.js' : ext}`);
  // fs.createReadStream(input)
  //   .pipe(fs.createWriteStream(output));
});
