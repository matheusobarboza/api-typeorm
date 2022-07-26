import { Router } from 'express';
import { RoomController } from './controllers/RoomController';
import { SubjectController } from './controllers/SubjectController';

export const routes = Router();

const subjectController = new SubjectController();
const roomController = new RoomController();

routes.post('/subject', subjectController.create);
routes.post('/room', roomController.create);