import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class confirmFormEn extends Component {
  render() {
    return (
      <div>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="assets/images/favicon.png" />
        <title>Alrahden Laundry | Alrahden</title>
        <meta name="description" content="Alrahden Laundry | Alrahden " />
        <meta property="og:title" content="Alrahden Laundry | Alrahden" />
        <meta property="og:description" content="Alrahden Laundry | Alrahden" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <link rel="stylesheet" href="assets/fonts/font/stylesheet-font.css" />
        <link rel="stylesheet" href="assets/fonts/fontawesome/css/all.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/hover-min.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/slick/slick.css" />
        <link rel="stylesheet" href="assets/slick/slick-theme.css" />
        <link rel="stylesheet" href="assets/datepicker/daterangepicker.css" />
        {/* <!-- <link rel="stylesheet" href="assets/css/bootstrap-datepicker.min.css"> --> */}
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="./assets/css/en.css" />
        <link rel="stylesheet" href="assets/css/responsive.css"></link>
        <header>
          {/* <!-- header-top --> */}
          <div className="header-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="top-menu">
                    <ul>
                      <li>
                        <NavLink to={"service-en"}> Laundry </NavLink>
                      </li>
                      <li>
                        <NavLink to={"tools-en"}> Tools </NavLink>

                        {/* <a href="tools-en.html">Tools</a> */}
                      </li>
                      <li>
                        <NavLink to={"catalog-en"}> Hotel Services </NavLink>
                        {/* <a href="catalog-en.html">Hotel Services</a> */}
                      </li>
                      <li>
                        <NavLink to={"shop-en"}> Store </NavLink>
                        {/* <a href="https://alrahden-store.com/">Store</a> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="header-left">
                    {/* <!-- header home --> */}
                    <div className="header-home">
                      <ul className="data-header-left">
                        <li>
                          <a href="#">
                            <img src="assets/images/icon_phone.svg" /> App{" "}
                          </a>
                        </li>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <li>
                          <NavLink to={"/"}> عربي</NavLink>
                          {/* <a href="./confirm-form.html"> عربي</a> */}
                        </li>
                      </ul>
                    </div>

                    {/* <!-- header login --> */}
                    <div className="header-login">
                      <ul>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <li>
                          <NavLink to={"/"}> عربي</NavLink>
                        </li>
                        <li>
                          <a href="cart-en" className="icon-cart">
                            <img src="assets/images/cart.svg" />
                            <span className="number-item-cart">99</span>
                          </a>
                        </li>
                        <li className="users-header">
                          <img
                            className="icon-user"
                            src="assets/images/icon-user.svg"
                          />
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#loginModal"
                          >
                            Register{" "}
                          </a>
                          <span>/</span>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#loginModal"
                          >
                            Log in
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ِend header-top -->

        // <!-- header-main --> */}
          <div className="header-main">
            <div className="container-fluid">
              <div className="row row-header-mobile">
                <div className="col-md-3 logo">
                  <a href="indexEn">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div className="col-md-9 left-header">
                  {/* <!-- main-menu-block --> */}
                  <div className="main-menu-block mobile-header-nav">
                    <ul className="main-menu">
                      <li>
                        <a href="indexEn">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Our Services</a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <a href="service-en">Laundries</a>
                            <ul className="dropdown-menu">
                              <li>
                                <NavLink to={"tools-en"}> Tools </NavLink>
                                {/* <a href="./tools-en">Tools</a> */}
                              </li>
                              <li>
                                <NavLink to={"catalog-en"}>
                                  {" "}
                                  Hotel Services{" "}
                                </NavLink>
                                {/* <a href="#">Hotel Services</a> */}
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to={"tools-en"}> Tools </NavLink>
                            {/* <a href="./tools-en.html">Tools</a> */}
                          </li>
                          <li>
                            <NavLink to={"catalog-en"}>
                              {" "}
                              Hotel Services{" "}
                            </NavLink>
                            {/* <a href="#">Hotel services</a> */}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Offers</a>
                      </li>
                      <li>
                        <a href="#">Branches</a>
                      </li>
                    </ul>
                  </div>
                  {/* 
                        <!-- search block --> */}
                  <div className="search">
                    <form>
                      <input
                        className="search-input"
                        type="search"
                        placeholder="Search"
                      />
                    </form>
                  </div>

                  <a
                    className="mobile-menu-toggle js-toggle-menu hamburger-menu"
                    href="#"
                  >
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end header-main --> */}
        </header>
        {/* <!-- End Header --> */}
        <div className="main-web">
          {/* <!--  Main web  --> */}
          <div className="container">
            <div className="breadcrumb">
              <a href="#">Store</a>
              <a href="#">Cart</a>
              <span>Confirm Order</span>
            </div>

            <div className="row container-confirm-form">
              <div className="col-md-9 right-details  confirm-right confirm-form">
                {/* <!-- Prosnal data Block --> */}
                <div className="block-form">
                  <h4>Personal Information</h4>
                  <div className="data-block-form">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Contact  Addess  --> */}
                <div className="block-form">
                  <h4>Delivery Address</h4>
                  <div className="data-block-form">
                    <div className="form-row">
                      <div className="col">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option selected>Region</option>
                          <option>1 Region</option>
                          <option>2 Region</option>
                          <option>3 Region</option>
                          <option>4 Region</option>
                          <option>5 Region</option>
                        </select>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Neighborhood"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Additional Information"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Payment Method  --> */}
                <div className="block-form wiht-out-bgheader">
                  <h4>Payment Method</h4>
                  <div className="data-block-form">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="radio"
                          id="pamyment1"
                          name="pamyment"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" for="pamyment1">
                          Cash On Delivery
                        </label>
                      </div>
                      <div className="col">
                        <input
                          type="radio"
                          id="pamyment2"
                          name="pamyment"
                          className="custom-control-input"
                        />
                        <label className="custom-control-label" for="pamyment2">
                          Online Payment via visa or Mada Card
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- visa data Block --> */}
                <div className="block-form">
                  <h4>Card Details</h4>
                  <div className="data-block-form">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Card Holder"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Card Number"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Year"
                        />
                      </div>
                      <div className="col">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option selected> Month</option>
                          <option>1 Month</option>
                          <option>2 Month</option>
                          <option>3 Month</option>
                          <option>4 Month</option>
                          <option>5 Month</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Security Number"
                        />
                      </div>
                      <div className="col"></div>
                    </div>
                  </div>
                </div>

                {/* <!-- details-order-blocks --> */}
                <div className="details-order-blocks">
                  <div className="order-blocks">
                    <h4>Order Details</h4>

                    <div className="item-order-details-block">
                      {/* <!-- Item --> */}
                      <div className="item-order-details">
                        <div className="col-md-2 img-pro-cart">
                          <img src="assets/images/img-inner-cart.jpg" />
                        </div>

                        <div className="col-md-6 products-name-data">
                          <div className="name-product">
                            {" "}
                            Alrahden for White Clothes 6 KG
                          </div>
                          <div className="desc-details-product">6 kg</div>
                        </div>
                        <div className="col-md-2 quantity-numner-details">
                          <span> 1 </span>
                        </div>
                        <div className="col-md-2 price-product-order">
                          79 SAR
                        </div>
                      </div>
                      {/* <!-- Item --> */}
                      <div className="item-order-details">
                        <div className="col-md-2 img-pro-cart">
                          <img src="assets/images/img-inner-cart.jpg" />
                        </div>

                        <div className="col-md-6 products-name-data">
                          <div className="name-product">
                            {" "}
                            Alrahden for White Clothes 6 KG
                          </div>
                          <div className="desc-details-product">6 kg</div>
                        </div>
                        <div className="col-md-2 quantity-numner-details">
                          <span> 1 </span>
                        </div>
                        <div className="col-md-2 price-product-order">
                          79 SAR
                        </div>
                      </div>
                      {/* <!-- Item --> */}
                      <div className="item-order-details">
                        <div className="col-md-2 img-pro-cart">
                          <img src="assets/images/img-inner-cart.jpg" />
                        </div>

                        <div className="col-md-6 products-name-data">
                          <div className="name-product">
                            {" "}
                            Alrahden for White Clothes 6 KG
                          </div>
                          <div className="desc-details-product">6 kg</div>
                        </div>
                        <div className="col-md-2 quantity-numner-details">
                          <span> 1 </span>
                        </div>
                        <div className="col-md-2 price-product-order">
                          79 SAR
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="totlal-order-bootom">
                    Total: <span>79 SAR</span>
                  </div>
                </div>
              </div>

              {/* <!-- Left Cart --> */}
              <div className="col-md-3 left-details cart-left  confirm-left">
                <div className="details-products-block-left  left-cart-block left-confirm-block  block-coupon">
                  <h6>Have a Coupon?</h6>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your coupon"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-link-confirm"
                    >
                      Activate Coupon
                    </button>
                  </form>
                </div>
                <div className="details-products-block-left  left-cart-block left-confirm-block block-total-confirm ">
                  <div className="total-confirm">
                    Total: <span className="price-total-confirm">79 SAR</span>
                  </div>
                  <p>
                    by clicking on Confirm Order, I accept that I have read and
                    understood everything related to terms and conditions.
                  </p>
                  <a className="btn-link-confirm" href="./confirm-massage-en">
                    Confirm Order
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- service shop block --> */}
          <div className="service-shop-block service-footer-shop">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-3 items-service-shop wow zoomIn animated "
                  data-wow-delay="0.2s"
                >
                  <img src="assets/images/connecting-icon.svg" />
                  <h3>Recieve from any branch</h3>
                  <p>Or free delivery on order for more than 200 riyals</p>
                </div>

                <div
                  className="col-md-3 items-service-shop wow zoomIn animated "
                  data-wow-delay="0.4s"
                >
                  <img src="assets/images/return.svg" />
                  <h3>Free returns</h3>
                  <p>Return policy in case that you do not like the product</p>
                </div>

                <div
                  className="col-md-3 items-service-shop wow zoomIn animated "
                  data-wow-delay="0.6s"
                >
                  <img src="assets/images/security-icon.svg" />
                  <h3>Secure direct payment</h3>
                  <p>We accept all credit cards or mada cards</p>
                </div>

                <div
                  className="col-md-3 items-service-shop wow zoomIn animated "
                  data-wow-delay="0.8s"
                >
                  <img src="assets/images/client-service.svg" />
                  <h3>Customer Service Center</h3>
                  <p>Available 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End service shop block --> */}
        </div>
        {/* <!-- End  Main web  --> */}

        {/* <!-- End  Main web  -->
    <!-- Footer  --> */}
        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4 footer-block">
                  <h2>Contact Us</h2>
                  <div className="data-contact">
                    <div className="address">
                      <img src="assets/images/address.svg" />
                      Riyadh - Kingdom Of Saudi Arabia
                    </div>
                    <div className="phone">
                      <img src="assets/images/support-footer.svg" /> 920006848
                    </div>
                    <div className="download-no">
                      <img src="assets/images/download-icon.svg" /> 12345
                    </div>
                    <div className="email">
                      <img src="assets/images/icon-mail.svg" />{" "}
                      info@alrahden.com
                    </div>
                  </div>

                  <div className="social-media">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-snapchat-ghost"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 footer-block">
                  <h2>Related Links</h2>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Laundry Services</a>
                    </li>
                    <li>
                      <a href="#">Tools Services</a>
                    </li>
                    <li>
                      <a href="#">Hotel Services</a>
                    </li>
                    <li>
                      <a href="#">Store</a>
                    </li>
                    <li>
                      <a href="#">Book house Service</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-block">
                  <h2>Get Our Offers</h2>
                  <div className="maill-list">
                    <div className="note-mail">
                      be informed of our new offers, register now to receive all
                      updates
                    </div>
                    <form>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email  Or Phone Number"
                      />
                      <button type="submit" className="btn btn-primary">
                        Subcsribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
            <div className="copy-right">
              All rights reserved by Alrahden © 2020
            </div>
          </div>
        </footer>

        {/* 
    <!-- Modal  Shear--> */}
        <div
          className="modal fade"
          id="shearModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog shear-modal" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="top-header-modal">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h3>Share this content Via:</h3>
                </div>

                <div className="data-shear">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fas fa-print"></i> Print The Page
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="far fa-envelope"></i> Send Via Email
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ِEnd Modal Shear -->



    <!-- Contact Us Modal --> */}
        <div
          className="modal fade "
          id="contactUsModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="container">
            <div className="modal-dialog  contactUsModal" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="bg-inner-page">
                    <div className="data-page with-img">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div className="right-page right-page-img">
                        <div className="data-contactus">
                          <p>
                            You can contact us during official working hours
                            from 8-12 am and from 4-8 pm{" "}
                          </p>
                          <div className="contactus-data">
                            <span className="phone">
                              <img src="assets/images/support.svg" />
                              920006848
                            </span>

                            <span className="email-w">
                              <img src="assets/images/email-w.svg" />
                              info@alrahden.com
                            </span>

                            <span className="download-w">
                              <img src="assets/images/download-w.svg" />
                              12345
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="left-page">
                        <div className="form-booking form-contactUs">
                          <form>
                            <div className="row">
                              <div className="col form-group">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                />
                              </div>
                              <div className="col form-group">
                                <label>Mobile Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Mobile Number"
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col form-group">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="col form-group">
                                <label>Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Title"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="inputState">Message</label>
                              <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Your Message"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-booking"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Contact Us Modal -->


    <!-- Modal Login  --> */}
        <div
          className="modal fade login-modal"
          id="loginModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="block-login-modal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>

                  <div className="logo-login">
                    <img src="assets/images/logo-v2.svg" />
                  </div>

                  <div className="data-login-block">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        data-toggle="tab"
                        href="#login-tab"
                        role="tab"
                        aria-controls="login-tab"
                        aria-selected="true"
                      >
                        Log in{" "}
                      </a>

                      <a
                        className="nav-item nav-link"
                        data-toggle="tab"
                        href="#register-tab"
                        role="tab"
                        aria-controls="register-tab"
                        aria-selected="false"
                      >
                        Sign up
                      </a>
                    </div>
                    <div
                      className="tab-content content-login"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="login-tab"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <form>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-login"
                          >
                            Log in
                          </button>
                        </form>
                        <div className="info-login">
                          <div className="forget-password">
                            <a href="#"> Forgot Password؟</a>
                          </div>
                          <div className="no-register">
                            or you can continue without Registration،{" "}
                            <a href="#">as a Guest.</a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="register-tab"
                        role="tabpanel"
                        aria-labelledby="register-tab"
                      >
                        <form>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-login"
                          >
                            Register
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Login  --> */}

        <script src="assets/js/jquery-3.4.1.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/slick/slick.min.js"></script>
        <script src="assets/datepicker/moment.min.js"></script>
        <script src="assets/datepicker/daterangepicker.js"></script>
        {/* <!-- <script src="assets/js/bootstrap-datepicker.min.js"></script> --> */}
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/custom.js"></script>
        <div></div>
      </div>
    );
  }
}
