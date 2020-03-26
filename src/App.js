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
import Shop from "./shoping/shop";
import DetailsProductsAuto from "./shoping/detailsProductsAuto";
import DetailsProducts from "./shoping/detailsProducts";
import ConfirmForm from "./shoping/confirmForm";
import ConfirmMassage from "./shoping/confirmMassage";
import Payment from "./shoping/payment";

// English

import IndexEn from "./pages/indexEn";
import ServiceEn from "./routes-en/serviceEn";
import ToolsEn from "./routes-en/toolsEn";
import CatalogEn from "./routes-en/catalogEn";
import BookingServiceHomeEn from "./routes-en/bookingServiceHomeEn";
import CartEn from "./pages/cartEn";
import ShopEn from "./shoping/shoping-en/shopEn";
import ConfirmFormEn from "./shoping/shoping-en/confirmFormEn";
import ConfirmMassageEn from "./shoping/shoping-en/confirmMassageEn";
import DetailsProductsAutoEn from "./shoping/shoping-en/detailsProductsAutoEn";
import DetailsProductsEn from "./shoping/shoping-en/detailsProductsEn";
import PaymentEn from "./shoping/shoping-en/paymentEn";

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
          <Route path="/shop" exact component={Shop} />
          <Route
            path="/details-products-auto"
            exact
            component={DetailsProductsAuto}
          />
          <Route path="/details-products" exact component={DetailsProducts} />
          <Route path="/confirm-form" exact component={ConfirmForm} />
          <Route path="/confirm-massage" exact component={ConfirmMassage} />
          <Route path="/payment" exact component={Payment} />

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

          <Route path="/shop-en" exact component={ShopEn} />
          <Route
            path="/details-products-auto-en"
            exact
            component={DetailsProductsAutoEn}
          />
          <Route
            path="/details-products-en"
            exact
            component={DetailsProductsEn}
          />
          <Route path="/confirm-form-en" exact component={ConfirmFormEn} />
          <Route
            path="/confirm-massage-en"
            exact
            component={ConfirmMassageEn}
          />
          <Route path="/payment-en" exact component={PaymentEn} />

          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
