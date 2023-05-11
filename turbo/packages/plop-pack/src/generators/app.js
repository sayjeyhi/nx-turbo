const appRootFiles = [
  '.eslintrc.js',
  'next.config.js',
  'next-env.d.ts',
  'README.md',
  'tsconfig.json',
];
const rootFilesCopy = appRootFiles.map(file => ({
  type: "copy",
  src: "plop/templates/turbo-app/" + file,
  dest: "app/{{dashCase name}}/" + file,
}));

module.exports = (plop) => {
  plop.setDefaultInclude({generators: true});
  plop.setGenerator('app', {
    description: 'application controller logic',
    prompts: [
      {
        type: "input",
        name: "name",
        message: function () {
          return "Input app name";
        },
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "App name is required";
        },
      },
    ],
    actions: [
      /**
       * Create app folder
       */
      {
        type: 'add',
        path: 'apps/{{dashCase name}}/package.json',
        templateFile: 'plop/templates/turbo-app/package.hbs'
      },
      {
        type: 'add',
        path: 'apps/{{dashCase name}}/app/page.tsx',
        templateFile: 'plop/templates/turbo-app/app/page.hbs'
      },
      /**
       * Copy base app files
       */
      ...rootFilesCopy
    ]
  })
};