import PcMainBanner from "../../assets/images/pc/temp_mainbanner_01.jpg";
import McMainBanner from "../../assets/images/m/temp_mainbanner_01.jpg";
import PcBandMainBanner from "../../assets/images/pc/temp_mainbanner_02.jpg";
import MBandMainBanner from "../../assets/images/m/temp_mainbanner_02.jpg";
import swiper2 from "../../assets/images/m/tab_02_off.png";
import tab02 from "../../assets/images/m/tab_02_on.png";

const Main = () => {
  return (
    <div
      className="body_container"
      style={{
        width: "100%",
        height: "auto",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <main className="main_content">
        {/* <section className="main_banner">
          <h2 className="hide">메인배너</h2>
        </section> */}
        <section className="main_banner">
          <h2 className="hide">메인배너</h2>
          <div className="banner_slider swiper" style={{ overflow: "hidden" }}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
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
              </div>
            </div>
            <button type="button" className="btn_prev">
              <span className="hide">이전</span>
            </button>
            <button type="button" className="btn_next">
              <span className="hide">다음</span>
            </button>
            {/* <div className="swiper-pagination"></div> */}
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
              <li className="item hover">
                <div className="prd_img">
                  <span className="tag recom">
                    <span className="hide">추천</span>
                  </span>
                  <span className="badge eco">
                    <span className="hide">친환경</span>
                  </span>
                  <span className="coupon">
                    <span className="point">쿠폰</span>
                    <span className="normal">바우처</span>
                    <span className="normal">농할쿠폰</span>
                  </span>

                  <a href="#">
                    <img
                      src="../images/pc/temp_thumb_01.jpg"
                      width="270"
                      height="300"
                      alt=""
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="prd_box flex">
                    <div className="prd_place">
                      남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산
                    </div>
                    <div className="prd_order_type">
                      <span className="ico_free">무료배송</span>
                      <span className="ico_bulk">대량주문</span>
                    </div>
                  </div>
                  <div className="prd_title">
                    <a href="#">
                      식사대용 가벼운 한끼 단백한 오트쉐이크단백한 오트쉐이크
                    </a>
                  </div>
                  <div className="price_info">
                    <div className="price_box">
                      <strong className="discount">30%</strong>
                      <strong className="price_sale">28,600원</strong>
                      <del className="price_consumer">30,000원</del>
                    </div>
                    <div className="coupon_box">
                      <span className="price_discount">
                        <strong>25,700</strong>원
                      </span>
                      <span className="prd_coupon">쿠폰할인가</span>
                    </div>
                  </div>
                  <div className="prd_avg">
                    <span className="prd_review">
                      <span style={{ width: "70%" }}>
                        <span className="hide">별점</span>
                      </span>
                    </span>
                    <span className="count">4.5</span>
                    <span className="prd_comment">
                      ( <a href="#">999+</a> )
                    </span>
                  </div>
                  <div className="prd_btn">
                    <button type="button" className="btn_cart">
                      <span className="hide">장바구니</span>
                    </button>
                    <button type="button" className="btn_fav">
                      <span className="hide">좋아요</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="prd_img">
                  <span className="tag new">
                    <span className="hide">신상품</span>
                  </span>
                  <span className="badge brand">
                    <span className="hide">10대브랜드</span>
                  </span>
                  <span className="coupon">
                    <span className="point">쿠폰</span>
                  </span>
                  <a href="#">
                    <img
                      src="../images/pc/temp_thumb_01.jpg"
                      width="270"
                      height="300"
                      alt=""
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="prd_box flex">
                    <div className="prd_place">남도농산</div>
                    <div className="prd_order_type">
                      <span className="ico_free">무료배송</span>
                      <span className="ico_bulk">대량주문</span>
                    </div>
                  </div>
                  <div className="prd_title">
                    <a href="#">식사대용 가벼운</a>
                  </div>
                  <div className="price_info">
                    <div className="price_box">
                      <strong className="price_sale">28,600원</strong>
                    </div>
                  </div>
                  <div className="prd_avg">
                    <span className="prd_review">
                      <span style={{ width: "70%" }}>
                        <span className="hide">별점</span>
                      </span>
                    </span>
                    <span className="count">4.5</span>
                    <span className="prd_comment">
                      ( <a href="#">999+</a> )
                    </span>
                  </div>
                  <div className="prd_btn">
                    <button type="button" className="btn_cart on">
                      <span className="hide">장바구니</span>
                    </button>
                    <button type="button" className="btn_fav on">
                      <span className="hide">좋아요</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href="#" className="btn_more">
            <span>전체보기</span>
          </a>
        </section>

        <section className="promo_section">
          <h2 className="title">지금 진행중인 기획전</h2>
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
            <a href="#" className="btn_more">
              <span>더 많은 영상 보기</span>
            </a>
          </div>
        </section>

        <section className="partner">
          <div className="inner">
            <h2 className="hide">파트너</h2>
            <button className="btn_left" type="button">
              <span className="hide">이전</span>
            </button>
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <a href="#" target="_blank">
                  <img
                    src="../images/pc/main_bn_01.png"
                    width="254"
                    height="44"
                    alt="해남군청 직영쇼핑몰 해남미소"
                  />
                </a>
              </li>
              <li className="swiper-slide">
                <a href="#" target="_blank">
                  <img
                    src="../images/pc/main_bn_02.png"
                    width="157"
                    height="44"
                    alt="구례군 로컬마켓 그래구례"
                  />
                </a>
              </li>
              <li className="swiper-slide">
                <a href="#" target="_blank">
                  <img
                    src="../images/pc/main_bn_03.png"
                    width="236"
                    height="46"
                    alt="전남어촌수산물직거래 바이씨"
                  />
                </a>
              </li>
            </ul>
            <button className="btn_right" type="button">
              <span className="hide">다음</span>
            </button>
          </div>
        </section>

        <div className="sc">
          <div className="bn">
            <a href="#">
              <img
                src="../images/pc/temp_ss_01.jpg"
                width="70"
                height="273"
                alt=""
              />
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
    </div>
  );
};

export default Main;
