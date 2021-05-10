import React from "react";
// import { Home, About, Error } from "./components";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CP from "./context";

function App() {
    return (
        <div className="test">
            <button className="btn btn-primary m-5">
                <span className="glyphicon  glyphicon-chevron-right-primary"></span> button
            </button>
        </div>
        // <CP>
        //   <Router>
        //     <Switch>
        //       <Route exact path="/" component={Home} />
        //       <Route exact path="/about" component={About} />
        //       <Route component={Error} />
        //     </Switch>
        //   </Router>
        // </CP>
    );
}

export default App;
