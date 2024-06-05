import nconf from "nconf";
import _ from "lodash";
const appSettingsPath = "./config/config.json";

const loadSettings = () =>
  new Promise((resolve, reject) => {
    console.log(appSettingsPath);
    try {
      if (_.isEmpty(appSettingsPath)) {
        throw new Error("Configuration settings path is required.");
      }
      nconf.file(appSettingsPath);
      resolve();
    } catch (err) {
      reject(err);
    }
  });

export default loadSettings;
