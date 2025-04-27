const incidentModel=require('../models/incident.model');

module.exports.getAllIncidents=async (requestAnimationFrame,res)=>{
    try {
        const incidents=await incidentModel.find({});
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const mongoose = require('mongoose');

module.exports.getIncidentById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid incident ID' });
    }

    try {
        const incident = await incidentModel.findById(id);
        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });
        }
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createIncident=async (req,res)=>{
    const {title,description,severity}=req.body;
    if(!title || !description || !severity){
        return res.status(400).json({message:'All fields are required'});
    }
    try {
        const newIncident=new incidentModel({
            title,
            description,
            severity
        });
        await newIncident.save();
        res.status(201).json(newIncident);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports.deleteIncident=async (req,res)=>{
    const {id}=req.params;
    try {
        const incident=await incidentModel.findByIdAndDelete(id);
        if(!incident){
            return res.status(404).json({message:'Incident not found'});
        }
        res.status(200).json({message:'Incident deleted successfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}