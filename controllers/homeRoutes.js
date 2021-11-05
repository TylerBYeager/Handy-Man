const { Vendor, Category, Review, Pending, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    
    console.log("logged_in_status= " + JSON.stringify(req.session) )


    let loggedin_id;
    console.log("user id is: "+ req.session.user_id)
    console.log("vendor id is: "+ req.session.vendor_id)

    if(req.session.user_id){
      loggedin_id = req.session.user_id
    }
    else if(req.session.vendor_id){
      loggedin_id = req.session.vendor_id
    }
    console.log(loggedin_id)
    res.render("homepage", {loggedin_id, loggedIn : req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  try {
    res.render("search", {loggedIn : req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render("login-choice");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login/user", (req, res) => {
  try {
    is_user = true;
    res.render("user-login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login/vendor", (req, res) => {
  try {
    is_vendor = true;s
    res.render("vendor-login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up/", (req, res) => {
  try {
    res.render("signup-choice");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up/user", (req, res) => {
  try {
    res.render("user-signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up/vendor", (req, res) => {
  try {
    res.render("vendor-signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/contact-us", (req, res) => {
  try {
    res.render("contact-us", {loggedIn : req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/profile/:id", async (req, res) => {
      try {
        const vendorData = await Vendor.findByPk(req.params.id, {
          include:[
            {
              model: Category,
              attributes: ["name"]
            },
            {
              model: Review,
              attributes: ["review_text"]
            },
            {
              model: Pending,
              attributes: ["name"]
            }
          ],
        })
        
        const vendor_info = vendorData.get({plain: true})
        console.log(vendor_info)

        res.render("vendor-profile", {vendor_info, loggedIn : req.session.loggedIn });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/vendor-dashboard/:id", async (req, res) => {
  console.log("current vendor id is "+req.session.vendor_id)
  console.log("trying to access id of "+req.params.id)
  // if(req.session.vendor_id==req.params.id){
    try {
      const [vendorData, pendingData] = await Promise.all([
        Vendor.findByPk(req.params.id, {
          include:[
            {
              model: Category,
            }
          ],
        }),
        Pending.findAll({
          where: {
            vendor_id: req.params.id
          },
          
          include: [
            {
              model:Review,
            },
            {
              model:User,
            }
          ],
          raw:true,
          nest:true,
        })
      ]
    ) 
      console.log(pendingData)
      const vendor_info = vendorData.get({plain: true})
      console.log(vendor_info)

      res.render("vendor-dashboard", {vendor_info, pendingData, loggedIn : req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
    }
  // }
  // else{
  //   try{
  //     res.render("access-denied")
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }
});

router.get("/user-dashboard/:id", async (req, res) => {
  console.log("current user id is "+req.session.user_id)
  console.log("trying to access "+req.params.id)
  // if(req.session.user_id==req.params.id){
    try {
      const [userData, pendingData] = await Promise.all([
        User.findByPk(req.params.id),
        Pending.findAll({
          where: {
            user_id: req.params.id
          },
          
          include: [
            {
              model:Vendor,
            },
            {
              model:Review,
            }
          ],
          raw:true,
          nest:true,
        })
      ]
    ) 
      console.log(pendingData)
      const user_info = userData.get({plain: true})
      console.log(user_info)
      console.log("1234")
      console.log("5678")

      res.render("user-dashboard", {user_info, pendingData, loggedIn : req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
    }
  // }
  // else{
  //   try{
  //     res.render("access-denied")
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }
});


module.exports = router;