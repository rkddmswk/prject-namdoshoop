import { useState } from "react";
import MyPageNav from "../../components/layout/MyPageNav";

const MyPageOneInquiry = () => {
  const [inquiryInsert, setInquiryInsert] = useState(false);

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
              <span className="title">1:1 문의</span>
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
            <section className="direct_inquiry_wrap">
              <table className="inquiry_table">
                <thead>
                  <tr>
                    <th className="col_01">답변상태</th>
                    <th className="col_02">제목</th>
                    <th className="col_03">작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {/* s: 한 셋트 */}
                  <tr className="inquiry">
                    <td className="state">
                      <span className="wait">답변대기</span>
                    </td>
                    <td className="text">
                      <button type="button">
                        오픈시 내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다 나와야하나요??
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

                  <tr className="reply">
                    <td className="state">
                      <span className="hide">답변</span>
                    </td>
                    <td className="text"></td>
                    <td className="date"></td>
                  </tr>

                  <tr className="inquiry">
                    <td className="state">
                      <span className="wait">답변대기</span>
                    </td>
                    <td className="text">
                      <button type="button" className="secret active">
                        소비기한 문의
                      </button>
                    </td>
                    <td className="date">2024-08-31</td>
                  </tr>

                  <tr className="content active">
                    <td className="state">
                      <span className="hide">문의 내용</span>
                    </td>
                    <td className="text">
                      대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
                      법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을
                      발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의
                      의무를 진다. 대통령은 국회에 출석하여 발언하거나 서한으로
                      의견을 표시할 수 있다. 대법원장과 대법관이 아닌 법관의
                      임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수
                      있다.
                    </td>
                    <td className="date">2024-08-31</td>
                  </tr>
                  <tr className="reply">
                    {/* 답변이 있을 때만 active */}
                    <td className="state">
                      <span className="hide">답변</span>
                    </td>
                    <td className="text"></td>
                    <td className="date"></td>
                  </tr>

                  <tr className="inquiry">
                    <td className="state">
                      <span className="completed">답변완료</span>
                    </td>
                    <td className="text">
                      <button type="button" className="active">
                        <span className="lock">
                          <span className="hide">비밀글</span>
                        </span>
                        오픈시 내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??오픈시 내용이 다
                        나와야하나요??오픈시 내용이 다 나와야하나요??오픈시
                        내용이 다 나와야하나요??
                      </button>
                    </td>
                    <td className="date">2024-08-31</td>
                  </tr>

                  <tr className="content active">
                    <td className="state">
                      <span className="hide">문의 내용</span>
                    </td>
                    <td className="text">
                      대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
                      법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을
                      발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의
                      의무를 진다. 대통령은 국회에 출석하여 발언하거나 서한으로
                      의견을 표시할 수 있다. 대법원장과 대법관이 아닌 법관의
                      임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수
                      있다.
                    </td>
                    <td className="date">2024-08-31</td>
                  </tr>
                  <tr className="reply active">
                    <td className="state">
                      <span className="hide">답변</span>
                    </td>
                    <td className="text">
                      대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
                      법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을
                      발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의
                      의무를 진다. 대통령은 국회에 출석하여 발언하거나 서한으로
                      의견을 표시할 수 있다. 대법원장과 대법관이 아닌 법관의
                      임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수
                      있다.
                    </td>
                    <td className="date">2024-08-31</td>
                  </tr>
                </tbody>
              </table>

              <div className="btn_inquiry">
                <button
                  type="button"
                  className="button lg black"
                  onClick={() => setInquiryInsert((prev) => !prev)}
                >
                  등록
                </button>
              </div>
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
export default MyPageOneInquiry;
