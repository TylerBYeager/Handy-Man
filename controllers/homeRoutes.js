const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        console.log('hello');
      res.render('homepage', { message: 'hello'});
    }catch(err){
    console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;