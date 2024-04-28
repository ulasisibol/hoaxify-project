import { useState } from "react";
import axios from "axios";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/v1/users", {
      username,
      email,
      password,
    });
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="username">
                User Name:{" "}
              </label>
              <input
                className="form-control"
                id="username"
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                E-mail:{" "}
              </label>
              <input
                className="form-control"
                id="email"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="passwordR">
                Repeat Password:{" "}
              </label>
              <input
                className="form-control"
                id="passwordR"
                type="password"
                onChange={(event) => setPasswordR(event.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={password != passwordR || !password}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
