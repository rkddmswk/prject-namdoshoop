import LogoImage from "../../assets/images/dm/logo.png";
import Menu from "../common/menu/Category";
import RecentProduct from "../../pages/Product/RecentProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 메인 헤더
const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false); // 전체 카테고리
  const [recentComponent, setRecentComponent] = useState(true); // 최근본상품
  const [isFocused, setIsFocused] = useState(false); // input의 포커스를 관리하는 상태

  // 오른쪽 사이드 메뉴
  const sideMenu = [
    {
      text: "로그인",
      href: "/login",
    },
    {
      text: "회원가입",
      href: "/membership",
    },
    {
      text: "주문조회",
    },
    {
      text: "고객센터",
      href: "/customer",
    },
  ];

  // 최근본상품
  const handleRecentProduct = () => {
    setRecentComponent((prev) => !prev);
  };

  return (
    <>
      <header className="header_container">
        <div className="inner">
          <h1 className="logo" style={{ padding: "10px" }}>
            <a
              href="!#"
              onClick={(e) => {
                e.preventDefault(); // 기본 링크 동작 방지
                navigate("/");
              }}
            >
              <img src={LogoImage} width={160} height={45} alt="로고이미지" />
            </a>
          </h1>

          <ul className="util_menu">
            {sideMenu.map((menu, index) => (
              <li>
                <a
                  href="!#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`${menu.href}`);
                  }}
                  key={index}
                >
                  {menu.text}
                </a>
              </li>
            ))}
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

            {/* 인기검색어 */}
            <div className="auto_complete">
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
                </dl>
                <dl className="fav_word">
                  <dt>인기 검색어</dt>
                  <dd>
                    <a href="#">1. 신상품</a>
                  </dd>
                  <dd>
                    <a href="#">2. 신상품</a>
                  </dd>
                </dl>
              </div>
            </div>
            {/* 인기검색어 end*/}
          </div>

          <ul className="user_menu">
            <li className="btn_favorite">
              <a href="#">
                <span className="hide">즐겨찾기</span>
              </a>
            </li>
            <li className="btn_my">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/myPage");
                }}
              >
                <span className="hide">내정보</span>
              </a>
            </li>
            <li className="btn_view">
              <a href="#" onClick={handleRecentProduct}>
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
                <a href="#" onClick={() => setIsVisible((prev) => !prev)}>
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
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/productRecommend");
                  }}
                >
                  추천상품
                </a>
              </li>
              <li className="swiper-slide">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/exhibition");
                  }}
                >
                  기획전
                </a>
              </li>
              <li className="swiper-slide">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/musium");
                  }}
                >
                  테마관
                </a>
              </li>
              <li className="swiper-slide">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/city");
                  }}
                >
                  시군몰
                </a>
              </li>
              <li className="swiper-slide">
                <a href="#">이벤트</a>
              </li>
              <li className="swiper-slide">
                <a href="#" className="live">
                  <span>
                    <span className="hide">라이브</span>
                  </span>
                  커머스
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile_menu">
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
          </div>

          {isVisible && <Menu />}
          {!recentComponent && (
            <RecentProduct closeRecent={handleRecentProduct} />
          )}
        </div>
      </header>
      <div className="dimmed_menu"></div>
    </>
  );
};
export default Header;
