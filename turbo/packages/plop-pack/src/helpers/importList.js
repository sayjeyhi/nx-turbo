module.exports = (plop) => {
  plop.load(['./getExport', './getImportPath']);
  plop.setPartial(
    'importList',
    `{{#each imports}}import {{getExport this}} from '{{getImportPath this}}';\n{{/each}}`
  );
  plop.setDefaultInclude({ helpers: true, partials: true });
};
