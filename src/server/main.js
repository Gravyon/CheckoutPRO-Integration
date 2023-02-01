//imports
const express = require("express");
const ViteExpress = require("vite-express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const PORT = import.meta.env.VITE_PORT;

//middleware needed
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./src/server"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ type: "application/*+json" }));

// router
const router = require("./routes/routes");
app.use("/", router);
app.use("/create_preference", router);
app.use("/notification", router);
app.use("/hello", router);

//start backend
ViteExpress.listen(app, 5000, () => console.log(`Server started on port 5000`));
