const router = require('express').Router();
const {User, Pending} = require('../../models');

// User Sign Up
router.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body);

      req.session.save(() => {
        req.session.user_id = newUser.isSoftDeleted;
        req.session.loggedIn = true;
        res.json(newUser);
      });
    }catch(err){
      console.log(err);
      res.status(500).json(err)
    }
});

// User Log In
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res.status(400).json({ message: "Incorrect email or password. Try again"});
        return;
      }

      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect email or password. Try again"});
        return;
      }

      req.session.save(() => {
        req.session.user_id = userData.isSoftDeleted;
        req.session.loggedIn = true;

        res.json({ user: userData, message: "Successfully logged in!"});
      });
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