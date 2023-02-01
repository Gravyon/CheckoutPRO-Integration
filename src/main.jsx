import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Disable strict mode to prevent rerendering
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
