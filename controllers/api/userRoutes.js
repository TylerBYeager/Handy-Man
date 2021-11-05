const router = require('express').Router();
const { User, Pending } = require('../../models');
const { update } = require('../../models/Category');

// User Sign Up
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// User Log In
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(400).json({ message: "Incorrect email or password. Try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password. Try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: "Successfully logged in!" });
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

// User Log Out
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.update(req.body,
      {
        individualHooks: true,
        where: {
          id: req.params.id
        }
      });
    if (!updateUser) {
      res.status(404).json({ message: "No user found" });
      return;
    } else {
      res.status(200).json(updateUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteUser) {
      res.status(404).json({ message: "User does not exist" });
      return
    } else {
      res.status(200).json(deleteUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// User submit new request
// {name: , description: , address: , vendor_id: , user_id:, category_id: }
router.post('/new-request', async (req, res) => {

    try {
      const data = await Pending.create(req.body);
      res.status(200).json(data)
    }catch(err){
      res.status(500).json(err)
    }

});

module.exports = router;