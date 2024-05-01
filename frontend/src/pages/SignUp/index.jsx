import { useEffect, useMemo, useState } from "react";
import { signUp } from "./api";
import { Input } from "./Components/Input";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordR, setPasswordR] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalErrors, setGeneralErrors] = useState();

  const passwordRepeatEr = useMemo(() => {
    //İf'i sürekli döngüye almamak için sadace bağımlı olan değişkenler değiştiğinde if'i sorgulamasını sağladık.
    if (password != passwordR) {
      return "Passwords' missmatch!";
    }
  }, [password, passwordR]);

  useEffect(() => {
    setErrors(function (lastError) {
      return {
        ...lastError,
        username: undefined,
      };
    });
  }, [username]);
  useEffect(() => {
    setErrors(function (lastError) {
      return {
        ...lastError,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastError) {
      return {
        ...lastError,
        password: undefined,
      };
    });
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralErrors();
    setApiProgress(true);

    try {
      const response = await signUp({
        username,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
    } catch (axiosError) {
      if (
        axiosError.response?.data &&
        axiosError.response.data.status === 400
      ) {
        setErrors(axiosError.response.data.validationErrors);
      } else {
        setGeneralErrors("Unexpected error occured. Please try again!");
      }
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <Input
              id="username"
              type="text"
              label="Username: "
              error={errors.username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <Input
              id="email"
              label="E-mail: "
              type="text"
              error={errors.email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Input
              id="password"
              label="Password: "
              type="password"
              error={errors.password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Input
              id="passwordR"
              label="Password Repeat: "
              type="password"
              error={passwordRepeatEr}
              onChange={(event) => {
                setPasswordR(event.target.value);
              }}
            />
            {/* <div className="mb-3">
              <label className="form-label" htmlFor="passwordR">
                Repeat Password:{" "}
              </label>
              <input
                className={
                  isItSame ? "form-control is-invalid" : "form-control"
                }
                id="passwordR"
                type="password"
                onChange={(event) => setPasswordR(event.target.value)}
              />
              <div className="invalid-feedback">Password missmatch!</div>
            </div> */}

            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            {generalErrors && (
              <div className="alert alert-danger">{generalErrors}</div>
            )}

            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={apiProgress || password != passwordR || !password}
              >
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
