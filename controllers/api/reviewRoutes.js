const router = require('express').Router();
const {Review, Pending} = require('../../models');
const withAuth = require("../../utils/auth");

// View review by pendingjob id
router.get('/:id', async (req, res) => {
    try {
      const Data = await Pending.findByPk(req.params.id, {
        include: [{model:Review}]
      });
      if (!Data) {
        res.status(404).json("Pending job doesn't exist");
      } else {
        res.status(200).json(Data)
      }
    }catch(err){
      res.status(500).json(err)
    }
});

// Post review for pendingjob by id
// {review_text: , user_id: , vendor_id: , pending_id: }
router.post('/', withAuth, async (req, res) => {
    try {
      const Data = await Review.create(req.body);
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});


module.exports = router;
  