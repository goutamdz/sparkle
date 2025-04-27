const mongoose=require('mongoose')

const incidentSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['open','in-progress','resolved'],
        default:'open'
    },
    severity:{
        type:String,
        enum:['low','medium','high'],
        default:'High'
    }
},{timestamps:true})

const Incident=mongoose.model('Incident',incidentSchema);
module.exports=Incident;