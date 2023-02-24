const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(require("cookie-parser")());

require("dotenv").config();
const PORT = process.env.PORT || 5000;
//

app.get("/", (req, res) => {
  res.send("hello maher");
});

app.listen(PORT, () => {
  console.log("listen in port 4000");
});
