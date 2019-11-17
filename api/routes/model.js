const router = require('express').Router({mergeParams: true})
const Component = require('../models/component')

router.get('/', async (req, res, next) => {
  const { modelName } = req.params

  const query = { modelNo: modelName }

  console.log(query)

  const status = 200
  const response = await Component.find(query)
  res.json({ status, response })
})

module.exports = router