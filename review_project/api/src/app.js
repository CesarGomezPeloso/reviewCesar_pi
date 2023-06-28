const express = require("express");
const morgan = require("morgan");
const mainRouter = require ("./routes");

const app = express();

app.use(morgan("dev"));

app.use(mainRouter);

// app.use((req, res, next) => {
//   console.log("Hola estoy pasando por un middleware");
//   next();
// });


module.exports = app;
