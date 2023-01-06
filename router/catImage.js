import express from 'express'
const router = express.Router();

import catBreedController from '../controllers/catImageController.js';

router.route('/:id')
  .get(catBreedController.catBreedImagewithID)

export default router