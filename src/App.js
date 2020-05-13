import React, { useState } from "react";
import "./App.css";
import TopHeader from "./component/topHeader/TopHeader";
import Login from "./component/login/Login";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [formState, setForm] = useState({
    email: "",
    password: "",
  });
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const checkValidity = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => {
      console.log(error, val, "val");
      val.length > 0 && (valid = false);
    });
    return valid;
  };

  const isFormFilled = () => {
    let valid = true;
    const { email, password } = formState;
    const errorState = { ...errors };
    if (!email.length) {
      valid = false;
      errorState["email"] = "This is a required field";
    }
    if (!password.length) {
      valid = false;
      errorState["password"] = "This is a required field";
    }
    setErrors(errorState);
    return valid;
  };

  const loginHandler = () => {
    if (isFormFilled()) {
      if (checkValidity(errors)) {
        setLoading(true);
        fetch("http://www.mocky.io/v2/5d9d9219310000153650e30b")
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            setAuth(true);
          })
          .catch((err) => console.log(err, "err"));
      }
    }
  };

  const passwordValidity = (value) => {
    let errorMessage = "";
    if (!value.length) {
      errorMessage = "This is a required field";
    } else if (value.length < 6) {
      errorMessage = "Password must be 6 characters long!";
    }
    return errorMessage;
  };

  const emailValidity = (value) => {
    let errorMessage = "";
    if (!value.length) {
      errorMessage = "This is a required field";
    } else if (value.length < 5) {
      errorMessage = "email must be 5 characters long!";
    } else if (!validEmailRegex.test(value)) {
      errorMessage = "Email is not valid!";
    }
    return errorMessage;
  };


  const onInputBlur = (event) => {
    const { name, value } = event.target;
    const newErrors = { ...errors };
    switch (name) {
      case "email":
        newErrors.email = emailValidity(value)
        break;
      case "password":
        newErrors.password = passwordValidity(value);
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const onInputChange = (event) => {
    console.log(event)
    event.preventDefault();
    const newForm = { ...formState };
    const { name, value } = event.target;
    newForm[name] = value;
    setForm(newForm);
  };

  return (
    <div>
      <TopHeader />
      {!isLoading ? (
        <main className="Container">
          {!isAuth && (
            <Login
              loginHandler={loginHandler}
              formState={formState}
              onInputChange={onInputChange}
              onInputBlur={onInputBlur}
              errors={errors}
            />
          )}
          {isAuth && (
            <div className="Loading">
              <h2>Weight loss begins with you and ends with HealthifyMe.</h2>
            </div>
          )}
        </main>
      ) : (
        <div className="Loading">
          <img
            src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
            alt="loading"
          />
        </div>
      )}
    </div>
  );
}

export default App;
