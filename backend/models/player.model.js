import Model from "./Model.js";

const playerSchema = {
  id: "INTEGER PRIMARY KEY AUTOINCREMENT",
  name: "TEXT NOT NULL",
  age: "INTEGER",
  gamesPlayed: "INTEGER",
  gameWins: "INTEGER"
};

class Player extends Model {
  constructor() {
    super("Players", playerSchema);
  }

  async findByName(name) {
    await this.init();
    const stmt = db.prepare("SELECT * FROM Players WHERE name = ?");
    return stmt.all(name);
  }
}

export default new Player();