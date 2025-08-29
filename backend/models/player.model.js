import { connectDB } from "../config/db.js";

const PlayerSchema = ` CREATE TABLE IF NOT EXISTS Players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
  gamesPlayed INTEGER
  gameWin INTEGER
)
`
const Player = 0;
export default Player;