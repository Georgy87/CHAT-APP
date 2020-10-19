import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./ Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from "./StateProvider";

import "./App.css";

function App() {
    const [{user}, dispatch] = useStateValue();
    console.log(user);
    return (
        <div className="app">
            <div className="app__body">
                {!user ? (
                    <Login />
                ) : (
                    <Router>
                        <Sidebar />
                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat />
                            </Route>
                            <Route path="/">
                                <Chat />
                            </Route>
                        </Switch>
                    </Router>
                )}
            </div>
        </div>
    );
}

export default App;
