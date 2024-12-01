import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">로그인</h2>
            <button
              type="button"
              className="btn_prev"
              onClick={() => {
                navigate(-1);
              }}
            >
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
          <fieldset>
            <legend>로그인 폼 작성</legend>
            <div className="member_input">
              <input placeholder="아이디" type="text" />
            </div>
            <div className="member_input">
              <input placeholder="비밀번호" type="password" />
            </div>
            <div className="member_dtl">
              <label className="checkbox">
                <input type="checkbox" />
                <span>아이디 저장</span>
              </label>
              <a href="">아이디 찾기</a>
              <a href="">비밀번호 찾기</a>
            </div>
            <div className="member_btn">
              <button className="btn btn_active" type="submit">
                로그인
              </button>
              <a className="btn" href="#">
                회원가입
              </a>
            </div>
          </fieldset>

          <div className="member_simple">
            <h3>간편 로그인</h3>
            <button type="button" className="btn_kakao">
              카카오
            </button>
            <button type="button" className="btn_naver">
              네이버
            </button>
          </div>

          <div className="member_nonmem">
            <a href="#NonMemOrderInq" className="btn btn_gray">
              비회원 주문조회
            </a>
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
export default Login;
