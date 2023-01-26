// imports
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const express = require("express");
const cors = require("cors");
const app = express();
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

//middleware needed 
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../../client"));
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create_preference", (req, res) => {
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

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
  res.send("Feedback");
});

// start backend
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
