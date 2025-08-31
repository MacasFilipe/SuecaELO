import Model from "./Model.js";

const teamSchema = {
  id: "INTEGER PRIMARY KEY AUTOINCREMENT",
  idPlayerA: "TEXT NOT NULL",
  idPlayerB: "INTEGER",
  gamesPlayed: "INTEGER",
  gameWins: "INTEGER"
};

class Team extends Model {
  constructor() {
    super("Teams", playerSchema);
  }
}

export default new Team();