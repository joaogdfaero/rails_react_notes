import React from "react";
import { useAppState } from "../AppState.jsx";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx";

const Dashboard = () => {
  const { state, dispatch } = useAppState();
  const { token, url, notes, username } = state;
  const navigate = useNavigate();

  const getNotes = async () => {
    const response = await fetch(url + "/notes/", {
      method: "get",
      headers: {
        Authorization: "bearer " + token,
      },
    });
    const fetchedNotes = await response.json();
    dispatch({ type: "getNotes", payload: fetchedNotes });
  };

  React.useEffect(() => {
    getNotes();
  }, []);

  const loaded = () => {
    return (
      <div className="dashboard">
        <h1>{username}'s Notes</h1>
        <Link to="/dashboard/new">
          <button>New Note</button>
        </Link>
        <Routes>
          <Route
            exact path="/dashboard/new"
            element={<Form getNotes={getNotes} />}
          />
        </Routes>
        <ul>
          {state.notes.map((note) => (
            <div className="note" key={note.id}>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  return notes ? loaded() : <h1>Loading...</h1>;
};

export default Dashboard;




