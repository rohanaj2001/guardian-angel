var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.81etx.mongodb.net/guardian-angel?retryWrites=true&w=majority");
//This version of code is public so I have removed some sensitive information
var ProblemSchema = new mongoose.Schema({
    Problem: String
   });
   var User = mongoose.model("User", nameSchema);