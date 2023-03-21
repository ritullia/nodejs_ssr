const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const dirHomeCss = path.join(__dirname, "public");
const dirHome = path.join(__dirname, "views", "home.html");

app.use(cors());
app.use(express.json()); //naudojam jeigu kuriam post patch endpoint
app.use(express.static(dirHomeCss));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  //   res.sendFile(dirHome); // su path suformuojam kelia iki kuriamo home page
  res.render("home", { pageContent: "Dynamic page content" });
});
app.get("/info", (req, res) => {
  //   res.sendFile(dirHome); // su path suformuojam kelia iki kuriamo home page
  res.render("info");
});
app.get("/contacts", (req, res) => {
  //   res.sendFile(dirHome); // su path suformuojam kelia iki kuriamo home page
  res.render("contacts");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
