import React from "react"

// INITIAL STATE
const initialState = {
    url: "http://localhost:3000"
}

// REDUCER
// action = {type: "", payload: ---}
const reducer = (state, action) => {
    switch(action.type){
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

 
