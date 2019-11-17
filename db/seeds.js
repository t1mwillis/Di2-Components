const mongoose = require('mongoose')
const config = require('../nodemon.json')
const Component = require('../api/models/component')

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, {useNewUrlParser: true})

  await Component.deleteMany()
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})