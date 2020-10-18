import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
    return (
        <div className="app">
            <h1>Hello</h1>
            <div className="app__body">
				<Sidebar/>
			</div>
        </div>
    );
}

export default App;
