import express from "express";

import playerRouter from "./player.route.js";

const router = express.Router();

// Manega Player values
router.use("/Player", playerRouter);

export default router;