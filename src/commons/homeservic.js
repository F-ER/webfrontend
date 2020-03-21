import React, { Component } from "react";

export default class homeservic extends Component {
  render() {
    return (
      <div>
        <div class="booking-service">
          <div class="container wow  fadeInUp animated" data-wow-delay="0.3s">
            <h2>حجز خدمة المنزل</h2>
            <p>
              اسطولنا الكبير والمجهز بمكائن عالية الجودة وطاقم مدرب على أعلى
              المستويات يقدم أفضل درجات الجودة والخدمة لعملائنا في منازلهم لغسيل
              جميع انواع السجاد والموكيت والأثاث والستائر
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

        <div class="alrahden-now ">
          <div class="container">
            <h2>الرهدن الآن</h2>
            <div class="data-alrahden">
              <div class="item-now wow zoomIn animated " data-wow-delay="0.2s">
                <img src="./assets/images/user-tie.svg" />
                <div class="acount-number-now">1</div>
                <div class="title-now"> في الجودة</div>
              </div>

              <div class="item-now wow zoomIn animated " data-wow-delay="0.4s">
                <img src="./assets/images/emp.svg" />
                <div class="acount-number-now">30</div>
                <div class="title-now">عام من الخبرة</div>
              </div>

              <div class="item-now wow zoomIn animated " data-wow-delay="0.6s">
                <img src="./assets/images/icon_location.svg" />
                <div class="acount-number-now">5</div>
                <div class="title-now">مناطق مختلفة</div>
              </div>

              <div class="item-now wow zoomIn animated " data-wow-delay="0.8s">
                <img src="./assets/images/order-icon.svg" />
                <div class="acount-number-now">5000</div>
                <div class="title-now">أكثر من طلب</div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    );
  }
}
