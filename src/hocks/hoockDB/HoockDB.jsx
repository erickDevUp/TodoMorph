import createDB from './HoockCoreDB'

const DB = (nameDB,NameTabla) => {
    const { openDB } = createDB()
    const { dbQuery, writeDB, readDB, updateDB, deleteDB, closeDB } = openDB(nameDB,NameTabla)

    const read = (setState) => {
        dbQuery.addEventListener('success', () => {
            readDB(setState)
        })
    }

    const write = (writer) => {
        dbQuery.addEventListener('success', () => {
            writeDB(writer)
        })
    }
    const update = (key, writer) => {
        dbQuery.addEventListener('success', () => {
            updateDB(writer,key)
        })
    }

    const sup = (key) => {

        dbQuery.addEventListener('success', () => {
            deleteDB(key)
        })
    }

    const clos =()=>
    {
            closeDB()

    }
    return { read, write, update, sup, clos }

}

export default DB 