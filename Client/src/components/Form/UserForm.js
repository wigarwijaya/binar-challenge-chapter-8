import { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    if (props.form) {
      setUserName(props.form.username);
      setEmail(props.form.email);
      setExperience(props.form.experience);
      setLevel(props.form.level);
    }
  }, [props.form]);

  const unameOnChangeHandle = (event) => {
    setUserName(event.target.value);
  };

  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };

  const expOnChangeHandle = (event) => {
    setExperience(event.target.value);
  };

  const lvlOnChangeHandle = (event) => {
    setLevel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (props.form) {
      const data = {
        id: props.form.id,
        username: username,
        email: email,
        experience: experience,
        level: level,
      };

      props.onUpdatePlayer(data);
    } else {
      const data = {
        username: username,
        email: email,
        experience: experience,
        level: level,
      };

      props.onAddPlayer(data);
    }

    setUserName("");
    setEmail("");
    setExperience("");
    setLevel("");
  };

  const title = props.form ? "EDIT PLAYER" : "ADD PLAYER";

  return (
    <form className="form__controls" onSubmit={onSubmit}>
      <h2>{title}</h2>
      <div className="form__control">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={unameOnChangeHandle}
        ></input>
      </div>
      <br></br>
      <div className="form__control">
        <label>Email</label>
        <input type="text" value={email} onChange={emailOnChangeHandle}></input>
      </div>
      <br></br>
      <div className="form__control">
        <label>Experience</label>
        <input
          type="text"
          value={experience}
          onChange={expOnChangeHandle}
        ></input>
      </div>
      <br></br>
      <div className="form__control">
        <label>Level</label>
        <input type="text" value={level} onChange={lvlOnChangeHandle}></input>
      </div>

      <button type="submit" className="form__actions">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
