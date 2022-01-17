// import Header from "./components/header_1";
import React, { Component } from "react";
import Header from "./components/header";
import Home from "./pages/1.home";
import Form from "./pages/4.form";
import Embedded from "./pages/5.embedded";
import Text from "./pages/2.text";
import Meta from "./pages/6.meta";
import Table from "./pages/3.table";
import Tags from "./pages/8.tags";
// import Misc from "./pages/7.misc";
import Footer from "./components/footer";

import "./styles/reset.scss";
import "./styles/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = { clicked: false };

  // updates state to toggle hamburger / responsive navbar
  handleHamburgerClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // updates state to toggle to hamburger view once nav option clicked
  handleNavClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    // console.log(this.state.clicked);
    return (
      <Router>
        <Header
          result={this.state.clicked}
          handleNavClick={this.handleNavClick}
          handleHamburgerClick={this.handleHamburgerClick}
        />
        <Switch>
          <Route path="/embedded">
            <Embedded result={this.state.clicked} />
          </Route>
          <Route path="/text">
            <Text result={this.state.clicked} />
          </Route>
          <Route path="/form">
            <Form result={this.state.clicked} />
          </Route>
          <Route path="/meta">
            <Meta result={this.state.clicked} />
          </Route>
          <Route path="/table">
            <Table result={this.state.clicked} />
          </Route>
          <Route path="/tags">
            <Tags result={this.state.clicked} />
          </Route>
          {/* <Route path="/misc">
          <Misc />
        </Route> */}
          <Route exact path="/">
            <Home result={this.state.clicked} />
          </Route>
        </Switch>
        <Footer result={this.state.clicked} />
      </Router>
    );
  }
}

export default App;

// STILL TO DO
// remember to create my own custom e-mail address
