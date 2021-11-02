const router = require('express').Router();
const {User, Pending} = require('../../models');

// User Sign Up
router.post('/signup', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// User Log In
router.post('/login', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// User Log Out
router.post('/logout', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// User submit new request
router.post('/new-request', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;