import { useNavigate } from "react-router-dom";

const LoginId = () => {
  const navigate = useNavigate();

  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">아이디 찾기</h2>
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

        <p className="member_desc">
          아이디를 잊으셨나요?
          <br />
          회원가입 시 등록한 정보를 입력해주세요
        </p>

        <div className="member_form">
          <fieldset>
            <legend>아이디 찾기 폼 작성</legend>
            <div className="member_input">
              <input placeholder="이름" type="text" />
            </div>
            <div className="member_input">
              <div className="tel">
                <input id="nonmemTel" type="tel" placeholder="000" />
                <span>-</span>
                <input id="nonmemTel2" type="tel" placeholder="0000" />
                <span>-</span>
                <input id="nonmemTel3" type="tel" placeholder="0000" />
              </div>
            </div>
            <div className="member_btn">
              <button className="btn btn_gray" type="submit">
                다음
              </button>
            </div>
          </fieldset>

          <h3 className="hide">아이디 찾기 결과</h3>
          <div className="member_result">
            <strong>아이디</strong>
            <span>youtube***</span>
          </div>

          <div className="member_btn">
            <a className="btn btn_gray" href="#">
              비밀번호 찾기
            </a>
            <a
              className="btn btn_black"
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              로그인 하러 가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginId;
