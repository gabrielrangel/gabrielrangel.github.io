import {StrictMode} from "react";

import {Contexts} from "./Contexts";
import {Navbar} from "../Components/Navbar";
import {Routes} from "./Routes";

export function App() {
    return (
        <StrictMode>
            <Contexts>
                <Navbar/>
                <Routes/>
            </Contexts>
        </StrictMode>
    )
}