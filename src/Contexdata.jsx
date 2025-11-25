import React, { createContext, useState } from 'react'

export const dataContext = createContext();
const Contexdata = (props) => {
    const [details, setDetails] = useState([])
    return (
        <dataContext.Provider value={[details,setDetails]}>
            {props.children}
        </dataContext.Provider>
    )
}

export default Contexdata