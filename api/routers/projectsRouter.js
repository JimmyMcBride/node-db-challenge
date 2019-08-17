const express = require('express')

const db = require('../../data/db-config.js')

const router = express.Router()

// GET all projects 🚀
router.get('/', async (req, res) => {
  try {
    const projects = await db('projects')
    res.status(200).json(projects)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error getting projects 💩', error: err
    })
  }
})

module.exports = router