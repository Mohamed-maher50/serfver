const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(require("cookie-parser")());
// const cors = require("cors");

require("dotenv").config();

//
// const asyncHandler = require("express-async-handler");
app.get("/", (req, res) => {
  res.send("hello maher");
});

app.listen(process.env.PORT, () => {
  console.log("listen in port 4000");
});
