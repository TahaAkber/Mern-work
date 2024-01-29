import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getuser").then((response) => {
      setusers(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="data">
        {users.map((i) => {
          return (
            <div>
              <h1>{i.name}</h1>
              <h3>{i.age}</h3>
              <h6>{i.username}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
