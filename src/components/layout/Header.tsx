import Nav from "../common/menu/Nav";
import LogoImage from "../../assets/images/dm/logo.png";
import Menu from "../common/menu/Category";
import RecentProduct from "../specific/product/RecentProduct";
import { useState } from "react";

// 메인 헤더
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuController = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <header className="header_container">
        <div className="inner">
          <h1 className="logo">
            <a href="#">
              <img src={LogoImage} width={160} height={45} />
            </a>
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
            {/* <div className="auto_complete" style={{ display: "block" }}>
              <div className="box">
                <dl className="keyword">
                  <dt className="hide">연관 검색어</dt>
                  <dd>
                    <a href="#">
                      연관검색어연관검색어연관검색어연관검색어연관검색어 입니다.
                    </a>
                  </dd>
                  <dd>
                    <a href="#">연관검색어 입니다.</a>
                  </dd>
                  <dd>
                    <a href="#">연관검색어 입니다.</a>
                  </dd>
                  <dd>
                    <a href="#">연관검색어 입니다.</a>
                  </dd>
                  <dd>
                    <a href="#">연관검색어 입니다.</a>
                  </dd>
                  <dd>
                    <a href="#">연관검색어 입니다.</a>
                  </dd>
                </dl>
                <dl className="fav_word">
                  <dt>인기 검색어</dt>
                  <dd>
                    <a href="#">1. 신상품</a>
                  </dd>
                  <dd>
                    <a href="#">2. 신상품</a>
                  </dd>
                  <dd>
                    <a href="#">3. 신상품</a>
                  </dd>
                  <dd>
                    <a href="#">4. 신상품</a>
                  </dd>
                  <dd>
                    <a href="#">5. 신상품</a>
                  </dd>
                </dl>
              </div>
            </div> */}
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
          <nav
            className="gnb swiper"
            style={{ whiteSpace: "nowrap", overflowX: "auto" }}
          >
            <ul className="swiper-wrapper">
              <li className="btn_ham swiper-slide">
                <a href="#" onClick={handleMenuController}>
                  전체 카테고리
                </a>
              </li>
              <li className="swiper-slide">
                <a href="#">신상품</a>
              </li>
              <li className="swiper-slide">
                <a href="#">세일상품</a>
              </li>
              <li className="swiper-slide">
                <a href="#">추천상품</a>
              </li>
              <li className="swiper-slide">
                <a href="#">기획전</a>
              </li>
              <li className="swiper-slide">
                <a className="#">테마관</a>
              </li>
              <li className="swiper-slide">
                <a href="#">시군몰</a>
              </li>
              <li className="swiper-slide">
                <a href="#">이벤트</a>
              </li>
              <li className="swiper-slide">
                <a href="#" className="live">
                  <span>
                    <span className="hide">라이브</span>
                  </span>{" "}
                  커머스
                </a>
              </li>
            </ul>
          </nav>

          {/* <div className="mobile_menu">
            <ul>
              <li className="cate on"><a href="#">카테고리</a></li>
              <li className="fav"><a href="#">찜</a></li>
              <li className="home"><a href="#">홈</a></li>
              <li className="view"><a href="#">최근본상품</a></li>
              <li className="my"><a href="#">마이</a></li>
            </ul>
          </div> */}

          {isVisible && <Menu />}
        </div>
      </header>
    </>
  );
};
export default Header;
