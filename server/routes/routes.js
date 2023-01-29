const express = require("express");
const router = express.Router();
const {} = require;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const INTEGRATOR_ID = process.env.INTEGRATOR_ID;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
  integrator_id: INTEGRATOR_ID,
});

// routes
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/create_preference", (req, res) => {
  const preference = {
    // binary_mode doesn't accept pending
    binary_mode: true,
    items: [
      {
        id: req.body.id,
        title: req.body.title,
        quantity: 1,
        unit_price: req.body.unit_price,
        currency_id: "UYU",
        picture_url: req.body.image,
        description: req.body.description,
      },
    ],
    payer: {
      address: {
        zip_code: "1111",
        street_name: "Calle",
        street_number: 123,
      },
      email: "test_user_1296005698@testuser.com",
      identification: {
        number: "12345678",
        type: "DNI",
      },
      name: "Lalo",
      surname: "Landa",
    },
    back_urls: {
      success: `http://localhost:5173/success`,
      failure: `http://localhost:5173/failure`,
      pending: `http://localhost:5173/pending`,
    },
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "visa",
        },
      ],
      excluded_payment_types: [{ id: "atm" }],

      installments: 6,

      default_installments: 6,
    },
    notification_url:
      "https://webhook.site/3395e8a6-fe22-42c7-9cfa-9c9e9f4cf6b7/feedback",
    auto_return: "approved",
    external_reference: "rdjmartinez95@gmail.com",
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

// redirect
router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

// So it can accessed in server.js
module.exports = router;
