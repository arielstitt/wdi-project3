const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    const newUser = new User({
        username: req.body.username
    })
    newUser.save().then((savedUser) => {
        res.redirect(`/api/user`)
    })
})

module.exports = router