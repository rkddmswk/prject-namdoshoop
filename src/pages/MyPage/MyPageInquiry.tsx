import MyPageNav from "../../components/layout/MyPageNav";

const MyPageInquiry = () => {
  return (
    <main className="sub_content">
      <section className="mypage">
        <div className="menu_wrap">
          <h2>마이페이지</h2>
          <MyPageNav />
        </div>

        <div className="contents_wrap">
          {/* s: sub header */}
          <div className="sub_header">
            <div className="inner">
              <span className="title">상품문의</span>
              <button type="button" className="btn_prev">
                <span className="hide">이전페이지</span>
              </button>
              <div className="btn_wrap">
                <a href="!#" className="btn_search">
                  <span className="hide">검색</span>
                </a>
                <a href="!#" className="btn_cart">
                  <span className="hide">장바구니</span>
                  <span className="count">99</span>
                </a>
              </div>
            </div>
          </div>
          {/* e: sub header */}

          <div className="my_inquiry">
            <section className="inquiry_wrap">
              <table className="inquiry_table">
                <thead>
                  <tr>
                    <th className="col_01">답변상태</th>
                    <th className="col_02">상품명</th>
                    <th className="col_03">제목</th>
                    <th className="col_04">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {/* s: 한 셋트 */}
                  <tr className="inquiry">
                    <td className="state">
                      <span className="wait">답변대기</span>
                    </td>
                    <td className="name">
                      <span>상품A</span>
                    </td>
                    <td className="text">
                      <button type="button">
                        오픈시 내용이 다 나와야하나요??...
                      </button>
                    </td>
                    <td className="date">2024-08-31</td>
                  </tr>

                  <tr className="content">
                    <td className="state">
                      <span className="hide">문의 내용</span>
                    </td>
                    <td className="text">대통령은 법률에서 구체적으로...</td>
                    <td>2024-08-31</td>
                  </tr>
                </tbody>
              </table>

              <div className="page">
                <a href="#" className="prev active">
                  <span className="hide">이전</span>
                </a>
                <span className="num">
                  <a href="#" className="current">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                </span>
                <a href="#" className="next">
                  <span className="hide">다음</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MyPageInquiry;
