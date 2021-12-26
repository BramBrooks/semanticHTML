// import Header from "./components/header_1";
import Header from "./components/header_2";
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

function App() {
  return (
    <Router>
      {/* <div className="header_banner"> */}
      <Header />
      {/* <Nav /> */}
      {/* </div> */}

      <Switch>
        <Route path="/embedded">
          <Embedded />
        </Route>
        <Route path="/text">
          <Text />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/meta">
          <Meta />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        {/* <Route path="/misc">
          <Misc />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
