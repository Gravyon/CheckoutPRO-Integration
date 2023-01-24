import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const fetchBackend = async () => {
    const response = await axios.get("/api");
    console.log(response);
    setBackendData(response.data);
  };

  useEffect(() => {
    fetchBackend();
  }, []);

  return (
    <div className="App">
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
