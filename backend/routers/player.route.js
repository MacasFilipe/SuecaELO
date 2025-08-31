import express from 'express'

import { createPlayer , getPlayers} from '../controllers/player.controller.js';

const router = express.Router();

router.get("/", getPlayers);
router.post("/", createPlayer);

export default router;