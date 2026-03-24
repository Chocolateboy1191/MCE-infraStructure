const express = require("express");
const dotenv = require("dotenv");
const { runMCE } = require("./modules/engine.js");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MCE Engine Running");
});

app.post("/mce", async (req, res) => {
  try {
    const result = await runMCE(req.body.input);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
