const express = require("express");
const router = express.Router();
const User = require("../models/user");

// INDEX ROUTE
router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
    });
});

// CREATE ROUTE
router.post("/", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    image: req.body.image
  });
  newUser.save().then(savedUser => {
    res.redirect(`/api/users`);
  });
});

//SHOW ROUTE
router.get("/:id", (req, res) => {
    const userId = req.params.id;
    const user = User.findById(userId).then((user) => {
      res.json(user);
    }).catch(err => {
    console.log(err);
    res.json(err);
  });
})

//UPDATE ROUTE
router.patch('/:id', (req, res) => {
    const userId = req.params.id
    const updatedUser = req.body
    const savedUser = User.findByIdAndUpdate(userId, updatedUser)
    .then((updatedUser) => {
        res.json(savedUser)
        res.redirect('/api/users')
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    const userId = req.params.id
    User.findByIdAndRemove(userId)
    .then(() => {
        console.log('deleted')
    }).catch((err) => {
        console.log(err)
    })
})


module.exports = router;
