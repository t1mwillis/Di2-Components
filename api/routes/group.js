const router = require('express').Router({mergeParams: true})
const Component = require('../models/component')

router.get('/', async (req, res, next) => {
  const { groupName } = req.params

  const query = { seriesId: groupName }

  const status = 200
  const response = await Component.find(query)
  res.json({ status, response })
})

module.exports = router