import express from 'express';

import { createEmployee, findEmployee,getEmployees } from '../controllers/employees.js';


const  router = express.Router();



router.get('/',getEmployees);


router.post('/',createEmployee);

router.get('/:id',findEmployee)

export default router;