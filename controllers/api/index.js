const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const jobRoutes = require('./jobRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes')
const vendorRoutes = require('./vendorRoutes')

router.use('/categories', categoryRoutes);
router.use('/jobs', jobRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
router.use('/vendors', vendorRoutes);

module.exports = router;
