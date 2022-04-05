const mongoose =require('mongoose')
const Problem=new mongoose.Schema(
{
    problem:{type:String},
},
{
collection:'problems'
}
)
const model =mongoose.model('Problems',Problem)
module.exports=model