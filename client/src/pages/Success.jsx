import React from "react";
import axios from "axios";

export const Success = () => {
  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
  const [payment, setPayment] = React.useState({});
  const url = "http://localhost:5000";

  const getPayment = async () => {
    try {
      //fetch backend
      axios.get(`${url}/feedback`);
      // needed to extract id from the url
      const id = new URLSearchParams(location.search).get("payment_id");
      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response.data);
      setPayment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPayment();
  }, []);

  return (
    <div className="flex flex-col p-4 items-center text-green-700 bg-green-100 overflow-y-scroll">
      <div className="w-full mt-10 text-3xl text-center">
        Operación completada
      </div>
      <div className="px-10 mt-4 text-center">
        Tu compra ha sido realizada correctamente!
      </div>
      <div className="mt-6 text-green-500 h-20 w-20">
        <svg
          style={{ maxWidth: 100, display: "block", margin: "auto" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="flex flex-col mt-20 text-gray-700 w-full max-w-sm">
        <div className="font-bold mb-4">Data received:</div>

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Collection ID: {payment.collector_id}
        </div>

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Collection status: {payment.status}
        </div>

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Installments: {payment.installments}
        </div>

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          External reference: {payment.external_reference}
        </div>
        {/* 
        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Payment type: {payment.payment_type_id}
        </div> */}

        {/* <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Order ID: {payment.order.id}
        </div> */}

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Integrator ID: {payment.integrator_id}
        </div>

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Processing mode: {payment.processing_mode}
        </div>

        <div className="px-4 py-2 border border-green-500 rounded mb-2">
          Merchant account id: {payment.merchant_account_id}
        </div>
      </div>
    </div>
  );
};
