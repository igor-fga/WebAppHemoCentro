import React, {useReducer, createContext} from 'react'
export const DoadorContext = createContext()

const initialState ={
    doadores: []
}

const reducer = (state,action) =>{
    switch (action.type){
        case "ADD_DOADOR":
            return{
                doadores: [...state.doadores, action.payload]
            }
        default:
            throw new Error()    
    }
}

export const DoadorContextProvider = (props) =>{
    const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <DoadorContext.Provider value={[state,dispatch]}>
            {props.children}
        </DoadorContext.Provider>
    )
}