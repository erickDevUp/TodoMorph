import React from 'react' 
const createDB =()=>{ 

const openDB =(nameDB,nameTable)=>
{

const dbQuery = indexedDB.open(nameDB)


dbQuery.addEventListener('upgradeneeded',()=>
{
   createTable(nameTable)
})

dbQuery.addEventListener('error',()=>console.log('DB ERROR'))

const createTable =(nameTable)=>
{
    const db = dbQuery.result;
    db.createObjectStore(nameTable,{autoIncrement:true});
    console.log('DB: '+nameTable+' create');
} 

const loadDB =(readOrWrite)=>
{   

    const db =  dbQuery.result;
    const dbTransaction = db.transaction(nameTable,readOrWrite);
    const dbObjStore = dbTransaction.objectStore(nameTable);
    return {dbObjStore,dbTransaction}
}

const writeDB =(data)=>
{
    const {dbObjStore,dbTransaction} = loadDB('readwrite')
    dbObjStore.add(data)
    dbTransaction.addEventListener('complete',()=>console.log('POST complete'))
}

const readDB =(setstate)=>
{
    const data =[]
    const key = []
    const {dbObjStore} = loadDB('readonly')
    const select =  dbObjStore.openCursor();
    const rett = select.addEventListener('success',()=>
    {
        
        if (select.result)
        {
            //console.log(select.result.value);

            data.push(select.result.value)
            key.push(select.result.key)

            select.result.continue()
        }else
        {
            //console.log(data);
            //console.log(key);
            key[0] ? setstate([key,data]) : setstate('');
                      
            

            //console.log('All data has read')    
        } ;        
    })
    
    
}

const updateDB=(data,key)=>
{
    const {dbObjStore,dbTransaction} = loadDB('readwrite')
    dbObjStore.put(data,key)
    dbTransaction.addEventListener('complete',()=>console.log('PUT complete'))
}

const deleteDB=(key)=>
{
    const {dbObjStore,dbTransaction} = loadDB('readwrite')
    dbObjStore.delete(key)
    dbTransaction.addEventListener('complete',()=>console.log('Delete complete'))
}
const closeDB =()=>
{
    const db =  dbQuery.result;
    db.close();
    console.log('close');
    
}
return {dbQuery ,writeDB , readDB , updateDB , deleteDB ,closeDB}
}
return {openDB}
}
export default createDB
