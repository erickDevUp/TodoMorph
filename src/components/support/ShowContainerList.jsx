import { useState , useContext ,useEffect} from 'react'


//componenet
import PrincipalContainerList from '../principalContainerList/principalContainerList'
import ContainerList from '../containerList/ContainerList'
import List from '../list/list'
import  ColumnsContext  from '../../context/ColumnsContext'
import ControlListContext from '../../context/controlListContext'

const ShowContainerList = () => {

    const { dataColumns, setDataColumns } = useContext(ColumnsContext)
    const {listDB,setListDB} = useContext(ControlListContext)
    const [getCL, setCL] = useState('');

    useEffect(() => {
        console.log(dataColumns);
        setCL(getCL => getCL=dataColumns.split(' '))    
    }, [dataColumns])

    const showContList = () => {
        try {
            const showList = getCL.map((container,index) =>
                        index > 0 ?
                        <ContainerList key ={index} id = {index}>
                            <h3 className="text-nmf-1">{container}</h3>
                            {
                                listDB[1].map((list,i) =>
                                    list.step == index && <List name={list.name}
                                        description={list.description}
                                        hour={list.hora}
                                        fecha={list.fecha}
                                        key={listDB[0][i]}
                                        id={listDB[0][i]}
                                        step={list.step}
                                         />
                                )
                            }
                        </ContainerList>
                        : ''
            )
            return (showList)
        } catch (error) {
            return ('')
        }
    }

    return (
        <>
            <PrincipalContainerList>
            
                {
                    listDB[1].map((list,index) => 
                        list.step == 0 && <List name={list.name}
                            description={list.description}
                            hour={list.hora}
                            fecha={list.fecha}
                            key={listDB[0][index]}
                            id={listDB[0][index]}
                            step={list.step}
                            />
                    )
                }
            </PrincipalContainerList>
            {showContList()}
        </>
    )
}

export default ShowContainerList