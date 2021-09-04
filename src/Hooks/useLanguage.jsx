import {createContext, useContext, useState} from "react";

const Context = createContext({})

export function LanguageProvider (props){
    const [language, setLanguage] = useState(
        navigator.language || navigator.userLanguage
    )

    return (
        <Context.Provider value={[language, setLanguage]}>{props.children}</Context.Provider>
    )
}

export const useLanguage = () => useContext(Context)