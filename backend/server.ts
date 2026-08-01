import app from "./src/app.js";
import envConfig from "./src/config/config.js";

const startServer = () => {
  const port = envConfig.port || 3000;
  app.listen(port, () => {
    console.log(`server has started at port 3000`);
  });
};

startServer();
