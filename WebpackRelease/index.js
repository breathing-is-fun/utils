const path = require("path");

const options = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]/lib/main/index.js",
    libraryTarget: "commonjs2"
  }
};
