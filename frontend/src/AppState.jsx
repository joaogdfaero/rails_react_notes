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
    switch(action.type){
        case "signup":
            fetch(state.urk + "/users/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify[action.payload]
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
        
        case "login":
            fetch(state.urk + "/login/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify[action.payload]
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

 
