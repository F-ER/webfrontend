import React, { Component } from "react";

export default class imagess extends Component {
  render() {
    return (
      <div className="main-web">
        <div className="main-slider" dir="ltr">
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

        <div>
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
        </div>
      </div>
    );
  }
}
