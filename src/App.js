// eslint-disable-next-line
import React, { useState } from "react";

// CSS Component Imports
import "./App.css";

// Component Imports
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Switch>
              {/* <Sidebar /> */}
              {/* <Chat /> */}
              <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>

                <Sidebar />
              <Route path="/">
              <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
