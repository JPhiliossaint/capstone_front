import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    eventname: "",
    name: "",
    email: "",
    eventDescription: "",
    eventDate: "",
  });

  const { eventName,name, eventDescription, eventDate, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create New Event</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Event Organizer
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Host's name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Contact Info
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the best way to contact host"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Event Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name of the Event"
                name="eventName"
                value={eventName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Event Description
              </label>
              <textarea
                  className="form-control"
                  placeholder="Describe the Event"
                  name="eventDescription"
                  value={eventDescription}
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
             Event Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="eventDate"
                value={eventDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
