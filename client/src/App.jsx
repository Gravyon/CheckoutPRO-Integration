import { useState, useEffect } from "react";
import axios from "axios";
// import { useMercadopago } from 'react-sdk-mercadopago';
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
function App() {
  const [orderData, setOrderData] = useState({});
  const url = "http://localhost:5000";

  const fetchPreference = async () => {
    try {
      const res = await axios.post(`${url}/create_preference`, {
        title: "title",
        quantity: 2,
        unit_price: 13,
      });
      setOrderData(res.data);
      console.log(res);
      if (res.data.msg.id) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.setAttribute("data-preference-id", res.data.msg.id);
        document.body.appendChild(script);
        const mercadopago = new window.MercadoPago(PUBLIC_KEY.toString(), {
          locale: "es-UY",
        });
        mercadopago.checkout({
          preference: {
            id: res.data.msg.id,
          },
          render: {
            container: ".cho-container",
            label: "Pagar",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPreference();
  }, []);

  return <div className="cho-container"></div>;
}

export default App;
