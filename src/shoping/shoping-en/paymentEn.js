import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class paymentEn extends Component {
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
              <span>Customer Information</span>
            </div>

            <div className="row">
              <div className="col-md-4 right-profile-block">
                {/* <!-- Right Menu Profile --> */}
                <div className="right-profile">
                  <div className="menu-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/images/profile.svg" /> Personal
                          Information
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/icons-requests.svg" /> My
                          Orders
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/shipping.svg" /> Shipping
                          Address
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/payment.svg" /> Payment Method
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/language.svg" /> Language
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/images/support-icon.svg" /> Customers
                          Service
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/privacy.svg" /> Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/discuss-issue.svg" /> Common
                          Question
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/images/check-form.svg" /> Terms and
                          Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Right Menu Profile --> */}
              </div>

              <div className="col-md-8 left-profile-block">
                <div className="left-profile">
                  {/* <!-- Data Personal --> */}
                  <div className="block-form with-btn-update blocks-addrss">
                    <div className="header-bloks">
                      <h4>Payment Method</h4>
                      <div>
                        <a href="#" className="add-address">
                          <img src="assets/images/plus.svg" /> Add a Card
                        </a>
                        <button type="submit" className="btn-delete ">
                          <img src="assets/images/delete.svg" />
                        </button>
                      </div>
                    </div>

                    <div className="item-order-details-block block-payment">
                      {/* <!-- Item --> */}
                      <div className="item-address item-block-payment">
                        <div className="col-md-1  checkbox-input checkboc-addrsss">
                          <input
                            className="checkbox-item"
                            type="checkbox"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-11 data-address-block">
                          <div className="data-visa-number">
                            <img src="assets/images/visa.svg" />
                            <div className="numner-visa">**************123</div>
                          </div>
                          <div className="btn-update-address">
                            <a href="#">Edit</a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Item --> */}
                      <div className="item-address item-block-payment">
                        <div className="col-md-1  checkbox-input checkboc-addrsss">
                          <input
                            className="checkbox-item"
                            type="checkbox"
                            value="option2"
                          />
                        </div>
                        <div className="col-md-11 data-address-block">
                          <div className="data-visa-number">
                            <img src="assets/images/visa.svg" />
                            <div className="numner-visa">**************123</div>
                          </div>
                          <div className="btn-update-address">
                            <a href="#">Edit</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-primary btn-send" type="submit">
                      Save
                    </button>
                  </div>
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

        {/* <!-- Modal  Shear--> */}
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
        {/* <!-- ِEnd Modal Shear --> */}

        {/* <!-- Contact Us Modal --> */}
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
        {/* <!-- End Contact Us Modal --> */}

        {/* <!-- Modal Login  --> */}
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
        {/* <script>new WOW().init();</script> */}
      </div>
    );
  }
}
