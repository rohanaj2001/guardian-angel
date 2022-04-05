const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { json } = require("express/lib/response");
const app = express();
const mongoose=  require('mongoose')
const problem =require('./user.model')
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));

app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://<username>:<password>@cluster0.81etx.mongodb.net/guardian-angel?retryWrites=true&w=majority',{
//This version of code is public so I have removed some sensitive information

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("connection successful...!"))
.catch((err)=>console.log("connection failed :"+err))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/privacy", (req, res) => {
  res.sendFile(path.join(__dirname, "privacy.html"));
});
app.get("/contribute", (req, res) => {
  res.sendFile(path.join(__dirname, "contribute.html"));
});

app.post("/problem",async (req, res) => {
  const a = JSON.stringify(req.body);
  console.log(a);
  JSON.parse(a)
  try{
      const prob =await problem.create({
          problem : a
      })

      res.json({status :'ok'})
      console.log("1 problem added");
  }catch(err)
  {
    res.json({status :'error'})
    console.log("error :"+err);
  }

})

app.listen(process.env.PORT || 5000)