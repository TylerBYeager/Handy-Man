const sequelize = require('../config/connection');
const {User, Category, Pending, Review, Vendor} = require('../models');


const categoryData = require('./categorySample.json')
const pendingData = require('./pendingSample.json')
const reviewData = require('./reviewSample.json')
const userData = require('./userSample.json')
const vendorData = require('./vendorSample.json')

const seedDatabase = async ()=>{
    try{
        await sequelize.sync({force: true});
        await Category.bulkCreate(categoryData);
        await Vendor.bulkCreate(vendorData)
        await User.bulkCreate(userData)
        await Pending.bulkCreate(pendingData);
        await Review.bulkCreate(reviewData);

        process.exit(0);

}catch(err){
    console.log(err)
    }
}

seedDatabase();