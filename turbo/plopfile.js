module.exports = function (plop) {
  console.log("plopfile.js");
  plop.load('plop-pack', {}, { helpers: {'js-header': 'titleComment'} });
};