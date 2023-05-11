module.exports = function (plop) {
  plop.setWelcomeMessage(
    'Welcome to Next.js generator Starter! Pick an option from below:'
  );
  plop.load([
    './plop/generators/component.js',
    './plop/generators/app.js',
  ]);
};