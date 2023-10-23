const { v4: uuidv4 } = require('uuid');
let users=[];
const func1=(req,res)=>{
    const user=req.body;
    const userId=uuidv4(); 
    const userWithId={...user, id :userId};
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the Database`);
    
}
const func2=(req,res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
}
const func3=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!==id)
    res.send(`user with the id:${id} deleted from the database `)
}
const func4=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    const user=users.find((user)=>user.id===id);

    if(firstName){
        user.firstName=firstName;
    }

    if(lastName){
        user.lastName=lastName;
    }

    if(age){
        user.age=age;
    }
    res.send(`User with the id:${id} has been updated`)
}
module.exports={
    func1,func2,func3,func4,users
}