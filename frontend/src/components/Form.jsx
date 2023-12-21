import React from "react";
import { useAppState } from "../AppState.jsx";
import { useNavigate, useParams } from 'react-router-dom';

const Form = (props) => {
    const { state, dispatch } = useAppState();
    const { token } = state;
    const { action } = useParams();
    const [formData, setFormData] = React.useState(state[action]);

    const navigate = useNavigate();

    const actions = {
        new: () => {
          return fetch(state.url + "/notes/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token
            },
            body: JSON.stringify(formData)
        }).then(response => response.json());
        },
        edit: () => {
          return fetch(state.url + "/notes/" + state.edit.id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
        }
      };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      actions[action]().then((data) => {
        console.log("meu props é:");
        console.log(props);
        if (props.getNotes) {
          props.getNotes();
        }
        navigate("/dashboard/");
      });
    };
      
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                <input type="text" name="body" value={formData.body} onChange={handleChange}/>
                <input type="submit" value={action}/>
            </form>
        </div>
    );
}

export default Form;
