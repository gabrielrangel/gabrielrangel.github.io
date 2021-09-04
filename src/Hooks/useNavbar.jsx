import {createContext, useContext, useState} from "react"

const Context = createContext({})

export function NavbarContextProvider (props) {
    const [itens, setItens] = useState([])
    return (
        <Context.Provider value={[itens, setItens]}>{props.children}</Context.Provider>
    )
}

export const useNavbar = () => useContext(Context)