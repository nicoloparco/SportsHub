const express = require("express");
const mlbEvents = require("./Interfaces/Events.ts");

const app = express();
const port = process.env.NODE_ENV === "production" ? 443 : 3000;

app.use("", [mlbEvents]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});