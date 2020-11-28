const express = require("express");
const PORT = 3000 || process.env.PORT;
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/.*", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.post("/test", (req, res) => {
  // res.set("Access-Control-Allow-Origin", "*");
  // res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  // res.set("Access-Control-Allow-Headers", "Content-Type");
  console.log("hello");
  console.log(req.body);
  res.json({ status: "success" });
  // console.log(req);
  // res.send(
  //   fs.readFileSync(path.resolve(path.join("public", "index.html")), "utf8")
  // );
});
app.get("*", (req, res) => {
  res.send(path.resolve(path.join("dist", "index.html")));
});

app.listen(PORT, () => {
  console.log("server has been started");
});
