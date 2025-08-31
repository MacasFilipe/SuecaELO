import express from 'express'
import { connectDB } from './config/db.js';

import API from './routers/api.route.js'

const app = express();
app.use(express.json());

app.use("/api", API);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  // Connection DataBase
  await connectDB();

  // Log Connection
  console.log(`Server Started at http://localhost:${PORT}`);
});