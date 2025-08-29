import Database from "better-sqlite3";



export const connectDB = async () => {
  try {
    const conn = new Database(process.env.DATA_BASE, { verbose: console.log });
    conn.pragma('journal_mode = WAL');
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1); // 1 code means exit with failure, 0 means success
  }
}