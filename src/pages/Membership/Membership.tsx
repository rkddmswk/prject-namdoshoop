import { useNavigate } from "react-router-dom";

const Membership = () => {
  const navigate = useNavigate();

  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">회원가입</h2>
            <button type="button" className="btn_prev">
              <span className="hide">이전페이지</span>
            </button>
            <div className="btn_wrap">
              <a href="#" className="btn_search">
                <span className="hide">검색</span>
              </a>
              <a href="#" className="btn_cart">
                <span className="hide">장바구니</span>
                <span className="count">99</span>
              </a>
            </div>
          </div>
        </div>

        <div className="member_form login">
          <div className="member_btn">
            <a
              className="btn btn_active"
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/membershipInfo");
              }}
            >
              개인회원
            </a>
            <a
              className="btn"
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/business");
              }}
            >
              사업자회원
            </a>
          </div>

          <div className="member_simple">
            <h3>간편하게 시작하기</h3>
            <button type="button" className="btn_kakao">
              카카오
            </button>
            <button type="button" className="btn_naver">
              네이버
            </button>
          </div>
        </div>

        <div className="member_benefit">
          <h3>회원 혜택</h3>
          <ul>
            <li className="benef1">
              <strong>가입하면 1,000원</strong>
              남도장터 회원이 되시면 가입
              <br />
              즉시 1,000원 적립됩니다.
            </li>
            <li className="benef2">
              <strong>우수회원 혜택</strong>
              매월 우수회원을 선별하여
              <br />
              적립금을 드립니다
            </li>
            <li className="benef3">
              <strong>소중한 포토후기 혜택!</strong>
              포토후기를 남겨주시면 추첨을
              <br />
              통해 다양한 혜택을 드립니다.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Membership;
