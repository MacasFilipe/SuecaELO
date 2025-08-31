import Database from "better-sqlite3";

let dbInstance;

export const connectDB = async () => {
  try {
    if (!dbInstance) {
      // console.log(process.env.DATA_BASE);
      dbInstance = new Database(process.env.DATA_BASE, { verbose: console.log });
      dbInstance.pragma('journal_mode = WAL');
      console.log("SQLite connected.");
    }
    return dbInstance;
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1); // 1 code means exit with failure, 0 means success
  }
}