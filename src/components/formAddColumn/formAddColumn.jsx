import React, { useContext, useMemo, useEffect } from 'react';
import '../formAddTask/formAddTask.css'
import ControlListContext from '../../context/controlListContext';
import './formAddColumn.styles.css'
import ThemeContext from '../../context/themeCtx';
import { useRef } from 'react';


const FormAddColumn = ({ hidden , setDataColumns}) => {
    const { listDB, setListDB } = useContext(ControlListContext)
    const { theme } = useContext(ThemeContext);
    const name = useRef()

    const addColumn = (e) => {
        e.preventDefault()
       setDataColumns(dataColumns => dataColumns + ' ' + name.current.value)
       name.current.value = '';
       hidden(see=>false);
        
}


    return (
        <div className='addColumnModal'>
            <form className={"formAddColumn container-child-princiapl" + theme}>
                <input ref={name} className={"inputAddColumn text-nmf-1  input-nmf" + theme} autoFocus placeholder="Add a new column" type="text" />
                <div className='btnsAddColumn'>
                    <button className={"btnAddColumn text-nmf btn" + theme} onClick={(e) => addColumn(e)}>Add</button>
                    <button className={"btnAddColumn text-nmf btn" + theme} onClick={() => hidden(see => false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default FormAddColumn;