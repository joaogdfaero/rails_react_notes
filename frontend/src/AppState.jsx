import React, {useContext, useReducer} from "react"

// INITIAL STATE
const initialState = {
    url: "http://localhost:3000",
    token: null,
    username: null
}

// REDUCER
// action = {type: "", payload: ---}
const reducer = (state, action) => {
    console.log('action:', action); // Add this line to log the action
    switch(action.type){
        case "signup":
            fetch(state.url + "/users/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.payload)
            }
            )
            .then(responde => Response.json())
            .then(user => {
                return {
                    ...state,
                    token: user.token,
                    username: user.username
                }
            })

        break

        case "login":
            fetch(state.url + "/login/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action.payload)
            }
            )
            .then(responde => Response.json())
            .then(user => {
                return {
                    ...state,
                    token: user.token,
                    username: user.username
                }
            })

        break

        default:
            return state
    }
}

// APPCONTEXT
const AppContext = React.createContext(null)

// APPSTATECOMPONENT
export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
}

//useAppState hook
export const useAppState = () => {
    return React.useContext(AppContext)
}

 
