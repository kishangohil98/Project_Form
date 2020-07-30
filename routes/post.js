const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tigor",
  database: "project_form",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("MySql Connected!");
});

router.post("/", (req, res) => {
  try {
    const {
      timeframe,
      name,
      company,
      email,
      budget,
      details,
      pro_type,
    } = req.body;
    var query = `INSERT INTO formdata values ('${name}','${company}','${email}','${budget}','${details}','${timeframe}','${pro_type}')`;
    connection.query(query, function (err, result) {
      if (err) return console.error(err.message);
      return res.status(200).json({ msg: "request received" });
    });
    console.log("Data stored in mysql Suceessfully");
  } catch (error) {
    return res.status(500).json({ msg: "Internal server Error.", error });
  }
});

module.exports = router;
