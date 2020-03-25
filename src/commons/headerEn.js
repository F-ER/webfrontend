import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class headerEn extends Component {
  render() {
    return (
      <div>
        <header>
          {/* <!-- header-top --> */}
          <div className="header-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="top-menu">
                    <ul>
                      <li>
                        <NavLink to={"service-en"}> Laundries</NavLink>
                        {/* <a href="./service-en.html">Laundries</a> */}
                      </li>
                      <li>
                        <a href="./tools-en.html">Tools</a>
                      </li>
                      <li>
                        <a href="./catalog-en.html">Hotel Service</a>
                      </li>
                      <li>
                        <a href="./shop-en.html">Store</a>
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
                          <NavLink to={"/"}> Arabic</NavLink>
                          {/* <a href="./index"> Arabic</a> */}
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
                          <NavLink to={"/"}> Arabic</NavLink>
                          {/* <a href="./index.html"> Arabic</a> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ِend header-top -->

        <!-- header-main --> */}
          <div className="header-main">
            <div className="container-fluid">
              <div className="row row-header-mobile">
                <div className="col-md-3 logo">
                  <a href="index-en.html">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div className="col-md-9 left-header">
                  {/* <!-- main-menu-block --> */}
                  <div className="main-menu-block mobile-header-nav">
                    <ul className="main-menu">
                      <li>
                        <a href="index-en.html">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Our Services</a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <a href="#">Laundries</a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="./tools-en.html">Tools</a>
                              </li>
                              <li>
                                <a href="#">Hotel Services</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="./tools-en.html">Tools</a>
                          </li>
                          <li>
                            <a href="#">Hotel services</a>
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
      </div>
    );
  }
}
