const router = require('express').Router();
const {Review, Pending} = require('../../models');

// View review by pendingjob id
router.get('/:id', async (req, res) => {
    try {
      const Data = await Pending.findByPk(req.params.id, {
        include: [{model:Review}]
      });
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

// Post review for pendingjob by id
// {review_text: , user_id: , vendor_id: , pending_id: }
router.post('/', async (req, res) => {
    try {
      const Data = await Review.create(req.body);
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});


module.exports = router;
  