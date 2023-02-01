const express = require("express");
const router = express.Router();
const {} = require;
const fs = require("fs");
const ACCESS_TOKEN = process.env.VITE_ACCESS_TOKEN;
const INTEGRATOR_ID = process.env.VITE_INTEGRATOR_ID;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
  integrator_id: INTEGRATOR_ID,
});

//routes
router.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});
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
      installments: 6,
      default_installments: 6,
      excluded_payment_methods: [
        {
          id: "visa",
        },
      ],
    },
    notification_url:
      "https://1a64-2804-39c8-40c1-c601-79ac-e00e-3c63-1663.sa.ngrok.io/notification",
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
router.post("/notification", function (req, res) {
  let data = req.body;
  // if (data["action"] == "payment.created") {
  //   JSON.stringify(data);
  //   console.log(data);
  // }
  console.log(JSON.stringify(data));
  res.status(200).send({ result: "ok" });

  // res.json({
  //   Payment: req.query.payment_id,
  //   Status: req.query.status,
  //   MerchantOrder: req.query.merchant_order_id,
  // });
});

router.post("/notifications", function (req, res) {
  var payment_data = {
    transaction_amount: Number(req.body.transactionAmount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    notification_url:
      "https://3c00-2804-39c8-40c1-c601-9d23-4026-dc72-6468.sa.ngrok.io",
    payer: {
      email: req.body.email,
      identification: {
        type: req.body.docType,
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
