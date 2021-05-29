import express from 'express'
import { getLucky } from '../controller/controller.js';
import { getForm } from '../controller/controller.js';

import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', getLucky);
router.post('/lucky-numbers', getForm);

export default router;