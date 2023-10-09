import { Router } from "express";
import youtbeController from "../controller/youtbeController.js";

const router = Router();

router.get('/', youtbeController.getYoutbeDownloader);

export default router;