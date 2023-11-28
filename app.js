const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

// error page
app.use((req, res, next) => {
  res.status(404).json({
    message: "Page not found 404",
  });
  next();
});

// error page
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Broke the session",
  });
  next();
});

module.exports = app;
