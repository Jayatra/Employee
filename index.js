import express from 'express';
import bodyParser from 'body-parser';


import employeeRoutes from './routes/employee.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/employees',employeeRoutes)

app.get('/',(req,res)=> res.send('hello')
)


app.listen(PORT,()=>console.log(`Server is connected on : http://localhost:${PORT}`));