import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bulma/css/bulma.css';
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import {ContextController} from "./context";
import PostItem from "./components/posts/PostItem";

const App = () => {
    return (
        <ContextController>
            <Router>
                <> <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/post/:id" component={PostItem} />
                    </Switch>
                </div>
            </>
        </Router>
    </ContextController>
    );
}

export default App;
