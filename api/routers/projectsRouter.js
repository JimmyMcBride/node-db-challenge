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

// GET a specific project by id 🍒
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const [project] = await db('projects')
      .where({ id })
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({
        message: 'Could not find the specified food item in database 🤷‍'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error retrieving the requested info from database 💩', error: err
    })
  }
})

module.exports = router