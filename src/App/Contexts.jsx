import {LanguageProvider} from "../Hooks/useLanguage";
import {NavbarContextProvider} from "../Hooks/useNavbar";

export function Contexts(props) {
    return (
        <LanguageProvider>
            <NavbarContextProvider>
                {props.children}
            </NavbarContextProvider>
        </LanguageProvider>
    )
}