import React, { Component } from "react";
import Frontpage from "./pages/frontpage";
import Header from "./commons/header";
import Homeservi from "./commons/homeservic";
import Imagess from "./commons/imagess";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Footer from "./commons/footer";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Frontpage />
          <Header />
          <Imagess />
          <Homeservi />
          <Footer />

          <Route path="/frontpage" component={Frontpage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
