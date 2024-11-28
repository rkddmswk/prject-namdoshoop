import LogoImage from "../assets/images/dm/logo.png";
import Menu from "./Menu";

import Nav from "./Nav";
import RecentProduct from "./RecentProduct";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header_container">
      <div className="inner">
        <h1 className="logo">
          <img src={LogoImage} alt="남도장터 로고" width={100} height={30} />
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
          {/* <Search /> */}
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
        <Nav />
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
        {/* 메뉴 */}
        {/* <Menu /> */}
        {/* <RecentProduct /> */}
      </div>
    </header>
  );
};
export default Header;
