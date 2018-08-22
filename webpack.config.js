const path = require('path');
const main = require('./package.json');

const modules = [];
const deps = main.dependencies;
Object.keys(deps).forEach((dep) => {
  /* eslint-disable global-require */
  const pkg = require(`./node_modules/${dep}/package.json`);
  const ext = path.extname(pkg.main);
  // only process js module
  if (!ext || /^\.js$/.test(ext)) {
    const module = {
      ext,
      entry: path.join(__dirname, `./node_modules/${dep}`, `${pkg.main}${!ext ? '.js' : ''}`),
      output: {
        filename: `${dep}.js`,
        export: dep
      },
      name: dep
    };
    modules.push(module);
  }
});

const configs = [];
modules.forEach((module) => {
  configs.push({
    mode: 'production',
    name: `js-module-${module.name}`,
    entry: module.entry,
    output: {
      path: path.resolve(__dirname, 'src', 'lib'),
      filename: module.output.filename,
      library: module.output.export,
      libraryTarget: 'commonjs'
    }
  });
});

module.exports = configs;
