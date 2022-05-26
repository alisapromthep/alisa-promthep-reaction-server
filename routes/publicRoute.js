const express = require('express');
const router = express.Router();
const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);

//get all food icons for the form 
router.get("/food", (_req,res)=>{
    knex
        .from('food_info')
        .select('id', 'name', 'img_file')
        .then((data)=>{
            res.status(200).json(data)
        })
})

//get all the symptoms icons for the form 
router.get("/symptoms", (_req,res)=>{
    knex
        .from('symptom_info')
        .select('id', 'name', 'img_file')
        .then((data)=>{
            res.status(200).json(data)
        })
})



module.exports = router;