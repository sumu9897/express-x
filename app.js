import express from 'express';
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from 'hpp'
import cors from 'cors'
import cookie from "cookie-parser";
import router from "./src/routes/api.js";
const app=express();



// Middleware Implementation
app.use(cors())
app.use(helmet())
app.use(hpp())
const limiter=rateLimit({windowMs:15*60*1000, max:3000})
app.use(limiter);
app.use(cookie())


// Disable Response Cache
app.set('etag',false);


// Request Size Limit
app.use(express.json({limit:'20MB'}))
app.use(express.urlencoded({limit: false}))


// Database Connection
//mongoose.connect("",{autoIndex:true})


// API Route Connect
app.use("/api",router)



export default app;








