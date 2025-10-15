const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3123;
theme_dark = "public1"
// Serve all static files from the "public" folder
app.use(express.static(path.join(__dirname, theme_dark )));

// Handle root request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, theme_dark , "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚗 Renax template running on http://localhost:${PORT}`);
});