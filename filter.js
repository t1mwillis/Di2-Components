const components = require('./shimano_components')

const types = []

components.forEach(el => {
  if (!types.includes(el.categoryName)){
    types.push(el.categoryName)
  }
})

console.log(types)
