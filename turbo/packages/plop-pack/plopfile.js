
console.log('plopfile-in.js');
module.exports = (plop) => {
  plop.setDefaultInclude({ helpers: true });

  plop.load([
    './src/generators/component.js',
    './src/generators/page.js',
    './src/generators/hook.js',
    './src/generators/icon.js',
    './src/generators/bootstrap.js',
    './src/generators/sanity.js',
  ]);
};
