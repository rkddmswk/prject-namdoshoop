import MyPageNav from "../../components/layout/MyPageNav";

const MyPageInfoChange = () => {
  return (
    <>
      <main className="sub_content">
        <section className="mypage">
          <div className="menu_wrap">
            <h2>마이페이지</h2>
            <MyPageNav />
          </div>

          <div className="contents_wrap">
            <div className="sub_header">
              <div className="inner">
                <h3 className="title">회원정보변경</h3>
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

            <div className="member_form">
              <div className="header">
                <h4>비밀번호 확인</h4>
                <p>본인확인을 위해 비밀번호를 입력해주세요.</p>
              </div>

              <fieldset>
                <legend>비밀번호 확인 폼</legend>
                <div className="member_input">
                  <input
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                  />
                </div>
                <div className="member_btn">
                  <button className="btn btn_black" type="submit">
                    확인
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default MyPageInfoChange;
