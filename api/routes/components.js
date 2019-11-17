const router = require('express').Router()
const Component = require('../models/component')

router.get('/', async (req, res, next) => {
  const status = 200
  const response = await Component.find(req.query)
  res.json({ status, response })
})

module.exports = router