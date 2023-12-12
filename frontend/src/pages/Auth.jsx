import React from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Auth = () => {
  const { form } = useParams();
  const type = form || "enter";

  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });

  const { dispatch } = useAppState();

  const actions = {
    signsdup: {
      type: "signup",
      payload: formData
    },
    login: {
      type: "login",
      payload: formData
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting action:", actions[type]); // Add this line for debugging
    dispatch(actions[type]);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value={type} />
      </form>
    </div>
  );
};

export default Auth;


