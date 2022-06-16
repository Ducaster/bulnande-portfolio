const express = require("express");
const cors = require("cors");
const app = express();
const indexRouter = require("./router");
const port = 3001;

app.use(cors());
app.use(express.json());

//연결테스트
app.get("/", (req, res) => {
  res.status(200).send("Welcome, Bulbu Portfolio Page!");
});

//라우터 연결
app.use("/", indexRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: "Internal Server Error",
    stacktrace: err.toString(),
  });
});

app.listen(port, () => {
  console.log(`[RUN] Bulbu Server... | http://localhost:${port}`);
});

module.exports = app;
