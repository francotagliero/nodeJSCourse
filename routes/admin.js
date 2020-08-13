const path = require("path");

const express = require("express");

const productsController = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product",);

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  products.push({ title: obj.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
