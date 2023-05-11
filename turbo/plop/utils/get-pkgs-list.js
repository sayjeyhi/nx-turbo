const glob = require("glob");

function getPksList() {
  return glob.sync(`packages/*/package.json`, {}).map((fullPath) => fullPath.split("/")[1]);
}

module.exports = function () {
  const pkgs = getPksList();
  return new Promise((resolve) => {
    resolve(pkgs);
  });
};
