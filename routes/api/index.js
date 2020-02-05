const router = require('express').Router();
const adminRouter = require('./admin');
const blogRouter = require('./blog');

router.use('/admin', adminRouter);
router.use('/blog', blogRouter);

module.exports = router;