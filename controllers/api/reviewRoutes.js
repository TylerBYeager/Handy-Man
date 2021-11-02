const router = require('express').Router();
const {Review, Pending} = require('../../models');

// View review by pendingjob id
router.get('/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// Post review for pendingjob by id
router.post('/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});


module.exports = router;
  