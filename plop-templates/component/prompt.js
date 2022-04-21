const { notEmpty } = require('../utils')

module.exports = {
  description: 'generate vue component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please(Use multi-word component names, eg: TodoItem): ',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Choose Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: '<style>',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (!value.includes('template') && !value.includes('script')) {
          return 'component require at least a <template> or <script> tag.'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: 'src/components/{{name}}/index.vue',
        templateFile: 'plop-templates/component/index.hbs',
        data: {
          name: '{{name}}',
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ]
    return actions
  }
}
