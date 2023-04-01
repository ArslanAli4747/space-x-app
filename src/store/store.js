import { createContext, useContext, useState } from "react"


const ContextApi = createContext()
export const  ContextProvider=({children})=>{
    const [data,setData] = useState(0)
    return(
        <ContextApi.Provider value={{
            data,setData
        }}>
            {children}
        </ContextApi.Provider>
    )
}

export const useContextApi = ()=>{
    return useContext(ContextApi)
} 
