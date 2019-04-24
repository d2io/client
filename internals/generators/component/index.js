/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      default: 'pages',
      choices: ['base', 'commons', 'pages'],
      message: 'What is component type?',
      validate: (answer) => {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'desc',
      message: 'What is describe about your component?',
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: data => {
    let folderPath;
    data.date = new Date().toLocaleString('vi');

    if (data.type === 'base') {
      folderPath = '../../app/base/components';
    } else {
      folderPath = `../../app/components/${data.type}`;
    }

    const componentPath = `${folderPath}/{{properCase name}}`;

    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: `${componentPath}/index.js`,
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
    ];

    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${componentPath}/Loadable.js`,
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
