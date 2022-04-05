var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://rohanaj:rohanaj@cluster0.81etx.mongodb.net/guardian-angel?retryWrites=true&w=majority");
var ProblemSchema = new mongoose.Schema({
    Problem: String
   });
   var User = mongoose.model("User", nameSchema);