import express from 'express'
import mongoose  from 'mongoose';
import cors from 'cors';

import UserModel from './model/User.js';
import TransactionModel from './model/Transaction.js';


const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

   mongoose.connect('mongodb://localhost:27017/users');


app.post("/", (req, res) => {
  const {email, password} = req.body;
  UserModel.findOne({email : email})
  .then(user => {
      if(user) {
          if(user.password === password){
              res.json("Success")
          }else{
              res.json("The password is incorrect")
          }
      }else{
          res.json("No record existed")
      }
  })
})

app.post("/signup", (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.post("/dashboard", (req, res) => {
  TransactionModel.create(req.body).then(transactions=>res.json(transactions)).catch(err=>res.json(err))

})

app.get('/dashboard',(req,res)=>{
  TransactionModel.find({}).then(transaction=>res.json(transaction)).catch(err=>res.json(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})