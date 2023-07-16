const express=require('express')
const app=new express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan=require('morgan')
app.use(morgan('dev'))

const cors=require('cors')
app.use(cors())

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on code ${PORT}`);
});

const path=require('path');
app.use(express.static(path.join(__dirname+'/FrontEnd')));

const mongoose=require('mongoose');
const url = 'mongodb+srv://spvivekbabu:Fsda123@cluster0.h7vuisq.mongodb.net/';
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to MongoDB Atlas');
})
.catch((error)=>{
    console.error('MongoDB Atlas connection error:',error);
});

// Schema
const employeedataSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Email: String,
});

// Model
const Employee = mongoose.model('Employee', employeedataSchema);

// Get
app.get('/api/employeelist/:id',(req, res)=>{
    Employee.findById(req.params.id)
    .then((employee) => {
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch employee' });
    });
  });