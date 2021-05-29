import express from 'express'
import { getLucky } from '../controller/controller.js';
const router = express.Router();

router.get('/', getLucky)

export default router;