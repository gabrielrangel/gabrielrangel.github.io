import Header from "./style"
import {useNavbar} from "../../Hooks/useNavbar";

export function Navbar(props){
    const [itens] = useNavbar()

    return (
        <Header>
            <strong>{props.title}</strong>
            <nav>{itens}</nav>
        </Header>
    )
}