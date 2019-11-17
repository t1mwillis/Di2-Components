const { NODE_ENV, PORT } = process.env
const express = require('express')
const app = express()

require('./db/connection')()

if (NODE_ENV === 'dev') app.use(require('morgan')('dev'))

app.use('/api/v1/components', require('./api/routes/components'))
app.use('/api/v1/components/group/:groupName', require('./api/routes/group'))
app.use('/api/v1/components/model/:modelName', require('./api/routes/model'))

app.use((req, res, next) => {
  const error = new Error(`Could not find ${req.method} ${req.path}`)
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  if (NODE_ENV === 'dev') console.error(err)
  const { message, status } = err
  res.status(status).json({ status, message })
})

const listener = () => console.log(`Listening on Port ${PORT}!`)
app.listen(PORT, listener)