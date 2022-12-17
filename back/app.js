"use strict";

const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

app.use("/api", taskRoutes.routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
