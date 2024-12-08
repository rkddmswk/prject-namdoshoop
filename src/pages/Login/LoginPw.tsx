const LoginPw = () => {
  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">비밀번호 찾기</h2>
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
          비밀번호를 잊으셨나요?
          <br />
          회원가입 시 등록한 정보를 입력해주세요.
        </p>

        <div className="member_form">
          <fieldset>
            <legend>비밀번호 찾기 폼 작성</legend>
            <div className="member_input">
              <input placeholder="아이디" type="text" />
            </div>
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
              <button className="btn btn_black" type="submit">
                임시 비밀번호 받기
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </main>
  );
};
export default LoginPw;
