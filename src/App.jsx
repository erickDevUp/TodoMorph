import React from 'react'
import './myStyles/newmorfismDark.css'
import './myStyles/newmorfism.css'
import './myStyles/App.css'
//myCompnents

import MainComponent from './components/mainComponent'
import { ColumnsContext } from './context/ColumnsContext'
import { ControlListContext } from './context/controlListContext'
import { ThemeCtx } from './context/themeCtx'
//import HeaderComponent from './components/headerComponent'

function App() {

  return (
    <div className='container'>
      <ThemeCtx>
        <ColumnsContext>
          <ControlListContext>
            <MainComponent />
          </ControlListContext>
        </ColumnsContext>
      </ThemeCtx>
    </div>
  )
}

export default App
