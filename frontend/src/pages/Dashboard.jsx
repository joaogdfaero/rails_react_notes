import React from "react";
import { useLoaderData } from "react-router";
import { useAppState } from "../AppState";
import { Route, Link } from "react-router";

const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, notes, username} = state

    const getNotes = async () => {
        const response = fetch(url + "/notes/")
        const notes = await response.json()
        dispatch({type: "getNotes", payload: notes})  
    }

    React.useEffect(() => getNotes(), [])

    const loaded = () => (
        <div className ="dashboard">
            <h1>Anotações de {username}</h1>
            <Link to="/dashboard/new"><button>New Note</button></Link>
            <Route path="/dashboard/new" component={Form}></Route>
            <ul>
                {notes.map(note => {
                    <div className="note" key={note.id}>
                        <h2>{note.title}</h2>
                        <h4>{note.body}</h4>
                    </div>
                })}
            </ul>
        </div>
    )

    
    
    return notes ? loaded() : <h1>Loading...</h1>;
}

export default Dashboard