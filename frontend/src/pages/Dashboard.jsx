import React from "react";
import { Routes, useLoaderData } from "react-router";
import { useAppState } from "../AppState.jsx";
import { Route, Link, Switch, useParams } from "react-router-dom";
import Form from "../components/Form.jsx";


const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, notes, username} = state;

    const { action } = props;
    console.log("Action in Dashboard:", action);

    console.log("Action:", action);
    console.log("Props:", props);

    const getNotes = async () => {
        const response = await fetch(url + "/notes/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const fetchedNotes = await response.json()
        dispatch({type: "getNotes", payload: fetchedNotes})  
    }
  
    React.useEffect(() => {getNotes();
        console.log("Action in useEffect:", action);
    }, [action])

    const loaded = () => {

        console.log("Dashboard loaded");
        console.log("State:", state);

        return (
        <div className ="dashboard">
            <h1>Anotações de {username}</h1>
            <Link to="/dashboard/new"><button>New Note</button></Link>
            <Routes>
                <Route
                    path="/dashboard/new"
                    element={<Form getNotes={getNotes} />}
                />
            </Routes>

            <ul>
                {state.notes.map((note) => (
                    <div className="note" key={note.id}>
                        <h2>{note.title}</h2>
                        <h4>{note.body}</h4>
                    </div>
                ))}
            </ul>
        </div>
    )};
    
    return state.notes ? loaded() : <h1>Loading...</h1>;
}

export default Dashboard


