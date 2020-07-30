const express = require("express");
const app = express();
//const connection = require("./database/db");
const bodyParser = require("body-parser");
const post = require("./routes/post");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

//routes
app.use("/api/post", post);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
