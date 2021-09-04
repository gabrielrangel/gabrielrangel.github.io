import {BrowserRouter, Route, Switch, Router} from "react-router-dom";
import {Home} from "../Pages/Home";

export function Routes() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}><Home/></Route>
                </Switch>
            </BrowserRouter>
    )
}