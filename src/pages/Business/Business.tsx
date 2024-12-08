const Business = () => {
  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">사업자 회원가입</h2>
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
          <fieldset>
            <legend>사업자 회원가입 폼 작성</legend>
            <div className="member_input">
              <input placeholder="사업자번호 10자리를 입력하세요" type="text" />
            </div>
            <div className="member_btn">
              <button className="btn btn_gray" type="submit">
                사업자번호 확인하기
              </button>
            </div>
          </fieldset>

          <div className="member_business">
            <div className="member_result">
              <strong>사업자 번호</strong>
              <span>123-45-67890</span>
            </div>

            <p>가입진행이 가능합니다.</p>
          </div>

          <div className="member_btn">
            <a href="#" className="btn btn_black">
              다음 단계로
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Business;
