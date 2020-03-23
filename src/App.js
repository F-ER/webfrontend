import React, { Component } from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

// import Frontpage from "./pages/frontpage";
import Index from "./pages/index";
//import Header from "./commons/header";
import Service from "./routes/service";
import Tools from "./routes/tools";
import Catalog from "./routes/catalog";
import Bookingservicesome from "./routes/bookingServiceHome";
// import Footer from "./commons/footer";
import Cart from "./pages/cart";

// English

import IndexEn from "./pages/indexEn";
import ServiceEn from "./routes-en/serviceEn";
import ToolsEn from "./routes-en/toolsEn";
import CatalogEn from "./routes-en/catalogEn";
import BookingServiceHomeEn from "./routes-en/bookingServiceHomeEn";
import CartEn from "./pages/cartEn";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <HeaderEn /> */}

          {/* <Header /> */}
          <Route path="/" exact component={Index} />
          <Route path="/service" exact component={Service} />
          <Route path="/tools" exact component={Tools} />
          <Route path="/catalog" exact component={Catalog} />
          <Route
            path="/booking-Service-Home"
            exact
            component={Bookingservicesome}
          />
          <Route path="/cart" exact component={Cart} />

          {/* English */}

          <Route path="/IndexEn" exact component={IndexEn} />
          {/* <Route path="/" exact component={Frontpage} /> */}
          <Route path="/service-en" exact component={ServiceEn} />
          <Route path="/tools-en" exact component={ToolsEn} />
          <Route path="/catalog-en" exact component={CatalogEn} />
          <Route
            path="/booking-Service-Home-en"
            exact
            component={BookingServiceHomeEn}
          />
          <Route path="/cart-en" exact component={CartEn} />

          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
