import React , {createContext, useState} from "react";
export const DarkContext=createContext()

export const DarkProvider=(props)=>{
    const [dark,setDark]=useState(false)
    return(
        <DarkContext.Provider value={[dark,setDark]}>
            {props.children}
        </DarkContext.Provider>
    )
}