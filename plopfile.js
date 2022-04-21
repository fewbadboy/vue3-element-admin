const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt')
const viewGenerator = require('./plop-templates/view/prompt')

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
  plop.setGenerator('view', viewGenerator)
}
