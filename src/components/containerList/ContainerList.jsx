import React, { useContext, useCallback } from 'react'
import './containerList.css'
import ColumnsContext from '../../context/ColumnsContext';
import ControlListContext from '../../context/controlListContext';
import DB from '../../hocks/hoockDB/HoockDB';
import ThemeContext from '../../context/themeCtx';
const queryDB =
{
    DB: 'Todo',
    table: 'List'
}

const ContainerList = ({ children, id }) => {
    const { dataColumns, setDataColumns } = useContext(ColumnsContext);
    const { listDB, setListDB } = useContext(ControlListContext)
    const { theme } = useContext(ThemeContext);

    const deleteColumn = useCallback(() => {
        let column = []
        column = dataColumns.split(' ')

        //delete list on container
        listDB[1].map((list, i) => {
            if (list.step == id) {
                const { sup, read } = DB(queryDB.DB, queryDB.table)
                sup(listDB[0][i]);
                read(setListDB)
                console.log('>>>>>>>>>');
                console.log(list.step + ' ' + id);
                console.log('<<<<<<<<<');
            }
        })
        listDB[1].map((list, i) => {
            if (list.step > id) {
                const { update, read } = DB(queryDB.DB, queryDB.table)
                update(listDB[0][i], {
                    name: list.name,
                    description: list.description,
                    step: list.step - 1,
                    hora: list.hora,
                    fecha: list.fecha
                })
                read(setListDB)
            }
        })
        setTimeout(() => { }, 200);
        ///////////////////////

        column.splice(id, 1)
        setDataColumns(column.toString().replace(/,/g, ' '))
    }, [dataColumns, listDB])

    return (
        <div className={"containerList container-child-princiapl"+theme}>
            <button className="btnDelete text-nmf-1" onClick={deleteColumn}>X</button>
            {children}
        </div>
    )
}
export default ContainerList