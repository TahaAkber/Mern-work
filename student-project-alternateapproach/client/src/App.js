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
  const [course, setcourses] = useState({ courseId: null, name: "" });
  const postdata = async () => {
    await axios
      .post("http://localhost:3001/student", {
        name: name,
        courses: [course],
      })
      .then((response) => {
        getdata();
        alert("posted");
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
      <div>
        <input
          placeholder="Student Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          placeholder="Course Name"
          onChange={(e) => {
            setcourses((prevCourse) => ({
              ...prevCourse,
              name: e.target.value,
            }));
          }}
        />
        <input
          placeholder="Course Number"
          type="number"
          onChange={(e) => {
            setcourses((prevCourse) => ({
              ...prevCourse,
              courseId: e.target.value,
            }));
          }}
        />
      </div>
      <button
        onClick={() => {
          postdata();
        }}
      >
        testing
      </button>
    </div>
  );
}

export default App;
