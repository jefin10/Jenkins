const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/student-details", (req, res) => {
  res.json({
    name: "Jefin Francis",
    rollNumber: "2023BCS0053",
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));