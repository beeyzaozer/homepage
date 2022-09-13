import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { API_URL } from "../common/constants";
import reducer from "./reducer";

export const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);


export const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
      axios({
          method: "GET",
          url: API_URL
        }).then(response => {
          dispatch({ action: "SET_DATA", payload: response.data });
      })
      .catch(error => {
          console.log(error);
      });
  },[]);

  return (
    <DataContext.Provider
     value={{
      state, dispatch 
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};