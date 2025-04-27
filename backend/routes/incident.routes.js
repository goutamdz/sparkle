const express = require('express');
const router = express.Router();
const {getAllIncidents,getIncidentById,createIncident,deleteIncident}=require('../controllers/incident.controllers')

router.get('/',(req,res)=>{
    res.send("Hello from incident route! testing .....")
})

router.get('/getAllIncidents',getAllIncidents)

router.get('/getIncidentById/:id',getIncidentById)

router.post('/createIncident',createIncident)

router.delete('/deleteIncident/:id',deleteIncident)

module.exports = router;
