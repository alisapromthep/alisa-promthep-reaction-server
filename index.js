const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const publicRouter = require('./routes/publicRoute');


require('dotenv').config();

const app = express();
const PORT =  process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/',(_req,res)=> res.send('Server is runninng'))

app.use('/user', userRouter);
app.use('/assets', publicRouter);

app.listen(PORT, ()=>{
    console.log(`🚨 Server listening on port ${PORT}`);
})
