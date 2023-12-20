import React from "react"
import { useAppState } from "../AppState.jsx";
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const{state, dispatch} = useAppState()

    const navigate = useNavigate();

    return (
        <div className="form">
            <form>

            </form>
        </div>
    ); 
}

export default Form