import { Router } from 'express';
const router = Router();

import info from './handlers/info';

router.route('/').get(info);

export default router;
