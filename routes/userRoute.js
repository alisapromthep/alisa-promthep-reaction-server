const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SERCRET_KEY;

//creating a new user 
router.post('/register', (req, res)=>{
    const newRegister = req.body;
    //add unique user_id 
    newRegister.user_id = uuid();

    // Store new User in the Users table
    knex("users")
        .insert(newRegister)
        .then(()=>{
            console.log(newRegister)
            res.status(200).json(newRegister)
        })
        .catch((err)=>{
            res.status(400).json({
                message: `Error creating user ${newRegister.username}`
            })
        })
})

//login 
function authorize (req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, SECRET_KEY, (err, decoded)=>{
        if (err){
            return res.status(403).json({success: false, message: "No Token."});
        } else {
            res.send(decoded)
            next()
        }
    })
}

router.post('/login', (req, res)=>{
    const {username: inputUsername, password: inputPassword} = req.body;
    knex('users')
        .where({
            username: inputUsername
        })
        .then((data)=>{
            const userLogin = data[0]
            if(data.length < 1) {
                res.status(403).json({error: "user doesn't exists"})
            } else {
                const {username, password} = userLogin
                if (password === inputPassword) {
                    console.log('found user', username)
                    const token = jwt.sign({username: username}, SECRET_KEY, {expiresIn: '24h'})
                    res.status(200).json({token: token})
                } else {
                    res.status(403).json({
                        error: "Password do not match record"
                    })
                }
            }
        })
})

//user new entry 
router.post('/entry', authorize, (req, res)=>{
    const inputEntry = req.body;

    knex('users')
        .where({username: inputEntry.username})
        .then((data)=>{
            console.log(data[0].user_id)
            const userId = data[0].user_id
            const newEntry = {
                "user_id": userId,
                "date": inputEntry.date,
                "time_of_day": inputEntry.time_of_day,
                "food": inputEntry.food,
                "symptom": inputEntry.symptom,
                "notes": inputEntry.notes
            }
            knex('user_logs')
                .insert(newEntry)
                .then(()=>{
                    res.status(200).json({message: 'added new entry'})
                })
                .catch((err)=>{
                    res.status(400).json({message: 'cannot add new entry'})
                })
        })
})


module.exports = router;