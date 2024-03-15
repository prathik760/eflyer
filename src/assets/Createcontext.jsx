import { createContext } from "react";

 const Appcontext = createContext()

 const AppProvider = ({children}) => {
    return <Appcontext.Provider value={""}>{children}</Appcontext.Provider>
 }

 export {AppProvider,Appcontext}