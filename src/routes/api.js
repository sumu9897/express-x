import express from "express";
import * as WelcomeController from "../controllers/WelcomeController"
const router=express.Router();


router.get("/",WelcomeController.Welcome)
router.get("/welcome1",WelcomeController.Welcome)
router.get("/welcome2",WelcomeController.Welcome)


export default router;