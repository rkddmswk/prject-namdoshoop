import PcMainBanner from "../../assets/images/pc/temp_mainbanner_01.jpg";
import McMainBanner from "../../assets/images/m/temp_mainbanner_01.jpg";
import PcBandMainBanner from "../../assets/images/pc/temp_mainbanner_02.jpg";
import MBandMainBanner from "../../assets/images/m/temp_mainbanner_02.jpg";
import products from "../../components/specific/product/Product";
import ProductItem from "../../components/specific/product/ProductItem";
import bn from "../../assets/images/pc/temp_ss_01.jpg";
import exhibition from "../../components/common/json/exhibition";

// import Swiper
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import partner from "../../components/common/json/partner";

const Main = () => {
  return (
    <main className="main_content">
      {/* 메인배너 */}
      <section className="main_banner">
        <h2 className="hide">메인배너</h2>
        <div className="banner_slider swiper">
          <Swiper
            className="swiper-wrapper"
            modules={[Navigation, Pagination, EffectFade]}
            effect="fade"
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction",
            }}
            navigation={{
              nextEl: ".btn_next",
              prevEl: ".btn_prev",
            }}
          >
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <span
                  className="pc"
                  style={{
                    backgroundImage: `url(${PcMainBanner})`,
                  }}
                ></span>
                <span
                  className="m"
                  style={{
                    backgroundImage: `url(${McMainBanner})`,
                  }}
                ></span>
                <span className="hide">대체텍스트</span>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <span
                  className="pc"
                  style={{ backgroundImage: `url(${PcMainBanner})` }}
                ></span>
                <span
                  className="m"
                  style={{ backgroundImage: `url(${McMainBanner})` }}
                ></span>
                <span className="hide">대체텍스트</span>
              </a>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <a href="#">
                <span
                  className="pc"
                  style={{ backgroundImage: `url(${PcMainBanner})` }}
                ></span>
                <span
                  className="m"
                  style={{ backgroundImage: `url(${McMainBanner})` }}
                ></span>
                <span className="hide">대체텍스트</span>
              </a>
            </SwiperSlide>
            <button type="button" className="btn_prev">
              <span className="hide">이전</span>
            </button>
            <button type="button" className="btn_next">
              <span className="hide">다음</span>
            </button>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>

      <section className="band_banner">
        <h2 className="hide">프로모션</h2>
        <p className="banner">
          <a href="#">
            <span
              className="pc"
              style={{ backgroundImage: `url(${PcBandMainBanner})` }}
            ></span>
            <span
              className="m"
              style={{ backgroundImage: `url(${MBandMainBanner})` }}
            ></span>
            <span className="hide">
              매주 수요일 놓치지 마세요! 특가로 만나보는 수요장터
            </span>
          </a>
        </p>
      </section>
      <section className="prd_section">
        <h2 className="title">main_Body_타이틀</h2>
        <div className="prd_list">
          <ul className="list">
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </ul>
        </div>
        <a href="#" className="btn_more">
          <span>전체보기</span>
        </a>
      </section>

      <section className="promo_section">
        <h2 className="title">지금 진행중인 기획전</h2>
        <div className="tab" id="promo1">
          <button className="btn_left" type="button">
            <span className="hide">이전</span>
          </button>
          <div className="swiper">
            <Swiper
              className="swiper-wrapper"
              modules={[Navigation]}
              freeMode={true}
              loop={false}
              slidesPerView={"auto"}
              spaceBetween={0}
              navigation={{
                nextEl: "#promo1 .btn_right",
                prevEl: "#promo1 .btn_left",
              }}
              breakpoints={{
                1280: {
                  spaceBetween: 44,
                },
              }}
            >
              {exhibition.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <button
                    type="button"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <span className="hide">{item.text}</span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="btn_right" type="button">
            <span className="hide">다음</span>
          </button>
        </div>
      </section>

      <section className="pv">
        <div className="inner">
          <h2 className="title">
            <b>믿고 먹을 수 있는</b> 남다른 남도 밥상
          </h2>
          <p className="text">남도장터를 더욱 생생하게 만나보세요</p>
          <iframe
            width="626"
            height="326"
            src="https://www.youtube.com/embed/dpT6JNbpC3E?si=il1JRsiTFlJV97uZ"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
          {/* <a href="#" className="btn_more">
            <span>더 많은 영상 보기</span>
          </a> */}
        </div>
      </section>

      <section className="partner">
        <div className="inner">
          <h2 className="hide">파트너</h2>
          <button className="btn_left" type="button">
            <span className="hide">이전</span>
          </button>
          <Swiper
            className="swiper"
            modules={[Navigation]}
            slidesPerView="auto"
            loop={true}
            navigation={{
              nextEl: ".partner .btn_right",
              prevEl: ".partner .btn_left",
            }}
          >
            {partner.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <a href="#" target="_blank">
                  <img src={item.img} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="btn_right" type="button">
            <span className="hide">다음</span>
          </button>
        </div>
      </section>

      <div className="sc">
        <div className="bn">
          <a href="#">
            <img src={bn} width="70" height="273" alt="" />
          </a>
          <a href="#" className="btn_more">
            <span>더보기</span>
          </a>
        </div>
        <ul className="util">
          <li>
            <a href="#" className="btn_chatbot">
              <span className="hide">ChatBot</span>
            </a>
          </li>
          <li>
            <a href="#" className="btn_top">
              <span className="hide">TOP</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
