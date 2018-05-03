'use strict';

import express from 'express';
import { join } from 'path';
import { urlencoded, json } from 'body-parser';

const app = express();
const PORT = 3001;

app.use(express.static(join(process.cwd(), 'public')));
app.use(urlencoded({ extended: false }));
app.use(json());

//Routes
// import getTitles from './routes/get-titles';
import router from './routes';

app.use('/api', router);
// app.use('/api/getTitles', getTitles);

app.listen(PORT);
console.log(`Listening at port ${PORT}`);
