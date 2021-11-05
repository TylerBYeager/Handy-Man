# Handy Man: A Handy Man Can!
# Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests) (not available in this project)
  * [Questions](#questions)
  
  ## Description  
  Handy Man was our answer to an issue nearly everyone has encountered. We are all able to order food or a ride to our houses. However, when the home needs repairs finding a skilled tradesman can be difficult. We have to sift through a ton of online searches, reviews, and unanswered call before ultimately picking the first person available and paying too much. Handy Man allows Users to find tradesmen by category, see reviews, and instantly chat to discuss the potential repairs/projects. The idea is to create a business model for "day-of" home repairs or construction projects. 

![Demo](https://github.com/TylerBYeager/Handy-Man/blob/main/public/img/Handy-Man%20Demo.gif)

  ## Code Snippets
  Here are some code snippets and what they accomplished. This first snippet is from the models/index.js and creates the relationships between all of our tables. 
  ```
    // Vendor and Category Associations
    Vendor.belongsTo(Category, {
        foreignKey: 'category_id',
    });

    Category.hasMany(Vendor, {
        foreignKey:'category_id',
        onDelete:'CASCADE',
    });

    // Request Associations
    Pending.belongsTo(Category, {
        foreignKey: 'category_id',
    });

    Category.hasMany(Pending, {
        foreignKey:'category_id',
    });

    Pending.belongsTo(User, {
        foreignKey: 'user_id',
    });

    User.hasMany(Pending, {
        foreignKey:'user_id',
    });

    Pending.belongsTo(Vendor, {
        foreignKey: 'vendor_id',
    });

    Vendor.hasMany(Pending, {
        foreignKey:'vendor_id',
    });
    // Review associations
    Review.belongsTo(Pending, {
        foreignKey:'pending_id'
    })

    Pending.hasOne(Review, {
        foreignKey:'pending_id',
    });


    Review.belongsTo(User, {
        foreignKey:'user_id'
    })

    User.hasMany(Review, {
        foreignKey:'user_id',
    });

    Review.belongsTo(Vendor, {
        foreignKey:'vendor_id'
    })

    Vendor.hasMany(Review, {
        foreignKey:'vendor_id',
    });

    module.exports = {Category, Pending, Review, User, Vendor}
  ```

  This second snippet is found within the userRoutes.js file. This creates a POST routes that, on the Front End, is how a User would log in to their account if they have already made one. There are several checks in place that will throw errors at different points if anything is invalid or doesn't exist. 
  ```
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
  ```

  The third snippet is is the inverse of the previous bit of code. This is found within the public/logout.js file. This creates an asynchronous function that will trigger differently depending on whether a user or a vendor is logging out of their account. This saved us from creating a separate code specifically for vendors. 
  ```
    async function logout() {
        try {
            const [userResponse, vendorResponse] = await Promise.all([
                fetch("/api/users/logout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                }),
                fetch("/api/vendors/logout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                }),
            ]);

            if (userResponse.ok) {
                document.location.replace('/');
            } else if (vendorResponse.ok) {
                document.location.replace('/');
            }
            else {
                alert('Something went wrong!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    document.querySelector('#logout').addEventListener('click', logout);
  ```

  The fourth snippet is small but accomplishes a fun feature on our app. Adding the following script to the bottom of your head tag in your HTML will allow for the creation of a Crisp Live Chat widget. 
  ```
    <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="d982b479-af3b-4f99-846a-76e5c9e81075";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
  ```

  ## Installation
  To install:
  ```
  Once you have a working SSH key added to your Github account, go to the Handy-Man repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
  ```

  Next, 
  ```
  Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
  "git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
  ```
  Lastly, 
  ```
  Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "Handy-Man". Simply type in "code ." to open it in your code editor of choice. Lastly, check the package.json file to see the dependencies needed to run this. WIthin your terminal run an npm install. You will also want to create a .env for your local server credentials. 

  ```

  ## Usage
  This app can be used to chat with live tradesmen, discuss repairs/projects, negotiate a price, and set up a work request. Future developments will add a way to track a vendors location once a work request is created and the ability to exchange money for services rendered. 

  ## Built With
  * [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [NODE.JS](https://nodejs.org/en/)
  * [EXPRESS.JS](https://expressjs.com/)
  * [MYSQL](https://www.mysql.com/)
  * [SEQUELIZE](https://sequelize.org/)
  * [DOTENV](https://www.npmjs.com/package/dotenv)
  * [CSS](https://www.w3schools.com/css/)
  * [HTML](https://www.w3schools.com/html/)
  * [EXPRESS-SESSION](https://www.npmjs.com/package/express-session)
  * [HANDLEBARS.JS](https://handlebarsjs.com/)
  * [Crisp Live Chat Widget](https://crisp.chat/en/)

  ## Deployed Link
* [See the Live Site!](https://handy-man-1024.herokuapp.com) 

## Authors

* **Tyler Brian Yeager**
* **Isaac Cortes Hernandez**
* **Tony Zhang**

- [Link to Repo Site](https://github.com/TylerBYeager/Handy-Man)
- [Link to Tyler's Github](https://github.com/TylerBYeager)
- [Link to Tyler's LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)
- [Link to Isaac's Github](https://github.com/icortes)
- [Link to Isaac's LinkedIn](https://www.linkedin.com/in/cortes-isaac/)
- [Link to Tony's Github](https://github.com/Tonyzyt9947)
- [Link to Tony's LinkedIn](https://www.linkedin.com/in/tony-zhang-61670421b/)

## Contributions

- UC Berkeley Coding Bootcamp & its Instructor and TA's
- BCS learning assistants & tutors
- Google 

## License
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Questions
- wow_d2@hotmail.com (Tyler's Email)
- isaaccortes014@gmail.com (Isaac's Email)
- tz16917@gmail.com (Tony's Email)
