import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class bookingServiceHomeEn extends Component {
  render() {
    return (
      <div>
        <header>
          {/* <!-- header-top --> */}
          <div class="header-top">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <div class="top-menu">
                    <ul>
                      <li>
                        <NavLink to={"service-en"}> Laundry </NavLink>
                        {/* <a href="service-en.html">Laundry</a> */}
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
                        <a href="https://alrahden-store.com/">Store</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="header-left">
                    {/* <!-- header home --> */}
                    <div class="header-home">
                      <ul class="data-header-left">
                        <li>
                          <a href="#">
                            <img src="assets/images/icon_phone.svg" /> App{" "}
                          </a>
                        </li>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <NavLink to={"/"}> Arabic</NavLink>
                      </ul>
                    </div>

                    {/* <!-- header login --> */}
                    <div class="header-login">
                      <ul>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <NavLink to={"/"}> Arabic</NavLink>
                        <li>
                          <a href="cart-en" class="icon-cart">
                            <img src="assets/images/cart.svg" />
                            <span class="number-item-cart">99</span>
                          </a>
                        </li>
                        <li class="users-header">
                          <img
                            class="icon-user"
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

          {/* <!-- header-main --> */}

          <div class="header-main">
            <div class="container-fluid">
              <div class="row row-header-mobile">
                <div class="col-md-3 logo">
                  <a href="indexEn">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div class="col-md-9 left-header">
                  {/* <!-- main-menu-block --> */}
                  <div class="main-menu-block mobile-header-nav">
                    <ul class="main-menu">
                      <li>
                        <a href="indexEn">Home</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Our Services</a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <NavLink to={"service-en"}> Laundry </NavLink>
                            {/* <a href="#">Laundry</a> */}
                            <ul class="dropdown-menu">
                              <li>
                                <NavLink to={"tools-en"}> Tools </NavLink>
                                {/* <a href="#">Tools</a> */}
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
                            {/* <a href="#">Tools</a> */}
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
                        <a href="#">Offers</a>
                      </li>
                      <li>
                        <NavLink to={"booking-Service-Home-en"}>
                          {" "}
                          Book Home Pick-Up{" "}
                        </NavLink>
                        {/* <a href="booking-service-home-en.html">
                            Book Home Pick-Up
                          </a> */}
                      </li>
                      <li>
                        <a href="#">Branches</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#contactUsModal"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- search block --> */}
                  <div class="search">
                    <form>
                      <input
                        class="search-input"
                        type="search"
                        placeholder="Search"
                      />
                    </form>
                  </div>

                  <a
                    class="mobile-menu-toggle js-toggle-menu hamburger-menu"
                    href="#"
                  >
                    <span class="menu-item"></span>
                    <span class="menu-item"></span>
                    <span class="menu-item"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end header-main --> */}
        </header>
        {/* <!-- End Header --> */}

        <div class="main-web">
          {/* <!--  Main web  --> */}
          <div class="bg-img-inner">
            <div class="container block-data-top-header">
              <div class="data-top-header">
                <div class="breadcrumb">
                  <a href="#">Store</a>
                  <a href="#">Cart</a>
                  <span>User Information</span>
                </div>
                <div class="shear-btn">
                  <a href="#" data-toggle="modal" data-target="#shearModal">
                    <i class="fas fa-share-alt"></i>
                  </a>
                </div>
              </div>

              <h2>Home Service</h2>
            </div>
          </div>

          <div class="data-page">
            <div class="container">
              <div class="bg-inner-page booking-service-home">
                <div class="data-page with-img">
                  <div class="right-page right-page-img"> </div>
                  <div class="left-page">
                    <div class="form-booking">
                      <form>
                        <div class="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group">
                          <label>Mobile Number</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div class="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                          />
                        </div>
                        <div class="form-group">
                          <label for="inputState">Laundry Type</label>
                          <select class="custom-select form-control">
                            <option selected="">Laundry Type</option>
                            <option>Laundry Type 1</option>
                            <option>Laundry Type 2</option>
                            <option>Laundry Type 3</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-booking"
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
        {/* <!-- End  Main web  --> */}

        <footer>
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-md-4 footer-block">
                  <h2>Contact Us</h2>
                  <div class="data-contact">
                    <div class="address">
                      <img src="assets/images/address.svg" />
                      Riyadh - Kingdom Of Saudi Arabia
                    </div>
                    <div class="phone">
                      <img src="assets/images/support-footer.svg" /> 920006848
                    </div>
                    <div class="download-no">
                      <img src="assets/images/download-icon.svg" /> 12345
                    </div>
                    <div class="email">
                      <img src="assets/images/icon-mail.svg" />{" "}
                      info@alrahden.com
                    </div>
                  </div>

                  <div class="social-media">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="fab fa-snapchat-ghost"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 footer-block">
                  <h2>Related Links</h2>
                  <ul class="footer-menu">
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
                      <a href="https://alrahden-store.com/">Store</a>
                    </li>
                    <li>
                      <a href="#">Book house Service</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 footer-block">
                  <h2>Get Our Offers</h2>
                  <div class="maill-list">
                    <div class="note-mail">
                      be informed of our new offers, register now to receive all
                      updates
                    </div>
                    <form>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email  Or Phone Number"
                      />
                      <button type="submit" class="btn btn-primary">
                        Subcsribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
            <div class="copy-right">All rights reserved by Alrahden © 2020</div>
          </div>
        </footer>

        {/* <!-- Modal  Shear--> */}
        <div
          class="modal fade"
          id="shearModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog shear-modal" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="top-header-modal">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h3>Share this content Via:</h3>
                </div>

                <div class="data-shear">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i class="fas fa-print"></i> Print The Page
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i class="far fa-envelope"></i> Send Via Email
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i class="fab fa-facebook-f"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i class="fab fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
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
          class="modal fade "
          id="contactUsModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="container">
            <div class="modal-dialog  contactUsModal" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="bg-inner-page">
                    <div class="data-page with-img">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div class="right-page right-page-img">
                        <div class="data-contactus">
                          <p>
                            You can contact us during official working hours
                            from 8-12 am and from 4-8 pm{" "}
                          </p>
                          <div class="contactus-data">
                            <span class="phone">
                              <img src="assets/images/support.svg" />
                              920006848
                            </span>

                            <span class="email-w">
                              <img src="assets/images/email-w.svg" />
                              info@alrahden.com
                            </span>

                            <span class="download-w">
                              <img src="assets/images/download-w.svg" />
                              12345
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="left-page">
                        <div class="form-booking form-contactUs">
                          <form>
                            <div class="row">
                              <div class="col form-group">
                                <label>Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Name"
                                />
                              </div>
                              <div class="col form-group">
                                <label>Mobile Number</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Mobile Number"
                                />
                              </div>
                            </div>

                            <div class="row">
                              <div class="col form-group">
                                <label>Email</label>
                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Email"
                                />
                              </div>
                              <div class="col form-group">
                                <label>Title</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Title"
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <label for="inputState">Message</label>
                              <textarea
                                class="form-control"
                                rows="3"
                                placeholder="Your Message"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-primary btn-booking"
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
          class="modal fade login-modal"
          id="loginModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="block-login-modal">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>

                  <div class="logo-login">
                    <img src="assets/images/logo-v2.svg" />
                  </div>

                  <div class="data-login-block">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        data-toggle="tab"
                        href="#login-tab"
                        role="tab"
                        aria-controls="login-tab"
                        aria-selected="true"
                      >
                        Log in{" "}
                      </a>

                      <a
                        class="nav-item nav-link"
                        data-toggle="tab"
                        href="#register-tab"
                        role="tab"
                        aria-controls="register-tab"
                        aria-selected="false"
                      >
                        Sign up
                      </a>
                    </div>
                    <div class="tab-content content-login" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="login-tab"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <form>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary btn-login"
                          >
                            Log in
                          </button>
                        </form>
                        <div class="info-login">
                          <div class="forget-password">
                            <a href="#"> Forgot Password؟</a>
                          </div>
                          <div class="no-register">
                            or you can continue without Registration،{" "}
                            <a href="#">as a Guest.</a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="register-tab"
                        role="tabpanel"
                        aria-labelledby="register-tab"
                      >
                        <form>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Confirm Password"
                            />
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary btn-login"
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
      </div>
    );
  }
}
