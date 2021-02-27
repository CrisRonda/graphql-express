require("@babel/register")({});
require("dotenv").config({ path: ".env" });

module.exports = require("./src/db/index");
