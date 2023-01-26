const express = require("express");
const router = express.Router();
const {} = require;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PORT = process.env.PORT;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

// routes
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/create_preference", (req, res) => {
  const preference = {
    binary_mode: true,
    items: [
      {
        // id: req.body.id,
        title: req.body.title,
        quantity: req.body.quantity,
        unit_price: req.body.unit_price,
      },
    ],
    back_urls: {
      success: `http://localhost:${PORT}/feedback`,
      failure: `http://localhost:${PORT}/feedback`,
      pending: `http://localhost:${PORT}/feedback`,
    },
    auto_return: "approved",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.status(200).json({ msg: response.body });
    })
    .catch((error) => {
      res.status(500).json({ msg: error });
    });
});

router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
  res.send("Feedback");
});

// So it can accessed in server.js
module.exports = router;
