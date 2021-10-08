const express = require('express')

const router = express.Router()


router.use('*', (req, res) => { // eslint-disable-line
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = router
