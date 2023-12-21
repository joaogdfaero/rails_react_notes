import React from "react";
import { Routes, useLoaderData } from "react-router";
import { useAppState } from "../AppState.jsx";
import { Route, Link, Switch } from "react-router-dom";
import Form from "../components/Form.jsx";


const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, notes, username} = state

    const getNotes = async () => {
        const response = await fetch(url + "/notes/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const notes = await response.json()
        dispatch({type: "getNotes", payload: notes})  
    }
  
    React.useEffect(() => {getNotes()}, [])

    const loaded = () => (
        <div className ="dashboard">
            <h1>Anotações de {username}</h1>
            <Link to="/dashboard/new"><button>New Note</button></Link>
            <Routes>
                <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getNotes={getNotes} />}/>
            </Routes>
            <ul>
                {notes.map((note) => (
                    <div className="note" key={note.id}>
                        <h2>{note.title}</h2>
                        <h4>{note.body}</h4>
                    </div>
                ))}
            </ul>
        </div>
    );
    
    return notes ? loaded() : <h1>Loading...</h1>;
}

export default Dashboard


