import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class indexEn extends Component {
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
          {/* <!--  Main web  -->
        <!-- main slider --> */}
          <div className="main-slider" dir="ltr">
            <div>
              <img src="assets/images/slider.jpg" />
            </div>
            <div>
              <img src="assets/images/slider2.jpg" />
            </div>
            <div>
              <img src="assets/images/slider2.jpg" />
            </div>
          </div>
          {/* <!-- End main slider -->

        <!-- service home --> */}
          <div
            className="service-home  wow zoomIn animated "
            data-wow-delay="0.3s"
          >
            <div
              className="items-service wow zoomIn animated "
              data-wow-delay="0.2s"
            >
              <a href="#">
                <img src="assets/new/imags/carpet_washing.jpg" />
                <div className="desc-item-service">
                  <div className="icon-service">
                    <img src="assets/images/icon-service.svg" />
                  </div>
                  <h2>Carpets Service</h2>
                </div>
              </a>
              <div className="overlay"></div>
              <div className="content">
                <h2>Carpets Service</h2>
              </div>
            </div>
            <div
              className="items-service wow zoomIn animated "
              data-wow-delay="0.4s"
            >
              <a href="#">
                <img src="assets/new/imags/ironing_shirts.jpg" />
                <div className="desc-item-service">
                  <div className="icon-service">
                    <img src="assets/images/service2.svg" />
                  </div>
                  <h2>Clothes Service</h2>
                </div>
              </a>
              <div className="overlay"></div>
              <div className="content">
                <h2>Clothes Service</h2>
              </div>
            </div>
            <div
              className="items-service wow zoomIn animated "
              data-wow-delay="0.6s"
            >
              <a href="#">
                <img src="assets/new/imags/washing_gowns.jpg" />
                <div className="desc-item-service">
                  <div className="icon-service">
                    <img src="assets/images/service3.svg" />
                  </div>
                  <h2>Abayas Service</h2>
                </div>
              </a>
              <div className="overlay"></div>
              <div className="content">
                <h2>Abayas Service</h2>
              </div>
            </div>
            <div
              className="items-service wow zoomIn animated "
              data-wow-delay="0.8s"
            >
              <a href="#">
                <img src="assets/new/imags/washing_towels.jpg" />
                <div className="desc-item-service">
                  <div className="icon-service">
                    <img src="assets/images/shop-icon.svg" />
                  </div>
                  <h2>Towels Service</h2>
                </div>
              </a>
              <div className="overlay"></div>
              <div className="content">
                <h2>Towels Service</h2>
              </div>
            </div>
          </div>
          {/* <!-- End service home -->


        <!-- Booking a home service --> */}
          <div className="booking-service">
            <div
              className="container wow  fadeInUp animated"
              data-wow-delay="0.3s"
            >
              <h2>Book house Service</h2>
              <p>
                Our large fleet equipped with high quality machines and trained
                crew at the highest levels provides the best levels of quality
                and service to our customers in their homes to wash all kinds of
                carpets, rugs, furniture and curtains
              </p>
              <form className="form-booking-home">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
                <button type="submit" className="btn btn-primary">
                  Book now
                </button>
              </form>
            </div>
          </div>
          {/* <!-- ِEnd Booking a home service -->


        <!-- Alrahden Now --> */}
          <div className="alrahden-now ">
            <div className="container">
              <h2>Alrahden Now</h2>
              <div className="data-alrahden">
                <div
                  className="item-now wow zoomIn animated "
                  data-wow-delay="0.2s"
                >
                  <img src="./assets/images/user-tie.svg" />
                  <div className="acount-number-now">1</div>
                  <div className="title-now"> In Quality</div>
                </div>

                <div
                  className="item-now wow zoomIn animated "
                  data-wow-delay="0.4s"
                >
                  <img src="./assets/images/emp.svg" />
                  <div className="acount-number-now">30</div>
                  <div className="title-now">years of experience</div>
                </div>

                <div
                  className="item-now wow zoomIn animated "
                  data-wow-delay="0.6s"
                >
                  <img src="./assets/images/icon_location.svg" />
                  <div className="acount-number-now">5</div>
                  <div className="title-now">Different Regions</div>
                </div>

                <div
                  className="item-now wow zoomIn animated "
                  data-wow-delay="0.8s"
                >
                  <img src="./assets/images/order-icon.svg" />
                  <div className="acount-number-now">5000</div>
                  <div className="title-now">Request And More</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Alrahden Now -->

        <!-- Customers Bolck --> */}
          <div className="customers">
            <div className="container">
              <h2>Our Clients</h2>
              <div
                className="customers-service wow zoomIn animated "
                data-wow-delay="0.8s"
                dir="ltr"
              >
                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom1.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom2.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom3.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom4.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom5.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom6.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom7.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom4.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom2.png" />
                  </a>
                </div>

                <div className="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom3.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Customers Bolck -->

        <!-- Mailing list right --> */}
          <div className="mailing-list-right  animatable bounceInRight">
            <div className="btn-colse-mail">X</div>
            <div className="desc-mail-right">Subcsribe to get our offers</div>
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
          {/* <!-- End Mailing list right -->


        <!-- footer --> */}
        </div>
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
      </div>
    );
  }
}
