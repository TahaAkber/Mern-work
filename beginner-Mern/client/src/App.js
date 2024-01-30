import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [username, setusername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getuser").then((response) => {
      setusers(response.data);
    });
  }, []);
  const addtobackend = async () => {
    await Axios.post("http://localhost:3001/createuser", {
      name: name,
      age: age,
      username: username,
    }).then((response) => {
      setusers([...users, { name: name, age: age, username: username }]);
      alert("UserCreated");
    });
  };
  return (
    <div className="App">
      <div className="box">
        <div className="input">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              addtobackend();
            }}
          >
            Click to Create
          </button>
        </div>
      </div>
      <div className="data">
        {users.map((i) => {
          return (
            <div>
              <h1>{i.name}</h1>
              <h3>{i.age}</h3>
              <h6>{i.username}</h6>
              <div className="button">
                <button type="button">UPDATE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
