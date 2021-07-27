import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';


let employees =[]
export const createEmployee=(req,res)=>{
    const newEmployee = req.body;
    

    employees.push({...newEmployee,id:uuidv4()});

    res.send(`User with id ${newEmployee.name} is added to database`);


   // const addData = JSON.parse(newEmployee)

    // fs.writeFile('user.json',data,(err)=>console.log(err))
    // fs.appendFile('user.json',addData,(err)=>console.log(err))  

    const data = JSON.stringify(newEmployee,null,2)
    fs.writeFile('employees.txt',data,(err)=>console.log(err))
    fs.appendFile('employees.txt',data,(err)=>console.log(err))  

}

export const getEmployees = (req,res)=>{
    res.send(employees)
      const data = JSON.stringify(employees,null,2)
    fs.writeFile('employees.txt',data,(err)=>console.log(err))
    fs.appendFile('employees.txt',data,(err)=>console.log(err))  
}


export const findEmployee = (req,res)=>{
    const {id} = req.params;

    const foundEmployee = employees.find((newEmployee)=>newEmployee.id===id);

    res.send(foundEmployee)
}