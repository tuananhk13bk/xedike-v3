// lib/app.ts
import express = require("express");

// Create a new express application instance
const app: express.Application = express();
import db from "./config/database";

db.execute("SELECT * FROM provinces_list")
  .then(result => {
    console.log(result);
  })
  .catch(console.log);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
