import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class header extends Component {
  render() {
    console.log("adadad");
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
                <div className="col-md-6">
                  <div className="header-left">
                    {/* <!-- header home --> */}
                    <div className="header-home">
                      <ul className="data-header-left">
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
                    <div className="header-login">
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
                          <a href="cart.html" className="icon-cart">
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
          <div className="header-main">
            <div className="container-fluid">
              <div className="row row-header-mobile">
                <div className="col-md-3 logo">
                  <a href="/">
                    <img src="assets/images/Logo.svg" />
                  </a>
                </div>
                <div className="col-md-9 left-header">
                  {/* <!-- main-menu-block --> */}
                  <div className="main-menu-block mobile-header-nav">
                    <ul className="main-menu">
                      <li>
                        <NavLink to={"/"}>الرئيسية</NavLink>
                      </li>
                      <li className="dropdown">
                        <a href="#">خدماتنا</a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <NavLink to={"service"}> المغاسل </NavLink>
                            <ul className="dropdown-menu">
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
                  <div className="search">
                    <form>
                      <input
                        className="search-input"
                        type="search"
                        placeholder="البحث"
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
      </div>
    );
  }
}

export default header;
