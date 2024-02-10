import express from 'express';

import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from 'hpp'
import cors from 'cors'
import {cookie} from "cookie-parser";

const app=express();

//Middleware
app.use(cors())
app.use(helmet())
app.use(hpp())

const  limiter=rateLimit({windowMs:15*60*100, max:3000})

app.use(limiter);
app.use(cookie())

//Disable Response Cache
app.set('etag',false);

//Request Size Limit
app.use(express.json({limit:'20MB'}))

