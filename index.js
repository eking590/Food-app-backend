import express from 'express'; 
import bodyParser from 'body-parser'; 

import { MONGO_URL } from './config/index.js';
import mongoose from 'mongoose';
import cors from 'cors'; 



const port = 6000; 



const app = express(); 



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs'); 


 



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next(); 
});  


//import routes 
import { categoryRoute, userRoute } from './routes/index.js';



//routes 
app.use('/user', userRoute) 
app.use('/category', categoryRoute); 




app.get('/', (req, res) => {
    res.send('Welcome to Food App, check in for Restuarant here!!!')
})
//connect to mongodb 
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...')) 
.catch(err => console.error('Could not connect to MongoDB...', err))

app.listen(process.env.PORT || port, () => {
    console.log(`Restuarant Server listening at http://localhost:${port}`)
})