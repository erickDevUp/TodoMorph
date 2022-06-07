import Recat from 'react'
import ShowContainerList from './support/ShowContainerList'
import { useState, useContext, useEffect } from 'react'
import DB from '../hocks/hoockDB/HoockDB'
import ColumnsContext from '../context/ColumnsContext'
import controlListContext from '../context/controlListContext'
import ThemeContext from '../context/themeCtx'
import FormAddColumn from './formAddColumn/formAddColumn'


const queryDB =
{
    DB: 'Todo',
    table: 'List'
}

const MainComponent = () => {
    const [loading, setloading] = useState(false)
    const [seeAddColumnModal, setSeeAddColumnModal] = useState(false)

    const { dataColumns, setDataColumns } = useContext(ColumnsContext)
    const { listDB, setListDB } = useContext(controlListContext)
    const { theme, setTheme } = useContext(ThemeContext);


    useEffect(() => {
        const { update, read } = DB(queryDB.DB, queryDB.table)
        update(1,
            {})

        read(setListDB)

    }, [])

    useEffect(() => {
        localStorage.setItem('columns', dataColumns);
        if (listDB) {
            setloading(true)
        }
    }, [listDB, dataColumns])


    if (!loading) return <h1>loading...</h1>

    /*const add = () => {
        const name = prompt('write the name of new column', 'column')

        name && 

    }*/

    return (
        <>
            <header className={'container' + theme}>
                <button className={"btnAddCreate  text-nmf-1 btn-ms" + theme} onClick={() => setSeeAddColumnModal(see => !see)} >Add Column</button>
                <button className={"btnRefresh  text-nmf-1 btn-ms" + theme} style={{display:"flex"}} onClick={() => setTheme(thm => thm == '' ? 'Dark' : '')}>
                    <i className={theme== 'Dark' ? "fas fa-sun" : 'fas fa-moon'} style={{margin:"auto"}}/>
                </button>
            </header>
            <main className={'main container' + theme}>
                <ShowContainerList />
                {seeAddColumnModal && <FormAddColumn hidden={setSeeAddColumnModal} setDataColumns={setDataColumns} />}
            </main>
        </>
    )
}
export default MainComponent