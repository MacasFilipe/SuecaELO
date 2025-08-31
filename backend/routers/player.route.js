import express from 'express'

import { createPlayer , getPlayers, deletePlayer} from '../controllers/player.controller.js';

const router = express.Router();

router.get("/", getPlayers);
router.post("/", createPlayer);
router.delete("/:id", deletePlayer);

export default router;