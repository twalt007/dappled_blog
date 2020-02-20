const router = require('express').Router();
const createRouter = require('./createPost');
const getAllRouterAdmin = require('./getAllPostsAdmin');
const getDetailsRouterAdmin = require('./getPostDetailsAdmin');
const updateRouter = require('./updatePost');
const deleteRouter = require('./deletePost');

router.post('/new-post', createRouter);
router.get('/post-list/:userId', getAllRouterAdmin);
router.get('/post-details/:postId', getDetailsRouterAdmin);
router.patch('/post-details/:postId', updateRouter);
router.patch('/delete-post/:postId', deleteRouter);

module.exports = router;
