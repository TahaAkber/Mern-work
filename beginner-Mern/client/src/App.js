import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [username, setusername] = useState("");

  function getUsers() {
    Axios.get("http://localhost:3001/user").then((response) => {
      setusers(response.data);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const addtobackend = async () => {
    await Axios.post("http://localhost:3001/user", {
      name: name,
      age: age,
      username: username,
    }).then((response) => {
      getUsers();
      alert("UserCreated");
    });
  };
  const updatedata = async (id) => {
    await Axios.put("http://localhost:3001/user/" + id, {
      name: name,
      age: age,
      username: username,
    }).then((response) => {
      getUsers();
      alert("UserUpdated");
    });
  };
  const deletedata = async (id) => {
    await Axios.delete("http://localhost:3001/user/" + id).then((response) => {
      getUsers();
      alert("userDeleted");
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
            className="button-85"
            onClick={() => {
              addtobackend();
            }}
          >
            Click to Create
          </button>
        </div>
      </div>
      <div className="parent">
        <div className="data">
          {users.map((i) => {
            return (
              <div>
                <h1>{i.name}</h1>
                <h3>{i.age}</h3>
                <h6>{i.username}</h6>
                <div className="button">
                  <button
                    type="button"
                    className="button-85"
                    style={{ marginRight: 0 }}
                    onClick={() => {
                      updatedata(i._id);
                    }}
                  >
                    UPDATE
                  </button>
                  <button
                    type="button"
                    className="button-85"
                    style={{ margin: 8 }}
                    onClick={() => {
                      deletedata(i._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
