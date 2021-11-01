const Category = require('./Category')
const Jobs = require('./Jobs')
const Pending = require('./Pending')
const Review = require('./Review')
const User = require('./User')
const Vendor = require('./Vendor')

Jobs.belongsTo(Category, {
    foreignKey: 'category_id',
});

Category.hasMany(Jobs, {
    foreignKey:'category_id',
    onDelete:'CASCADE',
});

Jobs.belongsToMany(Vendor, {
    through:{
        model:Pending,
        unique: false
    }
});

Vendor.belongsToMany(Jobs, {
    through:{
        model:Pending,
        unique: false
    }
})

Review.belongsTo(Pending, {
    foreignKey:'pending_id'
})

Pending.hasMany(Review, {
    foreignKey:'pending_id',
});



module.exports = {Category, Jobs, Pending, Review, User, Vendor}