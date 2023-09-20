//use transfer product data
// prepares the data layer
// warp our app ans provide the data layer
// Pull information from the data
import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
