import React, { useState, useRef, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../context/UserContext";

function Login() {
  const nameRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handlesubmit = (e) => {
    e.preventDefault();

    const nm = nameRef.current.value;
    const ps = passwordRef.current.value;

    setName(nm);
    setPassword(ps);
    setUser({name,password})

    e.target.reset();

  };
  useEffect(() => {
    console.log(name);
    console.log(password);
  }, [name, password]);

  return (
    <>
      <div className="container my-5">
        <div className="alert alert-info text-center">Login Form</div>
      </div>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="Name"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="NameHelp"
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={passwordRef}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your password with anyone else.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
