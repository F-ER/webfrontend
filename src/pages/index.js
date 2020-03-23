import React, { Component } from "react";

import { NavLink } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div>
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
                            <a href="cart" class="icon-cart">
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
                                  <NavLink to={"catalog"}>
                                    {" "}
                                    خدمة الفنادق{" "}
                                  </NavLink>
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

        <div class="main-web">
          {/* <!--  Main web  -->
       <!-- main slider --> */}
          <div class="main-slider" dir="ltr">
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
          <div class="service-home  wow zoomIn animated " data-wow-delay="0.3s">
            <div
              class="items-service wow zoomIn animated "
              data-wow-delay="0.2s"
            >
              <a href="#">
                <img src="assets/new/imags/carpet_washing.jpg" />
                <div class="desc-item-service">
                  <div class="icon-service">
                    <img src="assets/images/icon-service.svg" />
                  </div>
                  <h2>خدمات السجاد</h2>
                </div>
              </a>
              <div class="overlay"></div>
              <div class="content">
                <h2>خدمات السجاد</h2>
              </div>
            </div>
            <div
              class="items-service wow zoomIn animated "
              data-wow-delay="0.4s"
            >
              <a href="#">
                <img src="assets/new/imags/ironing_shirts.jpg" />
                <div class="desc-item-service">
                  <div class="icon-service">
                    <img src="assets/images/service2.svg" />
                  </div>
                  <h2>خدمات الملابس</h2>
                </div>
              </a>
              <div class="overlay"></div>
              <div class="content">
                <h2>خدمات الملابس</h2>
              </div>
            </div>
            <div
              class="items-service wow zoomIn animated "
              data-wow-delay="0.6s"
            >
              <a href="#">
                <img src="assets/new/imags/washing_gowns.jpg" />
                <div class="desc-item-service">
                  <div class="icon-service">
                    <img src="assets/images/service3.svg" />
                  </div>
                  <h2>خدمات العبايات</h2>
                </div>
              </a>
              <div class="overlay"></div>
              <div class="content">
                <h2>خدمات العبايات</h2>
              </div>
            </div>
            <div
              class="items-service wow zoomIn animated "
              data-wow-delay="0.8s"
            >
              <a href="#">
                <img src="assets/new/imags/washing_towels.jpg" />
                <div class="desc-item-service">
                  <div class="icon-service">
                    <img src="assets/images/shop-icon.svg" />
                  </div>
                  <h2>خدمات المناشف</h2>
                </div>
              </a>
              <div class="overlay"></div>
              <div class="content">
                <h2>خدمات المناشف</h2>
              </div>
            </div>
          </div>
          {/* <!-- End service home -->


       <!-- Booking a home service --> */}
          <div class="booking-service">
            <div class="container wow  fadeInUp animated" data-wow-delay="0.3s">
              <h2>حجز خدمة المنزل</h2>
              <p>
                اسطولنا الكبير والمجهز بمكائن عالية الجودة وطاقم مدرب على أعلى
                المستويات يقدم أفضل درجات الجودة والخدمة لعملائنا في منازلهم
                لغسيل جميع انواع السجاد والموكيت والأثاث والستائر
              </p>
              <form class="form-booking-home">
                <input type="text" class="form-control" placeholder="الإسم" />
                <input
                  type="text"
                  class="form-control"
                  placeholder="رقم الجوال"
                />
                <input type="text" class="form-control" placeholder="العنوان" />
                <button type="submit" class="btn btn-primary">
                  احجز الان
                </button>
              </form>
            </div>
          </div>
          {/* <!-- ِEnd Booking a home service -->


       <!-- Alrahden Now --> */}
          <div class="alrahden-now ">
            <div class="container">
              <h2>الرهدن الآن</h2>
              <div class="data-alrahden">
                <div
                  class="item-now wow zoomIn animated "
                  data-wow-delay="0.2s"
                >
                  <img src="./assets/images/user-tie.svg" />
                  <div class="acount-number-now">1</div>
                  <div class="title-now"> في الجودة</div>
                </div>

                <div
                  class="item-now wow zoomIn animated "
                  data-wow-delay="0.4s"
                >
                  <img src="./assets/images/emp.svg" />
                  <div class="acount-number-now">30</div>
                  <div class="title-now">عام من الخبرة</div>
                </div>

                <div
                  class="item-now wow zoomIn animated "
                  data-wow-delay="0.6s"
                >
                  <img src="./assets/images/icon_location.svg" />
                  <div class="acount-number-now">5</div>
                  <div class="title-now">مناطق مختلفة</div>
                </div>

                <div
                  class="item-now wow zoomIn animated "
                  data-wow-delay="0.8s"
                >
                  <img src="./assets/images/order-icon.svg" />
                  <div class="acount-number-now">5000</div>
                  <div class="title-now">أكثر من طلب</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Alrahden Now -->

       <!-- Customers Bolck --> */}
          <div class="customers">
            <div class="container">
              <h2>من عملائنا</h2>
              <div
                class="customers-service wow zoomIn animated "
                data-wow-delay="0.8s"
                dir="ltr"
              >
                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom1.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom2.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom3.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom4.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom5.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom6.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom7.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom4.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom2.png" />
                  </a>
                </div>

                <div class="item-custom">
                  <a href="#" target="_blank">
                    <img src="./assets/images/coustom3.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Customers Bolck -->

       <!-- Mailing list right --> */}
          <div class="mailing-list-right  animatable bounceInRight">
            <div class="btn-colse-mail">X</div>
            <div class="desc-mail-right">إشترك معنا لتصلك عروضنا</div>
            <form>
              <input
                type="email"
                class="form-control"
                placeholder="البريد الإلكتروني أو رقم الجوال"
              />
              <button type="submit" class="btn btn-primary">
                إشترك
              </button>
            </form>
          </div>
          {/* <!-- End Mailing list right -->


       <!-- footer --> */}
          <div>
            <div>
              <footer>
                <div class="footer-top">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4 footer-block">
                        <h2>تواصل معنا</h2>
                        <div class="data-contact">
                          <div class="address">
                            <img src="assets/images/address.svg" /> الرياض -
                            المملكة العربية السعودية
                          </div>
                          <div class="phone">
                            <img src="assets/images/support-footer.svg" />{" "}
                            920006848
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
                        <h2>روابط ذات صلة</h2>
                        <ul class="footer-menu">
                          <li>
                            <a href="#">خدمات المغاسل</a>
                          </li>
                          <li>
                            <a href="#">خدمات المعدات</a>
                          </li>
                          <li>
                            <a href="#">خدمات الفنادق</a>
                          </li>
                          <li>
                            <a href="#">المتجر</a>
                          </li>
                          <li>
                            <a href="#">حجز خدمة المنزل</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4 footer-block">
                        <h2>إحصل على عروضنا</h2>
                        <div class="maill-list">
                          <div class="note-mail">
                            كن على إطلاع دائم بعروضنا، سجل الان ليصلك ككل جديد.
                          </div>
                          <form>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="البريد الإلكتروني أو رقم الجوال"
                            />
                            <button type="submit" class="btn btn-primary">
                              إشترك
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
                      <a href="#">سياسة الخصوصية</a>
                    </li>
                    <li>
                      <a href="#">البريد الإلكتروني</a>
                    </li>
                  </ul>
                  <div class="copy-right">كافة الحقوق محفوظة للرهدن © 2019</div>
                </div>
              </footer>

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
                        <h3>شارك هذا المحتوى عبر:</h3>
                      </div>

                      <div class="data-shear">
                        <ul>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fas fa-print"></i> طباعة الصفحة
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="far fa-envelope"></i> إرسال عبر البريد
                              الإلكتروني
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-facebook-f"></i> فيس بوك
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-twitter"></i> تويتر
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i class="fab fa-whatsapp"></i> واتس آب
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                                  يمكنك التواصل معنا خلال أوقات العمل الرسمية من
                                  8 – 12 صباحاً ومن 4 – 8 مساءً
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
                                      <label>الإسم</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="الإسم"
                                      />
                                    </div>
                                    <div class="col form-group">
                                      <label>رقم الجوال</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="رقم الجوال"
                                      />
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col form-group">
                                      <label>البريد الإلكتروني</label>
                                      <input
                                        type="email"
                                        class="form-control"
                                        placeholder="البريد الإلكتروني"
                                      />
                                    </div>
                                    <div class="col form-group">
                                      <label>عنوان الرسالة</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="عنوان الرسالة"
                                      />
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <label for="inputState">الرسالة</label>
                                    <textarea
                                      class="form-control"
                                      rows="3"
                                      placeholder="رسالتك"
                                    ></textarea>
                                  </div>
                                  <button
                                    type="submit"
                                    class="btn btn-primary btn-booking"
                                  >
                                    إرسال
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
                              تسجيل الدخول{" "}
                            </a>

                            <a
                              class="nav-item nav-link"
                              data-toggle="tab"
                              href="#register-tab"
                              role="tab"
                              aria-controls="register-tab"
                              aria-selected="false"
                            >
                              تسجيل جديد
                            </a>
                          </div>
                          <div
                            class="tab-content content-login"
                            id="nav-tabContent"
                          >
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
                                    placeholder="البريد الإلكتروني"
                                  />
                                </div>
                                <div class="form-group">
                                  <input
                                    type="password"
                                    class="form-control"
                                    placeholder="كلمة المرور"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  class="btn btn-primary btn-login"
                                >
                                  تسجيل الدخول
                                </button>
                              </form>
                              <div class="info-login">
                                <div class="forget-password">
                                  <a href="#"> نسيت كلمة المرور؟</a>
                                </div>
                                <div class="no-register">
                                  أو يمكنك الإكمال بدون تسجيل،{" "}
                                  <a href="#">كضيف.</a>
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
                                    placeholder="البريد الإلكتروني"
                                  />
                                </div>
                                <div class="form-group">
                                  <input
                                    type="password"
                                    class="form-control"
                                    placeholder="كلمة المرور"
                                  />
                                </div>
                                <div class="form-group">
                                  <input
                                    type="password"
                                    class="form-control"
                                    placeholder="إعادة كلمة المرور"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  class="btn btn-primary btn-login"
                                >
                                  تسجيل
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
          </div>
        </div>
      </div>
    );
  }
}
