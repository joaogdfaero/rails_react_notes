import React from "react"
import {Link} from "react-router-dom"
import { useAppState } from "../AppState.jsx";
import { useNavigate } from 'react-router-dom';

const Nav = (props) => {
    const{state, dispatch} = useAppState()

    const navigate = useNavigate();

    return <header>
        <h1>Faça suas anotações!</h1>
        <nav>
            <Link to="/"><div>Home</div></Link>
            
            {!state.token ? (<><Link to="/auth/signup"><div>Signup</div></Link>
            <Link to="/auth/login"><div>Login</div></Link></>) : null}
            
            { state.token ? 
            <div onClick={() => {
                dispatch({type: "logout"})
                navigate("/");
            }}>Logout</div> : null }
        </nav>
    </header>
}

export default Nav