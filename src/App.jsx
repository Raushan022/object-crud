import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
  const [openDrawer, setOpenDrawer] = useState(-450);

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
                <th>Class</th>
                <th>Roll</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Raushan</td>
                <td>Maths</td>
                <td>1</td>
                <td>12</td>
                <td>12/10/2024</td>

                <div>
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
                </div>
              </tr>
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
              style={{
                border: "1px solid #ccc",
                padding: 16,
                borderRadius: 4,
              }}
            />

            <button
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
