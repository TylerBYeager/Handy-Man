const Category = require('./Category')
const Pending = require('./Pending')
const Review = require('./Review')
const User = require('./User')
const Vendor = require('./Vendor')

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