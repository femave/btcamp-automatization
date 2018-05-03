import { Router } from 'express';
const router = Router();

import getTitles from './handlers/get-titles';

router.route('/getTitles').get(getTitles);

export default router;
