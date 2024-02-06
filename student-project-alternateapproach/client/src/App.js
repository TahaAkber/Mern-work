import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setdata] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:3001/student").then((response) => {
      setdata(response.data);
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  const [name, setname] = useState("");
  const [course, setcourses] = useState([]);
  const postdata = () => {
    axios
      .post("http://localhost:3001/student", {
        name: name,
        courses: [{ course }],
      })
      .then((response) => {
        getdata();
        console.log(response.data);
      });
  };
  return (
    <div className="App">
      {data.map((i) => (
        <div>
          <h1>{i.name}</h1>
          <div>
            {i.courses.map((course) => (
              <div>
                <h2> {course.name}</h2>
                <p>{course.courseId}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={postdata()}>test</button>
    </div>
  );
}

export default App;
