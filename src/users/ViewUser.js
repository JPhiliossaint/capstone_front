import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">{user.name}'s Profile</h2>

          <div className="card">
            <div className="card-header">
              EventId : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Event Name:</b>
                   {user.eventName}
                </li>
                <li className="list-group-item">
                  <b>Event Details:</b>
                  {user.eventDescription}
                </li>
                <li className="list-group-item">
                  <b>Event Date:</b>
                  {user.eventDate}
                </li>
                <li className="list-group-item">Please reach out to {user.email} for more information regarding this event.</li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
