import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class headerEn extends Component {
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
                        <li>
                          <NavLink to={"/"}> Arabic</NavLink>
                          {/* <a href="./index"> Arabic</a> */}
                        </li>
                      </ul>
                    </div>

                    {/* <!-- header login --> */}
                    <div class="header-login">
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
          <div class="header-main">
            <div class="container-fluid">
              <div class="row row-header-mobile">
                <div class="col-md-3 logo">
                  <a href="index-en.html">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div class="col-md-9 left-header">
                  {/* <!-- main-menu-block --> */}
                  <div class="main-menu-block mobile-header-nav">
                    <ul class="main-menu">
                      <li>
                        <a href="index-en.html">Home</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Our Services</a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <a href="#">Laundries</a>
                            <ul class="dropdown-menu">
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
      </div>
    );
  }
}
