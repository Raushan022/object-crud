import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
  const [openDrawer, setOpenDrawer] = useState(-450);
  const [allTodos, setAllTodos] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    roll: "",
    subject: "",
    dob: "",
  });

  const handleFormChange = (e) => {
    const text = e.target.value;
    const formKey = e.target.name;

    setFormData({
      ...formData,
      [formKey]: text,
    });
  };

  const handleDelete = (todoIndex) => {
    const copyAllTodos = [...allTodos];
    copyAllTodos.splice(todoIndex, 1);
    setAllTodos(copyAllTodos);
  };

  const todoSubmitHandler = (e) => {
    e.preventDefault();

    setAllTodos([...allTodos, formData]);

    setFormData({
      fullName: "",
      roll: "",
      subject: "",
      dob: "",
    });
    setOpenDrawer(-450);
  };

  return (
    <>
      <div
        style={{
          background: "#ddd",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "70%",
            background: "white",
            margin: "32px auto",
            padding: 32,
          }}
        >
          <h1
            style={{
              padding: 0,
              margin: 0,
              textAlign: "center",
            }}
          >
            CRUD
          </h1>
          <button
            onClick={() => setOpenDrawer(0)}
            style={{
              border: "none",
              background: "#7a1396",
              color: "white",
              padding: "14px 24px",
              borderRadius: 4,
              fontSize: 16,
              marginBottom: "24px",
            }}
          >
            <i className="ri-user-add-line" style={{ marginRight: 8 }}></i>
            New Student
          </button>

          <table className="crud-app">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Student's Name</th>
                <th>Subject</th>
                <th>Roll</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allTodos.map((todo, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{todo.fullName}</td>
                  <td>{todo.subject}</td>
                  <td>{todo.roll}</td>
                  <td>{todo.dob}</td>

                  <td>
                    <button
                      style={{
                        border: "none",
                        width: 32,
                        height: 32,
                        background: "#07c65d",
                        color: "white",
                        borderRadius: 4,
                        marginRight: 12,
                      }}
                    >
                      <i className="ri-image-edit-line"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      style={{
                        border: "none",
                        width: 32,
                        height: 32,
                        background: "red",
                        color: "white",
                        borderRadius: 4,
                      }}
                    >
                      <i className="ri-delete-bin-6-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside
          style={{
            position: "fixed",
            top: 0,
            right: openDrawer,
            width: 450,
            background: "white",
            height: "100%",
            boxShadow: "0 0 40px rgba(0,0,0,0.2)",
            padding: 32,
            boxSizing: "border-box",
            transition: "0.5s",
          }}
        >
          <button
            onClick={() => setOpenDrawer(-450)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: 18,
              color: "#8407ba",
              position: "absolute",
              top: 20,
              right: 20,
            }}
          >
            <i className="ri-close-circle-line"></i>
          </button>
          <h1>My Drawer</h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 26,
            }}
          >
            <input
              required
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleFormChange}
              placeholder="Enter Full Name"
              style={{
                border: "1px solid #ccc",
                padding: 16,
                borderRadius: 4,
              }}
            />

            <input
              required
              name="roll"
              type="number"
              value={formData.roll}
              onChange={handleFormChange}
              placeholder="Enter Your Roll"
              style={{
                border: "1px solid #ccc",
                padding: 16,
                borderRadius: 4,
              }}
            />

            <input
              required
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleFormChange}
              placeholder="Enter Full Subject"
              style={{
                border: "1px solid #ccc",
                padding: 16,
                borderRadius: 4,
              }}
            />

            <input
              required
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleFormChange}
              style={{
                border: "1px solid #ccc",
                padding: 16,
                borderRadius: 4,
              }}
            />

            <button
              onClick={todoSubmitHandler}
              style={{
                border: "none",
                background: "#7a1396",
                color: "white",
                padding: "14px 24px",
                borderRadius: 4,
                fontSize: 16,
              }}
            >
              Submit
            </button>
          </form>
        </aside>
      </div>
    </>
  );
}

export default App;
