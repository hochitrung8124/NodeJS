import express from 'express';
const router = express.Router();
import SiteController  from '../app/controllers/SiteController.js';
//newsController.index();
router.use('/search', SiteController.search)
router.use('/', SiteController.index)
export default router;