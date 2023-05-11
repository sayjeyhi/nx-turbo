const getPksList = require('../utils/get-pkgs-list');
const checkboxPlus = require('inquirer-checkbox-plus-prompt');

const appRootFiles = [
  'app/layout.tsx',
  '.eslintrc.js',
  'next.config.js',
  'next-env.d.ts',
  'README.md',
  'tsconfig.json',
];
const testRootFiles = [
  'src/e2e/app.cy.ts',
  'src/fixtures/example.json',
  'src/support/app.po.ts',
  'src/support/commands.ts',
  'src/support/e2e.ts',
  '.eslintrc.json',
  'cypress.config.ts',
  'tsconfig.json'
];

const appRootFilesCopy = appRootFiles.map(file => ({
  type: "copy",
  src: "./plop/templates/turbo-app/" + file,
  dest: "apps/{{dashCase name}}/" + file,
}));
const testRootFilesCopy = testRootFiles.map(file => ({
  type: "copy",
  src: "./plop/templates/turbo-app-e2e/" + file,
  dest: "apps/{{dashCase name}}-e2e/" + file,
}));

module.exports = (plop) => {
  plop.load("plop-action-copy")
  plop.setPrompt('checkbox-plus', checkboxPlus);

  plop.setDefaultInclude({ generators: true });
  plop.setGenerator('app', {
    description: 'Nextjs application',
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
      {
        type: 'checkbox-plus',
        name: 'forbiddenPackages',
        message: 'Select forbidden packages in this app:',
        highlight: true,
        searchable: true,
        default: [],
        source: () => getPksList(),
      },
      {
        type: 'confirm',
        name: 'e2eEbabled',
        message: 'Do you want this app to contain e2e tests?',
        default: true,
      },
    ],
    actions: function(data) {
      console.log("data", data);
      const actions = [
        /**
         * Create app folder
         */
        {
          type: 'add',
          path: 'apps/{{dashCase name}}/package.json',
          templateFile: '../templates/turbo-app/package.hbs'
        },
        {
          type: 'add',
          path: 'apps/{{dashCase name}}/app/page.tsx',
          templateFile: '../templates/turbo-app/app/page.hbs'
        },
        /**
         * Copy base app files
         */
        ...appRootFilesCopy,
      ];

      if(data.e2eEbabled) {
        actions.push(
          /**
           * Create app e2e tests
           */
          {
            type: 'add',
            path: 'apps/{{dashCase name}}-e2e/package.json',
            templateFile: '../templates/turbo-app/package.hbs'
          },
          /**
           * Copy base test files
           */
          ...testRootFilesCopy
        );
      }

      return actions;
    }
  })
};