const router = require('express').Router();
const {Review, Pending} = require('../../models');
const withAuth = require("../../utils/auth");

// View review by pendingjob id
router.get('/:id', async (req, res) => {
    try {
      const data = await Pending.findByPk(req.params.id, {
        include: [{model:Review}]
      });
      if (!data) {
        res.status(404).json("Pending job doesn't exist");
      } else {
        res.status(200).json(data)
      }
    }catch(err){
      res.status(500).json(err)
    }
});

// Post review for pendingjob by id
// {review_text: , user_id: , vendor_id: , pending_id: }
router.post('/', async (req, res) => {
    try {
      const data = await Review.create(req.body);
      res.status(200).json(data)
    }catch(err){
      res.status(500).json(err)
    }
});


module.exports = router;
  