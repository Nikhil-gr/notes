import app from "./src/app.js";
import envConfig from "./src/config/config.js";
import connectToDatabase from "./src/config/db.js";

const startServer = async () => {
  await connectToDatabase();
  const port = envConfig.port || 3000;
  app.listen(port, () => {
    console.log(`server has started at port 3000`);
  });
};

startServer();
 