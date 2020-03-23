import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class header extends Component {
  render() {
    console.log("adadad");
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
                        <NavLink to={"service"}> المغاسل </NavLink>
                      </li>
                      <li>
                        <NavLink to={"tools"}> المعدات </NavLink>
                      </li>
                      <li>
                        <NavLink to={"catalog"}> خدمة الفنادق </NavLink>
                      </li>
                      <li>
                        <a href="https://alrahden-store.com/">المتجر</a>
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
                            <img src="assets/images/icon_phone.svg" /> التطبيق
                          </a>
                        </li>
                        <li>
                          <img src="assets/images/support.svg" />
                          920006848
                        </li>
                        <li>
                          <NavLink to={"IndexEn"}> English</NavLink>
                          {/* <a href="./service-en.html"> English</a> */}
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
                          <NavLink to={"IndexEn"}> English</NavLink>
                          {/* <a href="./service-en.html"> English</a> */}
                        </li>
                        <li>
                          <a href="cart.html" class="icon-cart">
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
                            تسجيل
                          </a>
                          <span>/</span>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#loginModal"
                          >
                            تسجيل الدخول
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

      <!-- header-main --> */}
          <div class="header-main">
            <div class="container-fluid">
              <div class="row row-header-mobile">
                <div class="col-md-3 logo">
                  <a href="/">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div class="col-md-9 left-header">
                  {/* <!-- main-menu-block --> */}
                  <div class="main-menu-block mobile-header-nav">
                    <ul class="main-menu">
                      <li>
                        <NavLink to={"/"}>الرئيسية</NavLink>
                      </li>
                      <li class="dropdown">
                        <a href="#">خدماتنا</a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <NavLink to={"service"}> المغاسل </NavLink>
                            <ul class="dropdown-menu">
                              <li>
                                <NavLink to={"tools"}> المعدات </NavLink>
                              </li>
                              <li>
                                <NavLink to={"catalog"}> خدمة الفنادق </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to={"tools"}> المعدات </NavLink>
                          </li>
                          <li>
                            <NavLink to={"catalog"}> خدمة الفنادق </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">العروض</a>
                      </li>
                      <li>
                        <NavLink to={"booking-service-home"}>
                          {" "}
                          حجز خدمة المنازل{" "}
                        </NavLink>
                        {/* <a href="booking-service-home.html">حجز خدمة المنازل</a> */}
                      </li>
                      <li>
                        <a href="#">فروعنا</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#contactUsModal"
                        >
                          تواصل معنا
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
          {/* <!-- end header-main --> */}
        </header>
      </div>
    );
  }
}

export default header;
