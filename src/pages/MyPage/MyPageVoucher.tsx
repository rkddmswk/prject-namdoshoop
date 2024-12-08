import { useState } from "react";
import MyPageNav from "../../components/layout/MyPageNav";

const MyPageVoucher = () => {
  const [cardInsert, setCardInsert] = useState(false);
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
                <h3 className="title">바우처</h3>
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

            <div className="voucher_wrap">
              <section className="my_voucher">
                <button
                  type="button"
                  className="card_entry"
                  onClick={() => setCardInsert((prev) => !prev)}
                >
                  <span>카드 등록하기</span>
                </button>
                <div className="detail">
                  <h4 className="title">카드명</h4>
                  <p className="card_no">**** - **** - **** - ****</p>
                  <p className="range">유효기간 : -</p>
                  <p className="price">
                    <span className="balance">
                      <strong>-</strong> 원
                    </span>
                  </p>
                </div>
              </section>

              <section className="my_voucher">
                <button type="button" className="card_entry">
                  <img
                    src="../images/pc/temp_card_01.jpg"
                    width="560"
                    height="351"
                    alt="대충 카드 이름"
                  />
                </button>
                <div className="detail">
                  <h4 className="title">농식품바우처 카드</h4>
                  <p className="card_no">1234 - **** - **** - 1234</p>
                  <p className="range">유효기간 : ~ 2024/02</p>
                  <p className="price">
                    <span className="balance">
                      <strong>3,000</strong> 원
                    </span>
                    <span className="bar">/</span>
                    <span className="max_amount">
                      <strong>100,000</strong> 원
                    </span>
                  </p>
                  <button type="button" className="btn_refresh">
                    최종 조회일 : 24/08/12
                  </button>
                </div>
              </section>

              <div className="history_range">
                <div className="box">
                  <h4>조회기간</h4>
                  <span className="calendar">
                    <span className="input_calendar">
                      <input type="text" name="" />
                      <button type="button">
                        <span className="hide">시작일</span>
                      </button>
                    </span>
                    <span className="bar">~</span>
                    <span className="input_calendar">
                      <input type="text" name="" />
                      <button type="button">
                        <span className="hide">종료일</span>
                      </button>
                    </span>
                  </span>
                </div>
                <div className="box">
                  <span className="range_selector">
                    <label>
                      <input type="radio" name="range_selector" />
                      <span>3개월</span>
                    </label>
                    <label>
                      <input type="radio" name="range_selector" />
                      <span>6개월</span>
                    </label>
                    <label>
                      <input type="radio" name="range_selector" />
                      <span>12개월</span>
                    </label>
                  </span>
                  <button type="button" className="button md black">
                    조회
                  </button>
                </div>
              </div>

              <div className="voucher_history_list">
                <table>
                  <thead>
                    <tr>
                      <th>일자</th>
                      <th>상세</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="date">2024-04-04</td>
                      <td className="title">
                        <div className="detail">
                          <p className="text">사용</p>
                          <p className="code">주문번호 : AB24040400000001</p>
                        </div>
                      </td>
                      <td className="price">3,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {cardInsert && (
          <div className="popup m_full">
            <div className="popup_inner">
              <section className="body">
                <div className="hd">
                  <h2 className="title">농식품바우처 카드 등록</h2>
                </div>
                <div className="content regist_card w480">
                  <div className="member_table striped">
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <th>카드번호</th>
                          <td className="m_box full">
                            <div className="box cell">
                              <input
                                type="text"
                                className="input"
                                value="0000"
                              />
                              <span className="bar">-</span>
                              <input
                                type="text"
                                className="input"
                                value="0000"
                              />
                              <span className="bar">-</span>
                              <input
                                type="text"
                                className="input"
                                value="0000"
                              />
                              <span className="bar">-</span>
                              <input
                                type="text"
                                className="input"
                                value="0000"
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th>유효기간</th>
                          <td className="m_box">
                            <div className="box div">
                              <input
                                type="number"
                                className="input"
                                placeholder="유효기간 4자리(MMYY)"
                              />
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <th>이름</th>
                          <td>
                            <input
                              type="text"
                              className="input"
                              placeholder="이름을 입력하세요"
                            />
                          </td>
                        </tr>

                        <tr>
                          <th>생년월일</th>
                          <td>
                            <input
                              type="text"
                              className="input"
                              placeholder="생년월일 숫자 8자리"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="popup_button flex">
                    <button type="button" className="button md white fix">
                      취소
                    </button>
                    <button type="button" className="button md black fix">
                      등록
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn_close"
                    onClick={() => setCardInsert((prev) => !prev)}
                  >
                    <span className="hide">닫기</span>
                  </button>
                </div>
              </section>
              <div className="dimmed"></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default MyPageVoucher;
