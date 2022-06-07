import React,{useState, useContext} from 'react'
import './principalContainerList.css'
import './addTask.css'
import FormAddTask from '../formAddTask/formAddTask'
import ThemeContext from '../../context/themeCtx'


const PrincipalContainerList=({children})=>
{
    const[view,setView] = useState(false)
    const { theme } = useContext(ThemeContext);

    return(
        <div className={"containerList container-child-princiapl"+theme}>           
            <div className = 'divStart'>                
                <h3 className="text-nmf-1">Start</h3>
                <button className={"btnAdd text-nmf btn"+theme} style={{fontSize:'18px'}} onClick={()=>setView(view=>!view)}>ADD TASK</button>            
            </div>
            { view ? <FormAddTask/> : '' }
            {children}
        </div>
    )
}
export default PrincipalContainerList