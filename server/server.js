// imports
const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env.ACCESS_TOKEN);
const PORT = process.env.PORT;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const express = require("express");
const app = express();

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});
// Crea un objeto de preferencia
const preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  });
// routes
app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

// start backend
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
