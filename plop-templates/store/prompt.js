const { notEmpty } = require('../utils')

module.exports = {
  description: 'generate store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'store name please: ',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Choose Blocks:',
      choices: [
        {
          name: 'state',
          value: 'state',
          checked: true
        },
        {
          name: 'mutations',
          value: 'mutations',
          checked: true
        },
        {
          name: 'actions',
          value: 'actions',
          checked: true
        }
      ],
      validate(value) {
        if (!value.includes('state') && !value.includes('mutations')) {
          return 'store require at least state and mutations.'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const options = ['state', 'mutations']
    if (data.blocks.length === 3) {
      options.push('actions')
    }
    const actions = [
      {
        type: 'add',
        path: 'src/store/modules/{{name}}.js',
        templateFile: 'plop-templates/store/index.hbs',
        data: {
          options: options.join(',\n  '),
          state: data.blocks.includes('state'),
          mutations: data.blocks.includes('mutations'),
          actions: data.blocks.includes('actions')
        }
      }
    ]
    return actions
  }
}
