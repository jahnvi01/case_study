import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route,} from "react-router-dom";
import Home from "./components/home";
import "./App.css";

const App = props => {


    return (

        <div className="App">

            <Switch>  
                <div className="bg-light mt-5">   
                    <Route exact path="/" component={Home} />

   
                </div>
            </Switch > 


        </div>
    );
  
};

export default App;