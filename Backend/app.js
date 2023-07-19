const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const app=new express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

function verifytoken(req,res,next){
  try {
    if(!req.headers.authorization) throw 'Unauthorized';
    let token=req.headers.authorization.split('')[1];
    if(!token) throw 'Unauthorized';
    let payload=jwt.verify(token,'secretKey');
    if(!payload) throw 'Unauthorized';
    res.status(200).send(payload);
    next()
    } catch (error) {
      res.status(404).send({message:'Not Found'})
  }
}

app.post('/login',async(req,res)=>{
  try {
    console.log(req.body);
    var email=req.body.email;
    var pass=req.body.password;
    if((email=="admin@employee.com"&&pass=="admin123")){
      let payload={email:email,password:pass};
      let token1=jwt.sign(payload,'secretkey');
      res.status(200).send({message:'Success',token:token1});
    }
    else if(email=="user@employee.com"&&pass=="user123"){
      let payload={email:email,password:pass};
      let token2=jwt.sign(payload,'secretkey');
      res.status(200).send({message:'Success',token:token2});
    }
    else{
      res.status(404).send({message:'Unauthorised'});
    }
  } catch (error) {
      res.status.send(404)({message:'Not Found'});

  }
})

app.post('/add',verifytoken,(req,res)=>{
  console.log(req.headers.authorization);
  res.status(200).send({message:'Success'});

})






app.listen(3000,()=>{
  console.log("server running")
})



























// const express=require('express')
// const app=new express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// const morgan=require('morgan')
// app.use(morgan('dev'))

// const cors=require('cors')
// app.use(cors())

// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log(`Server is running on code ${PORT}`);
// });

// const mongoose=require('mongoose');
// const url = 'mongodb+srv://spvivekbabu:Fsda123@cluster0.h7vuisq.mongodb.net/';
// mongoose.connect(url,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(()=>{
//     console.log('Connected to MongoDB Atlas');
// })
// .catch((error)=>{
//     console.error('MongoDB Atlas connection error:',error);
// });

// // Schema
// const employeedataSchema = new mongoose.Schema({
//     ID: Number,
//     Name: String,
//     Email: String,
// });

// // Model
// const Employee = mongoose.model('Employee', employeedataSchema);

// // Get
// app.get('/api/employeelist/:id',(req, res)=>{
//     Employee.findById(req.params.id)
//     .then((employee) => {
//       if (employee) {
//         res.status(200).json(employee);
//       } else {
//         res.status(404).json({ error: 'Employee not found' });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ error: 'Failed to fetch employee' });
//     });
//   });