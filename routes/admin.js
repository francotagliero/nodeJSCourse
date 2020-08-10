const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Submit!</button>'
  );
});

// /admin/add-product => POST
router.post("/product", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect("/");
});

module.exports = router;
