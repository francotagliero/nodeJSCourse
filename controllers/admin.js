const Product = require('../models/product');

exports.getAddProduct = (_req, res, _next) => {
    res.render("admin/add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
    });
};

exports.postAddProduct = (req, res, _next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect("/");
};

exports.getProducts = (_req, res, _next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
};