import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();
const studentRoutes = express.Router();

router.get('/', AppController.getHomepage);
studentRouter.get('/', StudentsController.getAllStudents);
studentRouter.get('/:major', StudentsController.getAllStudentsByMajor);
export { router, studentRouter };
