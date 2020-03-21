import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
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
                        <img src="assets/images/address.svg" /> الرياض - المملكة
                        العربية السعودية
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
                              يمكنك التواصل معنا خلال أوقات العمل الرسمية من 8 –
                              12 صباحاً ومن 4 – 8 مساءً
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
                              أو يمكنك الإكمال بدون تسجيل، <a href="#">كضيف.</a>
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
    );
  }
}
