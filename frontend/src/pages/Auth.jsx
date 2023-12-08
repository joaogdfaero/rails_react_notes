import React from "react";
import {useAppState} from "../AppState.jsx"

const Auth = (props) => {
  // Destructure match from props
  const { match } = props;

  // Check if match and match.params exist
  const type = match && match.params ? match.params.form : 'enter'; /* parece que o props ou algum elemento que descende dele está indefinido */
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  })

  const {dispatch} = useAppState()

  const actions = {
    signup: {
        action: "signup",
        payload: formData 
    },
    login: {
        action: "login",
        payload: formData 
    }
  };

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
  }; 

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(actions[type])
  } 

  return (
    <div>
      <form>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <input type="submit" value={type} />
      </form>
    </div>
  );
};

export default Auth;

