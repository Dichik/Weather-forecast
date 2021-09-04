import React from 'react';
import './App.css';
import {Main} from './Main.components';
import * as logo from './images/Vacan.png';
import * as menu from './images/menu-icon.png';
import Login from './Auth/Login';
import {Redirect} from 'react-router-dom';
import Forecast from "./Forecast";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from "./MainPage";

const App = () => {
    const img = logo.default;
    const img_menu = menu.default;

    return (
        <Router>
            <Main className="header">
                <img alt={'logo'} style={{
                    position: "absolute",
                    left: "100px",
                    top: "5px"
                }
                } src={img} className={"logo"}/>
                <img alt={'menu'} style={{
                    position: "absolute",
                    right: "50px",
                    top: "10px"
                }
                } src={img_menu} className={"menu"}/>
            </Main>
            <Switch>
                <Route path={"/forecast"}>
                    <Forecast />
                </Route>
                <Route exact path={"/"}>
                    <MainPage />
                </Route>
                <Route path={"/login"}>
                    <Login />
                </Route>
                <Redirect from ="*" to='/' />
            </Switch>
        </Router>
    );
}

export default App;
