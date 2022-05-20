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
            req.decoded = decoded
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
                const {username, password, user_id} = userLogin
                if (password === inputPassword) {
                    console.log('found user', username)
                    const token = jwt.sign({username: username, user_id: user_id}, SECRET_KEY, {expiresIn: '24h'})
                    return res.status(200).json({token: token})
                } else {
                    return res.status(403).json({
                        error: "Password do not match record"
                    })
                }
            }
        })
})

//user new entry 
router.post('/entry', authorize, (req, res)=>{
    const inputEntry = req.body;
    console.log(req.decoded)

    knex('users')
        .where({username: req.decoded.username})
        .then((data)=>{
            const login_id = data[0].id;
            const newEntry = {
                "login_id": login_id,
                "user_id": req.decoded.user_id,
                "date": inputEntry.date,
                "time_of_day": inputEntry.time_of_day,
                "food": inputEntry.food,
                "symptom": inputEntry.symptom,
                "notes": inputEntry.notes
                }
                console.log(newEntry)
                return knex('user_logs')
                            .insert(newEntry)
                })
        .then(()=>{
            return res.status(201).json({message: 'added new entry'});
        })
        // .catch((err)=>{
        //     console.log('it got here')
        //     return res.status(400).json({message: 'cannot add new entry'});
        // })


})



// //delete entry 
// router.delete('/delete/:username', authorize, (req, res)=>{
//     knex('user_logs')
//         .where({username: req.params.username})


// })

module.exports = router;