import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Employee() {
  const baseurl = "  http://localhost:8000/employee";
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [employees, setEmployee] = useState([]);
  const [editing, setEditing] = useState(null);

  const getData = () => {
    axios
      .get(baseurl)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onSubmit = (data, event) => {
    // event.preventDefault();
    if (editing !== null) {
      axios
        .put(`${baseurl}/${employees[editing].id}`, data)
        .then(() => {
          getData();
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        })
        .finally(() => {
          setEditing(null);
        });
    } else {
      axios
        .post(baseurl, data)
        .then(() => {
          getData();
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
    }
  };

  const handleEdit = (index) => {
    setValue("name", employees[index].name);
    setValue("salary", employees[index].salary);
    setValue("designation", employees[index].designation);
    setValue("location", employees[index].location);
    setEditing(index);
  };

  const handleRemove = (index) => {
    axios
      .delete(`${baseurl}/${employees[index].id}`)
      .then(() => {
        // alert("do you want to delete");
        getData();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };
  const handleReset = () => {
    reset();
    setEditing(null);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4">Employee Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Bootstrap form styling */}
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="form-control"
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Salary:</label>
                <input
                  {...register("salary", { required: "Salary is required" })}
                  className="form-control"
                />
                {errors.salary && (
                  <p className="text-danger">{errors.salary.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Designation:</label>
                <input
                  {...register("designation", {
                    required: "Designation is required",
                  })}
                  className="form-control"
                />
                {errors.designation && (
                  <p className="text-danger">{errors.designation.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Location:</label>
                <input
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="form-control"
                />
                {errors.location && (
                  <p className="text-danger">{errors.location.message}</p>
                )}
              </div>
              <div>
                <button type="submit" className="btn btn-primary me-2">
                  {editing !== null ? "Update" : "Register"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h1 className="mb-4">Employee Table</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Designation</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.name}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.location}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(index)}
                        className="btn btn-warning me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemove(index)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
