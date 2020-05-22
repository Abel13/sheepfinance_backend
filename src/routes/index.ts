import { Router } from 'express';
import incomingsRouter from './incomings.routes';

const routes = Router();

routes.use('/incomings', incomingsRouter);

export default routes;
