const express = require('express');
const router = express.Router();
const {readFile} = require('../utility/readAndWrite');
const knexfile = require('../knexfile').development;
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: 'reaction',
        charset: 'utf8',
    },
    useNullAsDefault: true
});




//get all food icons for the form 
router.get("/food", (_req,res)=>{
    // const foodIconFile = readFile('./data/foodImg.json');
    // res.status(200).json(foodIconFile);
    knex('food_info')
        .then((data)=>{
            return res.status(200).json(data)
        })
        .catch((err)=> {
            console.log(err)
            return res.status(403).json({message: 'Unable to retrive data'})});
})

//get all the symptoms icons for the form 
router.get("/symptoms", (_req,res)=>{
    // const symptomIconFile = readFile('./data/symptomsImg.json');
    // res.status(200).json(symptomIconFile);
    knex('symptom_info')
    .then((data)=>{
        return res.status(200).json(data)
    })
    .catch((err)=> {
        console.log(err)
        return res.status(403).json({message: 'Unable to retrive data'})});


})



module.exports = router;