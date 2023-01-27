// imports
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();

//middleware needed
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../../client"));
app.use(express.json());
app.use(cors());

// routers
const router = require("./routes/routes");
app.use("/", router);
app.use("/create_preference", router);
app.use("/feedback", router);
app.use("/webhook", router);
// start backend
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
