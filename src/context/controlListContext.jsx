import React, { useState } from 'react'
const contextList = React.createContext({})

const ControlListContext=({children})=>
{
    const [listDB, setListDB] = useState()

    return <contextList.Provider value={{listDB,setListDB}}>
        {children}
    </contextList.Provider>
}

export {ControlListContext}
export default contextList