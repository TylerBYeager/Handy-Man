const router = require('express').Router();
const {Vendor, Pending, Category} = require('../../models');

// Vendor Sign Up
router.post('/signup', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// Vendor Log In
router.post('/login', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// Vendor Log Out
router.post('/logout', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// View vendor by ID
router.get('/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// View pending jobs by Vendor
router.get('/:vendor_id/pending', async (req, res) => {
    try {
      const Data = await Pending.findAll({
        where:{vendor_id:req.params.vendor_id}
      });
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

// View pending jobs by ID
router.get('/pending/:id', async (req, res) => {
    try {
      const Data = await Pending.findByPk(req.params.id);
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

// Approve job request
router.put('/approve/:pending_id', async (req, res) => {
    try {
      const Data = await Pending.update({approved:true}, {
        where:{
          id:req.params.pending_id,
        },
      })
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;
  