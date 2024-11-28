import LogoImage from "../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper 스타일
import "swiper/css/free-mode"; // FreeMode 모듈 스타일
import { FreeMode } from "swiper/modules";

const Header = () => {
  const menuItems = [
    { text: "전체 카테고리", className: "btn_ham" },
    { text: "신상품" },
    { text: "세일상품" },
    { text: "추천상품" },
    { text: "기획전" },
    { text: "테마관" },
    { text: "시군몰" },
    { text: "이벤트" },
    { text: "커머스", className: "live", hasLive: true },
  ];
  return (
    <header className="header_container">
      <div className="inner">
        <h1 className="logo">
          <img src={LogoImage} alt="남도장터 로고" width={150} />
        </h1>
        <ul className="util_menu">
          <li>
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">회원가입</a>
          </li>
          <li>
            <a href="#">주문조회</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
        </ul>
        <div className="global_search">
          <input
            type="text"
            placeholder="텍스트입력"
            title="검색어를 입력해 주세요."
          />
          <button type="submit">
            <span className="hide">검색</span>
          </button>
          <div className="auto_complete">
            <div className="box">
              <dl className="keyword">
                <dt className="hide">연관 검색어</dt>
                {Array(6)
                  .fill("연관검색어 입니다.")
                  .map((text, index) => (
                    <dd key={index}>
                      <a href="#">{text}</a>
                    </dd>
                  ))}
              </dl>
              <dl className="fav_word">
                <dt>인기 검색어</dt>
                {[
                  "1. 신상품",
                  "2. 신상품",
                  "3. 신상품",
                  "4. 신상품",
                  "5. 신상품",
                ].map((text, index) => (
                  <dd key={index}>
                    <a href="#">{text}</a>
                  </dd>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <ul className="user_menu">
          <li className="btn_favorite">
            <a href="#">
              <span className="hide">즐겨찾기</span>
            </a>
          </li>
          <li className="btn_my">
            <a href="#">
              <span className="hide">내정보</span>
            </a>
          </li>
          <li className="btn_view">
            <a href="#">
              <span className="hide">최근본상품</span>
            </a>
          </li>
          <li className="btn_chatbot">
            <a href="#">
              <span className="hide">챗봇</span>
            </a>
          </li>
          <li className="btn_cart">
            <a href="#">
              <span className="hide">장바구니</span>
              <span className="count">99</span>
            </a>
          </li>
        </ul>
        <nav className="gnb swiper">
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            spaceBetween={"20px"}
            modules={[FreeMode]}
            className="swiper-wrapper"
          >
            {menuItems.map((item, index) => (
              <SwiperSlide
                key={index}
                className={item.className || ""}
                style={{ width: "fit-content", flex: "1 0 auto" }}
              >
                <a href="#">
                  {item.hasLive ? (
                    <span>
                      <span className="hide">라이브</span>
                    </span>
                  ) : null}
                  {item.text}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>
        {/* <div className="mobile_menu">
          <ul>
            <li className="cate on">
              <a href="#">카테고리</a>
            </li>
            <li className="fav">
              <a href="#">찜</a>
            </li>
            <li className="home">
              <a href="#">홈</a>
            </li>
            <li className="view">
              <a href="#">최근본상품</a>
            </li>
            <li className="my">
              <a href="#">마이</a>
            </li>
          </ul>
        </div> */}
        {/* <section className="total_category on">
          <div className="head">
            <div className="head_inner">
              <h2>전체 카테고리</h2>
              <button type="button" className="btn_close">
                <span className="hide">전체 메뉴 닫기</span>
              </button>
            </div>
          </div>
          <div className="menu_inner">
            <ul className="cate_list">
              {[
                "쌀/잡곡",
                "과일/견과",
                "채소류",
                "축산물",
                "수산물",
                "가공식품",
                "전통식품",
                "건강식품",
                "생활용품",
              ].map((category, index) => (
                <li key={index} className={index === 0 ? "on" : ""}>
                  <a href="#" className={`depth_01 menu_0${index + 1}`}>
                    {category}
                  </a>
                  <ul>
                    <li>
                      <a href="#" className="depth_02">
                        전체
                      </a>
                    </li>
                    {Array(5)
                      .fill("백미")
                      .map((item, idx) => (
                        <li
                          key={idx}
                          className={idx === 0 && index === 0 ? "on" : ""}
                        >
                          <a href="#" className="depth_02">
                            {item}
                          </a>
                          {idx === 0 && index === 0 && (
                            <ul>
                              {Array(4)
                                .fill("10K")
                                .map((subitem, subIdx) => (
                                  <li
                                    key={subIdx}
                                    className={subIdx === 0 ? "on" : ""}
                                  >
                                    <a href="#" className="depth_03">
                                      {subitem}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section> */}
      </div>
    </header>
  );
};
export default Header;
