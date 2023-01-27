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
      name: "Lalo",
      surname: "Landa",
      email: "test_user_1296005698@testuser.com",
      //No anda con estos datos por alguna razon
      // phone: {
      //   area_code: "11",
      //   number: "22223333",
      // },
      // identification: {
      //   type: "DNI",
      //   number: "12345678",
      // },
      // address: {
      //   street_name: "Calle",
      //   street_number: 123,
      //   zip_code: "1111",
      // },
    },
    back_urls: {
      success: `http://localhost:${PORT}/feedback`,
      failure: `http://localhost:${PORT}/feedback`,
      pending: `http://localhost:${PORT}/feedback`,
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
      "https://webhook.site/3395e8a6-fe22-42c7-9cfa-9c9e9f4cf6b7",
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

//redirect
router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
  res.send("Feedback");
});

//payment info

router.post("/webhook", function (req, res) {
  const payment_data = {
    transaction_amount: Number(req.body.transactionAmount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
    payer: {
      email: req.body.email,
      identification: {
        number: req.body.docNumber,
      },
    },
  };

  mercadopago.payment
    .save(payment_data)
    .then(function (response) {
      res.status(response.status).json({
        status: response.body.status,
        status_detail: response.body.status_detail,
        id: response.body.id,
      });
    })
    .catch(function (error) {
      res.status(response.status).send(error);
    });
});
// So it can accessed in server.js
module.exports = router;
