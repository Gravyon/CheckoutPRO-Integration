import React from "react";
import axios from "axios";

const Notification = () => {
  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
  const [info, setInfo] = React.useState({});
  const url = "http://localhost:5000";
  const getInfo = () => {
    try {
      const response = axios.post(`${url}/notification`);
      console.log(response);
      setInfo(response);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Notification</div>;
};

export default Notification;
