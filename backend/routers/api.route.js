import express from "express";

import playerRouter from "./player.route.js";

const router = express.Router();

// Manega Player values
router.use("/player", playerRouter);

export default router;