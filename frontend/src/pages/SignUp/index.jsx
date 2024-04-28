import { useState } from "react";
import axios from "axios";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();

  const onSubmit = () => {
    axios.post("http:localhost:8080/api/v1/users", {
      username,
      email,
      password,
    });
  };

  return (
    <>
      <div>
        <h1>Sign Up</h1>
      </div>
      <div>
        <label htmlFor="username">User Name: </label>
        <input
          id="username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordR">Repeat Password: </label>
        <input
          id="passwordR"
          type="password"
          onChange={(event) => setPasswordR(event.target.value)}
        />
      </div>
      <button
        onClick={onSubmit()}
        disabled={password != passwordR || !password}
      >
        Sign Up
      </button>
    </>
  );
}
