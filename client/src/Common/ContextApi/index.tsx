import  { createContext, Dispatch, ReactNode, useReducer } from "react";

type Action = {type : "SHOPPING_CART_COUNT",payload : number}  | {type :"DIALOG_CREATE_PRODUCT"} | {type: "IS_LOGINED",payload : boolean} | {type : "IS_DRAWER_OPEN",payload : boolean} 

const initialState = {
    shopChart : 0,
    dialogCreateProduct : false,
    isLogined : false,
    isDrawerOpen : false
}

interface stateProviderProps {
    children : ReactNode
}
    
type AppState  = typeof initialState

const reducer = (state:AppState,action:Action):AppState =>{
    switch(action.type){
        case "SHOPPING_CART_COUNT":
            return{
                ...state,
                shopChart : state.shopChart + action.payload
            }
        case "DIALOG_CREATE_PRODUCT":
            return{
                ...state,
                dialogCreateProduct : !state.dialogCreateProduct
            }
        case "IS_LOGINED":
            return{
                ...state,
                isLogined : action.payload
            }
        case "IS_DRAWER_OPEN":
            return{
                ...state,
                isDrawerOpen : action.payload
            }
            
        default:
            return state
    }
} 

type contextType ={
    state :AppState;
    dispatch : Dispatch<Action>
}   

const StateValueContext = createContext<contextType>({state:initialState,dispatch:() => {} });

const StateValueProvider = ({children}:stateProviderProps) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
     <StateValueContext.Provider value={{state,dispatch}}>
        {children}        
      </StateValueContext.Provider>
    )
}


export {StateValueContext,StateValueProvider}