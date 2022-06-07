import React, { useState , useEffect} from 'react'
const context = React.createContext({})

const ColumnsContext=({children})=>
{
    const [dataColumns, setDataColumns] = useState(()=> localStorage.getItem('columns') || 'start');
    useEffect(()=>
    {
        console.log(dataColumns);
        
    },[dataColumns])
    return <context.Provider value={{dataColumns,setDataColumns}}>
        {children}
    </context.Provider>
}

export {ColumnsContext}
export default context