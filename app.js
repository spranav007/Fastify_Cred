import nconf from "nconf";

import loadSettings from "./config/configurationAdaptor.js";

import createServer from "./server.js";
import connectMongo from "./src/db/db.js";

loadSettings()
  .then(() => {
    const dbConfig = nconf.get("db");

    //uncomment the below line when you inject a mongodb uri into the config file
    // connectMongo(dbConfig.mongodb.uri); 

    const serverOptions = {
      logSeverity: nconf.get("logSeverity"),
    };
    createServer(serverOptions);
  })
  .catch((error) => {
    console.log(error);
  });
