import React, { Component } from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="header-top">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <div class="top-menu">
                    <ul>
                      <li>
                        <a href="./service.html">المغاسل</a>
                      </li>
                      <li>
                        <a href="./tools.html">المعدات</a>
                      </li>
                      <li>
                        <a href="./catalog.html">خدمة الفنادق</a>
                      </li>
                      <li>
                        <a href="./shop.html">المتجر</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="header-left">
                    <div class="header-home">
                      <ul class="data-header-left">
                        <li>
                          <a href="#">
                            <img src="assets/images/icon_phone.svg" /> التطبيق{" "}
                          </a>
                        </li>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <li>
                          <a href="./index-en.html"> English</a>
                        </li>
                      </ul>
                    </div>

                    <div class="header-login">
                      <ul>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <li>
                          <a href="./index-en.html"> English</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="header-main">
            <div class="container-fluid">
              <div class="row row-header-mobile">
                <div class="col-md-3 logo">
                  <a href="index.html">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div class="col-md-9 left-header">
                  <div class="main-menu-block mobile-header-nav">
                    <ul class="main-menu">
                      <li>
                        <a href="index.html">الرئيسية</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">خدماتنا</a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <a href="#">المغاسل</a>
                            <ul class="dropdown-menu">
                              <li>
                                <a href="./tools.html">المعدات</a>
                              </li>
                              <li>
                                <a href="#">خدمة الفنادق</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="./tools.html">المعدات</a>
                          </li>
                          <li>
                            <a href="#">خدمة الفنادق</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">العروض</a>
                      </li>
                      <li>
                        <a href="#">فروعنا</a>
                      </li>
                    </ul>
                  </div>

                  <div class="search">
                    <form>
                      <input
                        class="search-input"
                        type="search"
                        placeholder="البحث"
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
        </header>
      </div>
    );
  }
}

export default header;
