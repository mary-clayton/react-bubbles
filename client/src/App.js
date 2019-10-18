import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path= '/bubbles' component={BubblePage}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;


