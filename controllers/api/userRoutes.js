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
// {name: , description: , address: , vendor_id: , user_id:, category_id: }
router.post('/new-request', async (req, res) => {
    try {
      const Data = await Pending.create(req.body);
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;