import React from "react";
import "./styles/app.css";
import Image from "./components/imageViewer";
import Form from "./components/formSignup";
import Nav from "./components/navigation";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="inner-container">
        <Header />
        <Nav />
        <Switch>
          <Route path="/image" component={Image} />
          <Route path="/signup" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
