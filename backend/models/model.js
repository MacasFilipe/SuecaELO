let db = null;

class Model {
  constructor(tableName, schema) {
    this.tableName = tableName;
    this.schema = schema;
  }

  async init() {
    if (!db) {
      const { connectDB } = await import("../config/db.js");
      db = await connectDB();
    }

    const columns = Object.entries(this.schema)
      .map(([name, type]) => `${name} ${type}`)
      .join(", ");
    db.prepare(`CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns})`).run();
  }

  async create(data) {
    await this.init();
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => "?").join(", ");
    const stmt = db.prepare(
      `INSERT INTO ${this.tableName} (${keys.join(", ")}) VALUES (${placeholders})`
    );
    const info = stmt.run(...values);
    return info.lastInsertRowid;
  }

  async findAll() {
    await this.init();
    return db.prepare(`SELECT * FROM ${this.tableName}`).all();
  }

  async findById(id) {
    await this.init();
    return db.prepare(`SELECT * FROM ${this.tableName} WHERE id = ?`).get(id);
  }

  async update(id, data) {
    await this.init();
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setString = keys.map((k) => `${k} = ?`).join(", ");
    return db.prepare(`UPDATE ${this.tableName} SET ${setString} WHERE id = ?`).run(...values, id).changes;
  }

  async delete(id) {
    await this.init();
    return db.prepare(`DELETE FROM ${this.tableName} WHERE id = ?`).run(id).changes;
  }
}

export default Model;