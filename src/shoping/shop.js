import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class shop extends Component {
  render() {
    return (
      <div>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="assets/images/favicon.png" />
        <title>مغاسل الرهدن | Alrahden</title>
        <meta name="description" content="مغاسل الرهدن | Alrahden " />
        <meta property="og:title" content="مغاسل الرهدن | Alrahden" />
        <meta property="og:description" content="مغاسل الرهدن | Alrahden" />
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
        <link rel="stylesheet" href="assets/css/responsive.css" />

        <body>
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
                          <NavLink to={"shop"}> المتجر </NavLink>
                          {/* <a href="https://alrahden-store.com/">المتجر</a> */}
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
                            <a href="cart" className="icon-cart">
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

          <div className="main-web">
            {/* <!--  Main web  --> */}

            {/* <!-- service shop block --> */}
            <div className="service-shop-block">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.2s"
                  >
                    <img src="assets/images/connecting-icon.svg" />
                    <h3>إستلم من أي فرع</h3>
                    <p>أو توصيل مجاني عند الطلب بمبلغ أكثر من ٢٠٠ ريال</p>
                  </div>

                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/images/return.svg" />
                    <h3>إرجاع مجاني</h3>
                    <p>سياسة إرجاع في حال لم يعجبك المنتج</p>
                  </div>

                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.6s"
                  >
                    <img src="assets/images/security-icon.svg" />
                    <h3>دفع مباشر آمن</h3>
                    <p>نقبل جميع البطاقات الإتمانيه أو بطاقات مدى</p>
                  </div>

                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.8s"
                  >
                    <img src="assets/images/client-service.svg" />
                    <h3>مركز خدمة العملاء</h3>
                    <p>متواجدين على مدار الساعه</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End service shop block --> */}

            {/* <!-- Banner shop --> */}
            <div className="container">
              <div className="banner-shop">
                <img src="assets/images/banner.jpg" />
              </div>
            </div>
            {/* <!-- End Banner shop --> */}

            {/* <!-- main shop --> */}
            <div className="main-shop">
              <div className="container container-main-shop">
                {/* <!-- content-shop --> */}
                <div className="content-shop">
                  {/* <!-- product-dept-shop --> */}
                  <div className="product-dept-shop">
                    <h2>الأقسام</h2>
                    <div className="row">
                      <div className="col-md-6 item-product-dept">
                        <NavLink to={"details-products"}>
                          <img src="assets/images/product2.jpg" />
                          <h3>صوابين عادية</h3>
                        </NavLink>
                      </div>

                      <div className="col-md-6 item-product-dept">
                        <NavLink to={"details-products-auto"}>
                          <img src="assets/images/product1.jpg" />
                          <h3>صوابين اوتوماتيك</h3>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End product-dept-shop --> */}
                  <div className="center-banner-shop">
                    <img src="assets/images/main-banner-shop.jpg" />
                    <div className="data-banner">
                      <h1>صابون الرهدن</h1>
                      <p>رجعها جديدة </p>
                      <a href="#">تسوق الآن</a>
                    </div>
                  </div>

                  {/* <!-- banner bottom shop --> */}
                  <div className="banner-bottom-shop">
                    <div className="row">
                      {/* <!-- banner bottom offer right --> */}
                      <div className="col-md-6 banner-bottom-offer-right">
                        <div className="offer-banner-right">
                          <img src="assets/images/banner-bottom-right.jpg" />
                          <div className="data-banner-right">
                            <img src="assets/images/deal.svg" />
                            <h2>صفقة اليوم</h2>
                            <p>* شحن مجاني</p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- banner bottom offer left --> */}
                      <div className="col-md-6 banner-bottom-offer-left">
                        <div className="offer-banner-left">
                          <img src="assets/images/banner-bottom-2.jpg" />
                          <div className="offer-block-price">
                            <div className="price-offers"> 79 ر.س</div>
                            <div className="word-offer">فقط </div>
                          </div>
                          <div className="data-bootm-banner">
                            <h2>صابون الرهدن الحجم العائلي</h2>
                            <a href="#">تسوق الآن</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End content-shop --> */}
              </div>
            </div>
            {/* <!-- End main shop --> */}

            {/* <!-- service shop block --> */}
            <div className="service-shop-block service-footer-shop">
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.2s"
                  >
                    <img src="assets/images/connecting-icon.svg" />
                    <h3>إستلم من أي فرع</h3>
                    <p>أو توصيل مجاني عند الطلب بمبلغ أكثر من ٢٠٠ ريال</p>
                  </div>

                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/images/return.svg" />
                    <h3>إرجاع مجاني</h3>
                    <p>سياسة إرجاع في حال لم يعجبك المنتج</p>
                  </div>

                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.6s"
                  >
                    <img src="assets/images/security-icon.svg" />
                    <h3>دفع مباشر آمن</h3>
                    <p>نقبل جميع البطاقات الإتمانيه أو بطاقات مدى</p>
                  </div>

                  <div
                    className="col-md-3 items-service-shop wow zoomIn animated "
                    data-wow-delay="0.8s"
                  >
                    <img src="assets/images/client-service.svg" />
                    <h3>مركز خدمة العملاء</h3>
                    <p>متواجدين على مدار الساعه</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End service shop block --> */}
          </div>
          {/* <!-- End  Main web  --> */}
          {/* <!-- Footer  --> */}
          <footer>
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 footer-block">
                    <h2>تواصل معنا</h2>
                    <div className="data-contact">
                      <div className="address">
                        <img src="assets/images/address.svg" /> الرياض - المملكة
                        العربية السعودية
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
                    <h2>روابط ذات صلة</h2>
                    <ul className="footer-menu">
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
                  <div className="col-md-4 footer-block">
                    <h2>إحصل على عروضنا</h2>
                    <div className="maill-list">
                      <div className="note-mail">
                        كن على إطلاع دائم بعروضنا، سجل الان ليصلك ككل جديد.
                      </div>
                      <form>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="البريد الإلكتروني أو رقم الجوال"
                        />
                        <button type="submit" className="btn btn-primary">
                          إشترك
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
                  <a href="#">سياسة الخصوصية</a>
                </li>
                <li>
                  <a href="#">البريد الإلكتروني</a>
                </li>
              </ul>
              <div className="copy-right">كافة الحقوق محفوظة للرهدن © 2019</div>
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
                    <h3>شارك هذا المحتوى عبر:</h3>
                  </div>

                  <div className="data-shear">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fas fa-print"></i> طباعة الصفحة
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="far fa-envelope"></i> إرسال عبر البريد
                          الإلكتروني
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i> فيس بوك
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i> تويتر
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-whatsapp"></i> واتس آب
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
                              يمكنك التواصل معنا خلال أوقات العمل الرسمية من 8 –
                              12 صباحاً ومن 4 – 8 مساءً
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
                                  <label>الإسم</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="الإسم"
                                  />
                                </div>
                                <div className="col form-group">
                                  <label>رقم الجوال</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="رقم الجوال"
                                  />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col form-group">
                                  <label>البريد الإلكتروني</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="البريد الإلكتروني"
                                  />
                                </div>
                                <div className="col form-group">
                                  <label>عنوان الرسالة</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="عنوان الرسالة"
                                  />
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="inputState">الرسالة</label>
                                <textarea
                                  className="form-control"
                                  rows="3"
                                  placeholder="رسالتك"
                                ></textarea>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary btn-booking"
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
                          تسجيل الدخول{" "}
                        </a>

                        <a
                          className="nav-item nav-link"
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
                                placeholder="البريد الإلكتروني"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="كلمة المرور"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-login"
                            >
                              تسجيل الدخول
                            </button>
                          </form>
                          <div className="info-login">
                            <div className="forget-password">
                              <a href="#"> نسيت كلمة المرور؟</a>
                            </div>
                            <div className="no-register">
                              أو يمكنك الإكمال بدون تسجيل، <a href="#">كضيف.</a>
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
                                placeholder="البريد الإلكتروني"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="كلمة المرور"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="إعادة كلمة المرور"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-login"
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
          <script>new WOW().init();</script>
        </body>
      </div>
    );
  }
}
