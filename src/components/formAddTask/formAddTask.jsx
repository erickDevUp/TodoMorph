import React, { useContext } from 'react'
import './formAddTask.css'
import DB from '../../hocks/hoockDB/HoockDB';
import ControlListContext from '../../context/controlListContext';
import ThemeContext from '../../context/themeCtx';

const queryDB =
{
    DB: 'Todo',
    table: 'List'
}

const handleSubmit = (e, setState, setView) => {

    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;

    const { write, read } = DB(queryDB.DB, queryDB.table)
    write({
        name,
        description,
        step: 0
    });
    read(setState)
    for (const target of e.target) {
        target.value = ''
    }

}

const FormAddTask = () => {
    const { listDB, setListDB } = useContext(ControlListContext)
    const { theme } = useContext(ThemeContext);

    return (
        <form className={"form list container-child-princiapl"+theme} onSubmit={(e) => handleSubmit(e, setListDB)}>
            <input className={"nameForm text-nmf-1  input-nmf"+theme} placeholder="Name of you task" type="text" />
            <textarea className={"descForm text-nmf  input-nmf"+theme} name='description' placeholder="Description of you task" />
            <button className={"text-nmf btnForm btn"+theme} style={{fontSize:'18px'}} >Add List</button>
        </form>
    )
}
export default FormAddTask