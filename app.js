require('dotenv').config();

//ambil module express
const express = require('express');
const app = express();

//ambil router yang mengandle endpoint user
const userRouter = require('./routes/user');
const association = require('./util/assoc_db');

//untuk ngambil request body
app.use(express.json());

//jalanin router
app.use(userRouter);

app.use("/", (req,res,next)=>{
  res.status(404).json({
    message: "Resource not found!"
  })
})

//ambil data dari dotenv
const PORT = process.env.PORT;

association()
.then(()=>{
  app.listen(PORT,()=>{
    console.log('server is running on port 5000');
  })
})
.catch(err=>{
  console.log(err.message);
})