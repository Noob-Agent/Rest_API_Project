
// get '/users' -> finds all users
// post '/users' -> creates a user
// get '/users/:id' -> finds user details
// delete '/users/:id' -> deletes a user
// patch '/users/:ud' -> updates a user

const express=require('express');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/users.js')
const app=express();
const PORT=5000;

app.use(bodyParser.json());
// app.use(express.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send('Hello from HOMEPAGE');
});



app.listen(PORT,()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
})


