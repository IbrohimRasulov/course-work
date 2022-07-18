import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [buttonState, setButtonState] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [hintMessage, setHint] = useState(
    "Enter your username and password to sign-in"
  );

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (props.formData.username === "admin" && props.formData.password === "7777") {
      navigate("/welcome", { replace: true });
    } else {
      setErrorMessage(() => "Username yoki password noto'g'ri");
      setHint(() => "Hint: (username: admin, password: 7777)");
    }
  }

  useEffect(() => {
    if (
      props.formData.ism !== "" &&
      props.formData.username !== "" &&
      props.formData.password !== ""
    ) {
      setButtonState((prevState) => false);
    } else {
      setButtonState((prevState) => true);
    }
  }, [props.formData]);

  return (
    <div className="form-container">
      <h3>{hintMessage}</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ism"
          className="form--input"
          name="ism"
          onChange={(event) => props.handleChange(event)}
          value={props.formData.ism}
        />
        <input
          type="text"
          placeholder="Username"
          className="form--input"
          name="username"
          onChange={(event) => props.handleChange(event)}
          value={props.formData.username}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={(event) => props.handleChange(event)}
          value={props.formData.password}
        />

        <button className="form--submit" disabled={buttonState}>
          Sign up
        </button>

        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Form;
