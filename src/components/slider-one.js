import React from 'react';
import { Link, withPrefix } from 'gatsby';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, EffectFade } from 'swiper';
import { Col, Container, Row } from 'react-bootstrap';
import { SliderOneData } from '@/data';
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '#main-slider-next',
      prevEl: '#main-slider-prev',
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(
          ({ image, subTitle, subTitle2, title, button }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                // style={{
                //   backgroundImage: "url('@/images/slider/1_1.jpg')",
                // }}
                style={{ backgroundImage: `url(${withPrefix(image)})` }} //`url(${withPrefix('/images/image.png')})`
              ></div>
              <Container>
                <Row>
                  <Col lg={12} className="text-center">
                    <p className="main-slider__subtext">{subTitle}</p>
                    <h3 className="main-slider__title">{title}</h3>
                    {/* <Link to={button.url} className={`common_btn`}> */}
                    <p
                      className="main-slider__subtext2"
                      style={{ marginBottom: 50 }}
                    >
                      {subTitle2}
                    </p>
                    {button !== undefined ? (
                      <Link
                        to={button.url}
                        style={{ opacity: 0.5 }}
                        className={`common_btn`}
                      >
                        <span>{button.label}</span>
                      </Link>
                    ) : (
                      <div style={{ height: 80 }}></div>
                    )}
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          ),
        )}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
