const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// Bodyparser Middleware
app.use(express.json());

//DB  Config
const db = config.get("mongoURI");

// connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongooDb Connected..."))
  .catch((err) => console.log(err));

//Use Routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));

//npm run server
