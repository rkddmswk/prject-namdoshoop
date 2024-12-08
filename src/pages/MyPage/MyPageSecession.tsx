import MyPageNav from "../../components/layout/MyPageNav";

const MyPageSecession = () => {
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
                <h3 className="title">회원 탈퇴</h3>
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

            <div className="my_withdraw">
              <div className="inner">
                <h4>회원탈퇴 안내</h4>
                <h5>탈퇴 후 서비스이용 불가</h5>
                <ul>
                  <li>
                    회원탈퇴 진행시 회원정보가 즉시 영구삭제 되므로 탈퇴한
                    아이디로 이용이 불가능하며, 삭제된 정보는 복구가
                    불가능합니다.
                  </li>
                </ul>
                <h5>회원정보 및 서비스 이용기록 삭제</h5>
                <ul>
                  <li>
                    회원탈퇴 진행 시 해당 아이디의 회원정보 및 서비스 이용기록이
                    삭제되며, 삭제된 정보는 복구가 불가능합니다.
                  </li>
                </ul>
                <h5>등록된 게시물 삭제 불가</h5>
                <ul>
                  <li>
                    탈퇴 후 회원정보 삭제로 인해 본인 확인이 불가능하여, 등록된
                    게시물을 임의로 수정/삭제해 드릴 수 없습니다.
                  </li>
                  <li>
                    수정 또는 삭제할 게시물은 반드시 회원탈퇴 진행 전에
                    처리하시기 바랍니다. 
                  </li>
                </ul>
                <h5>네이버 소셜로그인 동의 철회방법</h5>
                <ul>
                  <li>
                    네이버 &gt; 로그인 &gt;내정보 &gt; 보안설정 &gt; 네이버와
                    연결된 서비스관리 &gt; 네아로/네이버 인증서 &gt;
                    '해당사이트나 회사명' 찾아 철회하기
                  </li>
                </ul>
                <h5>카카오 소셜로그인 동의 철회방법</h5>
                <ul>
                  <li>
                    카카오 &gt; 로그인 &gt; 계정관리 &gt; 계정이용 &gt;
                    외부서비스 전체보기 &gt; '해당사이트나 회사명'상세 &gt;
                    연결끊기{" "}
                  </li>
                </ul>
              </div>

              <div className="my_enter">
                <div className="member_table">
                  <table cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th>
                          탈퇴사유 <span className="imp">*</span>
                        </th>
                        <td className="m_box">
                          <div className="select_box">
                            <button type="button">유형을 선택하세요</button>
                            <div>
                              <ul>
                                <li>
                                  <button type="button">서비스 불만</button>
                                </li>
                                <li>
                                  <button type="button">
                                    홈페이지 내용 부실
                                  </button>
                                </li>
                                <li>
                                  <button type="button">기타</button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th className="etc">기타의견</th>
                        <td>
                          <textarea
                            cols={20}
                            rows={3}
                            className="input"
                            placeholder="내용을 입력하세요."
                          ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          비밀번호 <span className="imp">*</span>
                        </th>
                        <td className="m_box">
                          <div className="box inputbox">
                            <input
                              type="password"
                              className="input"
                              placeholder="비밀번호를 입력해주세요"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr className="border_none">
                        <th></th>
                        <td>
                          <label className="checkbox">
                            <input type="checkbox" />
                            <span>회원 탈퇴 동의(필수)</span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="btn_area">
                <button type="button" className="button md black">
                  회원 탈퇴하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default MyPageSecession;
