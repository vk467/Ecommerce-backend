import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config()
const app = express();

app.use(bodyParser.json());

export default app;