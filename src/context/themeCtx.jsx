import React, {useState} from "react"

const ThemeContext = React.createContext({})

export const ThemeCtx = ({ children }) => {
    const [theme, setTheme] = useState('');

    return(<ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
)
}

export default ThemeContext;