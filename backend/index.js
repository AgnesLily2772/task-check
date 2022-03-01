import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes.js'

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/todo',todoRoutes)
const dburl = "mongodb+srv://nesly:nesly2772@cluster0.f2fvl.mongodb.net/TaskList?retryWrites=true&w=majority"
const port = 2772;

mongoose.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(port,()=>console.log(`Server is running on http://localhost:${port}`)))
.catch((error) => console.log(`${error} did not connect`));