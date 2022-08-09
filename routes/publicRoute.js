const express = require('express');
const router = express.Router();
const {readFile} = require('../utility/readAndWrite');

//get all food icons for the form 
router.get("/food", (_req,res)=>{
    const foodIconFile = readFile('./data/foodImg.json');
    res.status(200).json(foodIconFile);

})

//get all the symptoms icons for the form 
router.get("/symptoms", (_req,res)=>{
    const symptomIconFile = readFile('./data/symptomsImg.json');
    res.status(200).json(symptomIconFile);
})



module.exports = router;