import app from "./app.js";
import { connectToDb } from "./db/connection.js";

const PORT = process.env.PORT || 5000;

connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
  });
});



