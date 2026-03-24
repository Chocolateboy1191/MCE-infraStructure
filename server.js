import express from "express";
import dotenv from "dotenv";
import { runMCE } from "./modules/engine.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MCE Engine Running");
});

app.post("/mce", async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({ error: "Missing input" });
    }

    const result = await runMCE(input);

    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
