const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//middle wear
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Zoom Wild Server Running");
});

app.listen(port, () => {
  console.log(`Zoom Wild Server Running On ${port}`);
});
