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
  const [newcourse, setnewcourses] = useState({ courseId: 5, name: "Urdu" });

  const postdata = async () => {
    await axios
      .post("http://localhost:3001/student", {
        name: name,
        courses: [],
      })
      .then((response) => {
        getdata();
        alert("posted");
      });
  };
  const updatedata = async (id) => {
    try {
      await axios
        .put("http://localhost:3001/student/" + id, {
          courses: [{ courseId: 2, name: "DATASTRUCTURE" }],
        })
        .then((response) => {
          getdata();
          alert("User Updated");
          console.log(response.json);
        });
    } catch (error) {
      console.log(error, "This is the error");
    }
  };
  const updatearray = async (id) => {
    try {
      await axios
        .put("http://localhost:3001/student/" + id, {
          courses: [...courses, newcourse],
        })
        .then((response) => {
          getdata();
          alert("Array updated");
          console.log(response.json);
        });
    } catch (error) {
      console.log(error, "This is the error");
    }
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
          <button
            onClick={() => {
              updatedata(i._id);
            }}
          >
            Update
          </button>
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
      <div>
        <input
          placeholder="Course NewName"
          onChange={(e) => {
            setnewcourses((prevCourse) => ({
              ...prevCourse,
              name: e.target.value,
            }));
          }}
        />
        <input
          placeholder="Course NewNumber"
          type="number"
          onChange={(e) => {
            setnewcourses((prevCourse) => ({
              ...prevCourse,
              courseId: e.target.value,
            }));
          }}
        />
        {data.map((i) => (
          <div>
            <button
              onClick={() => {
                updatearray(i._id);
              }}
            >
              Udpatedarray
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
