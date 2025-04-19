import express from "express";
import { googleLogin } from "../controllers/googleController.js";

const googleRouter = express.Router();

googleRouter.post("/login", googleLogin);
export default googleRouter;
