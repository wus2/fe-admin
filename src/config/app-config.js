import dev from "./app-config-dev";

const appStage = process.env.REACT_APP_STAGE;

export default {
  // Add common config values here
  appStage,
  ...dev,
};
