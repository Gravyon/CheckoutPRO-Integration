import { useState, useEffect } from "react";
import axios from "axios";
const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;
function App() {
  const [orderData, setOrderData] = useState({});

  const fetchPreference = async () => {
    const res = await axios.post("/create_preference", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await res.json();

    if (data.msg) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.setAttribute("data-preference-id", data.msg);
      document.body.appendChild(script);

      const mercadopago = new MercadoPago(PUBLIC_KEY, {
        locale: "es-UY", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
      });
      mp.checkout({
        preference: {
          id: data.msg,
        },
        render: {
          container: ".cho-container",
          label: "Pagar",
        },
      });
    }
  };

  useEffect(() => {
    fetchPreference();
  }, []);

  return <div className="cho-container"></div>;
}

export default App;
