const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes')
const vendorRoutes = require('./vendorRoutes')

router.use('/categories', categoryRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
router.use('/vendors', vendorRoutes);

module.exports = router;