import { useState } from "react";
import MyPageNav from "../../components/layout/MyPageNav";
import Order from "../../components/specific/user/Order";
import Exchange from "../../components/specific/user/Exchange";
import Returns from "../../components/specific/user/Returns";

const MyPageOrder = () => {
  const [activeTab, setActiveTab] = useState("exchange"); // 활성화탭
  const [isVisible, setIsVisible] = useState(false); // 전체 카테고리
  const [isExchangePopup, setIsExchangePopup] = useState(false); // 교환팝업버튼
  const [isExchangeNextPopup, setIsExchangeNextPopup] = useState(false); // 교환팝업다음버튼
  const [isCancelPopup, setIsCancelPopup] = useState(false); // 취소팝업버튼
  const [isCancelNextPopup, setIsCancelNextPopup] = useState(false); // 취소팝업다음버튼

  // 탭 변경 핸들러
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // 교환다음버튼
  const handleExchangeNextClick = () => {
    setIsExchangeNextPopup(true);
    setIsExchangePopup(false);
  };

  // 취소다음 버튼
  const handleCancelNextClick = () => {
    setIsCancelPopup(false);
    setIsCancelNextPopup(true);
  };

  return (
    <main className="sub_content">
      <section className="mypage">
        <div className="menu_wrap">
          <h2>마이페이지</h2>
          <MyPageNav />
        </div>

        <div className="contents_wrap">
          <div className="sub_header">
            <div className="inner">
              <h3 className="title">주문내역</h3>
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

          <div className="history_range">
            <div className="box">
              <h4>주문 조회</h4>
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

          <div className="order_list_wrap">
            <Order
              setActiveTab={setActiveTab}
              setIsExchangePopup={setIsExchangePopup}
              setIsCancelPopup={setIsCancelPopup}
            />
          </div>
        </div>

        {isExchangePopup && (
          <div className="popup m_full">
            <div className="popup_inner">
              <section className="body">
                <div className="hd">
                  <h2 className="title">교환/반품 신청</h2>
                </div>

                <div className="content">
                  <section className="return_popup">
                    <ul className="main_tab">
                      <li className={activeTab === "exchange" ? "active" : ""}>
                        <button
                          type="button"
                          onClick={() => handleTabChange("exchange")}
                        >
                          교환
                        </button>
                      </li>
                      <li className={activeTab === "returns" ? "active" : ""}>
                        <button
                          type="button"
                          onClick={() => handleTabChange("returns")}
                        >
                          반품
                        </button>
                      </li>
                    </ul>

                    <h3 className="title">교환 상품 선택</h3>
                    {activeTab === "exchange" && <Exchange />}
                    {activeTab === "returns" && <Returns />}

                    <section className="info">
                      <h4 className="title">교환 안내 사항</h4>
                      <ul className="list_dot">
                        <li>
                          교환 요청을 하시기 전 반드시 판매자에게 교환 가능
                          여부를 확인해 주세요.
                        </li>
                        <li>
                          상품을 받으신 후 7일 이내에 교환을 신청하실 수
                          있습니다.
                        </li>
                        <li>
                          교환 배송비는 추가 비용이 발생합니다.(상품파손 및
                          불량이나 오배송의 경우 제외)
                        </li>
                        <li>
                          묶음배송이나 무료배송 상품 중 일부만 반품/교환하실
                          경우 추가비용이 발생할 수 있습니다.
                        </li>
                        <li>
                          사유를 확인할 수 있는 사진을 등록하시면 보다 신속하게
                          교환 처리가 진행됩니다.
                        </li>
                      </ul>
                    </section>
                    <div className="btn_wrap">
                      <button
                        type="button"
                        className="button md black"
                        onClick={handleExchangeNextClick}
                      >
                        다음
                      </button>
                    </div>
                  </section>
                </div>
                <button
                  type="button"
                  className="btn_close"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExchangePopup((prev) => !prev);
                  }}
                >
                  <span className="hide">닫기</span>
                </button>
              </section>
              <div className="dimmed"></div>
            </div>
          </div>
        )}

        {isExchangeNextPopup && (
          <div className="popup m_full">
            <div className="popup_inner">
              <section className="body">
                <div className="hd">
                  <h2 className="title">교환/반품 신청</h2>
                </div>

                <div className="content">
                  <section className="return_popup">
                    <ul className="main_tab">
                      <li className={activeTab === "exchange" ? "active" : ""}>
                        <button
                          type="button"
                          onClick={() => handleTabChange("exchange")}
                        >
                          교환
                        </button>
                      </li>
                      <li className={activeTab === "returns" ? "active" : ""}>
                        <button
                          type="button"
                          onClick={() => handleTabChange("returns")}
                        >
                          반품
                        </button>
                      </li>
                    </ul>
                    {activeTab === "exchange" && (
                      <>
                        <h3 className="title">교환 상품</h3>
                        <Exchange />
                        <section className="section">
                          <h4 className="title">교환 사유</h4>
                          <ul className="return_type">
                            <li>
                              <label>
                                <input type="radio" name="a" checked />
                                <span>파손 및 불량 </span>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="radio" name="a" />
                                <span>오배송</span>
                              </label>
                            </li>
                          </ul>
                          <textarea
                            rows={5}
                            cols={50}
                            className="return_text"
                            placeholder="자세한 사유를 입력해 주세요.(필수)"
                          ></textarea>

                          <section className="pic">
                            <h5 className="title">사진 첨부하기</h5>
                            <ul className="pic_list">
                              <li>
                                <span className="file_upload">
                                  <input type="file" />
                                  <span>1/3</span>
                                </span>
                              </li>
                              <li>
                                <div className="preview">
                                  <img
                                    src="../images/pc/temp_thumb_13.jpg"
                                    width="60"
                                    height="60"
                                    alt=""
                                  />
                                </div>
                                <button type="button" className="btn_del">
                                  <span className="hide">첨부 파일 삭제</span>
                                </button>
                              </li>
                            </ul>
                          </section>
                        </section>
                        <section className="section">
                          <h4 className="title">교환 방법</h4>
                          <div className="return_method">
                            <div className="type">
                              <span>
                                <label className="radio">
                                  <input type="radio" />
                                  <span>회수해 주세요.</span>
                                </label>
                              </span>
                              <span>
                                <label className="radio">
                                  <input type="radio" />
                                  <span>직접 연락 할게요.</span>
                                </label>
                              </span>
                            </div>
                            <section className="return_address active">
                              <h5 className="title_address">
                                배송지2 <span>친구친구친구친구네집</span>
                              </h5>
                              <div className="entry_table">
                                <table>
                                  <tbody>
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
                                      <th>연락처</th>
                                      <td>
                                        <div className="f_box cell">
                                          <input
                                            type="text"
                                            className="input"
                                            placeholder="010"
                                          />
                                          <span className="bar">-</span>
                                          <input
                                            type="text"
                                            className="input"
                                          />
                                          <span className="bar">-</span>
                                          <input
                                            type="text"
                                            className="input"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>회수지 주소</th>
                                      <td>
                                        <div className="f_box address">
                                          <span className="box">
                                            <input
                                              type="text"
                                              className="input"
                                              placeholder="우편번호"
                                            />
                                            <button
                                              type="button"
                                              className="button md gray"
                                            >
                                              우편번호 검색
                                            </button>
                                          </span>
                                          <span className="box">
                                            <input
                                              type="text"
                                              className="input"
                                              placeholder="기본주소"
                                            />
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="address_more">상세주소</th>
                                      <td>
                                        <input
                                          type="text"
                                          className="input"
                                          placeholder="상세주소"
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>배송메모</th>
                                      <td className="memo">
                                        <div className="select_box">
                                          <button type="button">
                                            선택안함
                                          </button>
                                          <div>
                                            <ul>
                                              <li>
                                                <button type="button">1</button>
                                              </li>
                                              <li>
                                                <button type="button">2</button>
                                              </li>
                                              <li>
                                                <button type="button">3</button>
                                              </li>
                                              <li>
                                                <button type="button">4</button>
                                              </li>
                                              <li>
                                                <button type="button">5</button>
                                              </li>
                                              <li>
                                                <button type="button">6</button>
                                              </li>
                                              <li>
                                                <button type="button">7</button>
                                              </li>
                                              <li>
                                                <button type="button">8</button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div>
                                          <input
                                            type="text"
                                            className="input"
                                            placeholder="sample"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <button type="button" className="btn_more">
                                <span className="hide">열기</span>
                              </button>
                            </section>

                            <dl className="d_call">
                              <dt>고객센터 1688 - 4858</dt>
                              <dd>평일 10:00 ~ 18:00 (주말/공휴일 휴무)</dd>
                            </dl>
                          </div>
                        </section>
                        <div className="btn_wrap">
                          <button
                            type="button"
                            className="button md white"
                            onClick={() => {
                              setIsExchangePopup(true);
                              setIsExchangeNextPopup(false);
                            }}
                          >
                            이전
                          </button>
                          <button type="button" className="button md black">
                            신청하기
                          </button>
                        </div>
                      </>
                    )}
                    {activeTab === "returns" && (
                      <>
                        <h3 className="title">반품 상품</h3>
                        <Returns />
                        <section className="section">
                          <h3 className="title">반품 사유</h3>
                          <div className="return_reason">
                            <dl>
                              <dt>배송비 구매자 부담</dt>
                              <dd>
                                <label>
                                  <input type="radio" name="a" checked />
                                  <span>단순 변심</span>
                                </label>
                                <label>
                                  <input type="radio" name="a" checked />
                                  <span>주문 실수</span>
                                </label>
                              </dd>
                            </dl>
                            <dl>
                              <dt>배송비 판매자 부담</dt>
                              <dd>
                                <label>
                                  <input type="radio" name="a" checked />
                                  <span>파손 및 불량 </span>
                                </label>
                                <label>
                                  <input type="radio" name="a" checked />
                                  <span>오배송 및 지연</span>
                                </label>
                              </dd>
                            </dl>
                          </div>
                          <textarea
                            rows={5}
                            cols={50}
                            className="return_text"
                            placeholder="자세한 사유를 입력해 주세요.(필수)"
                          ></textarea>

                          <section className="pic">
                            <h4 className="title">사진 첨부하기</h4>
                            <ul className="pic_list">
                              <li>
                                <span className="file_upload">
                                  <input type="file" />
                                  <span>1/3</span>
                                </span>
                              </li>
                              <li>
                                <div className="preview">
                                  <img
                                    src="../images/pc/temp_thumb_13.jpg"
                                    width="60"
                                    height="60"
                                    alt=""
                                  />
                                </div>
                                <button type="button" className="btn_del">
                                  <span className="hide">첨부 파일 삭제</span>
                                </button>
                              </li>
                            </ul>
                          </section>
                        </section>

                        <section className="section">
                          <h3 className="title">반품 방법</h3>
                          <div className="return_method">
                            <div className="type">
                              <span>
                                <label className="radio">
                                  <input type="radio" />
                                  <span>회수해 주세요.</span>
                                </label>
                              </span>
                              <span>
                                <label className="radio">
                                  <input type="radio" />
                                  <span>직접 연락 할게요.</span>
                                </label>
                              </span>
                            </div>
                            <div className="entry_table">
                              <table>
                                <tbody>
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
                                    <th>전화번호</th>
                                    <td>
                                      <div className="f_box cell">
                                        <input
                                          type="text"
                                          className="input"
                                          placeholder="010"
                                        />
                                        <span className="bar">-</span>
                                        <input type="text" className="input" />
                                        <span className="bar">-</span>
                                        <input type="text" className="input" />
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th>회수지 주소</th>
                                    <td>
                                      <div className="f_box address">
                                        <span className="box">
                                          <input
                                            type="text"
                                            className="input"
                                            placeholder="우편번호"
                                          />
                                          <button
                                            type="button"
                                            className="button md gray"
                                          >
                                            우편번호 검색
                                          </button>
                                        </span>
                                        <span className="box">
                                          <input
                                            type="text"
                                            className="input"
                                            placeholder="기본주소"
                                          />
                                        </span>
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <th className="address_more">상세주소</th>
                                    <td>
                                      <input
                                        type="text"
                                        className="input"
                                        placeholder="상세주소"
                                      />
                                    </td>
                                  </tr>

                                  <tr>
                                    <th>배송메모</th>
                                    <td className="memo">
                                      <div className="select_box">
                                        <button type="button">선택안함</button>
                                        <div>
                                          <ul>
                                            <li>
                                              <button type="button">1</button>
                                            </li>
                                            <li>
                                              <button type="button">2</button>
                                            </li>
                                            <li>
                                              <button type="button">3</button>
                                            </li>
                                            <li>
                                              <button type="button">4</button>
                                            </li>
                                            <li>
                                              <button type="button">5</button>
                                            </li>
                                            <li>
                                              <button type="button">6</button>
                                            </li>
                                            <li>
                                              <button type="button">7</button>
                                            </li>
                                            <li>
                                              <button type="button">8</button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div>
                                        <input
                                          type="text"
                                          className="input"
                                          placeholder="sample"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <dl className="d_call">
                              <dt>고객센터 1688 - 4858</dt>
                              <dd>평일 10:00 ~ 18:00 (주말/공휴일 휴무)</dd>
                            </dl>
                          </div>
                        </section>

                        <section className="section">
                          <h3 className="title">환불정보</h3>
                          <div className="return active">
                            <button>
                              <span className="name">환불요청내역</span>
                              <span>71,250원</span>
                            </button>
                            <div className="table">
                              <table>
                                <tbody>
                                  <tr>
                                    <th>판매가</th>
                                    <td>95,000원</td>
                                  </tr>
                                  <tr className="h45">
                                    <th>할인적용가</th>
                                    <td>0</td>
                                  </tr>
                                  <tr className="h45 bar">
                                    <th>
                                      <strong>환불예정금액</strong>
                                    </th>
                                    <td>
                                      <strong>95,000원</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>농식품바우처</th>
                                    <td>95,000원</td>
                                  </tr>
                                  <tr>
                                    <th>신용카드</th>
                                    <td>95,000원</td>
                                  </tr>
                                  <tr>
                                    <th>적립금</th>
                                    <td>95,000원</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>

                        <section className="section">
                          <h3 className="title">환불계좌정보</h3>
                          <div className="data_view bank_out">
                            <table>
                              <tbody>
                                <tr>
                                  <th>은행</th>
                                  <td>남도은행</td>
                                  <th>예금주</th>
                                  <td>홍길동</td>
                                </tr>
                                <tr>
                                  <th>계좌번호</th>
                                  <td>1111111111111111111</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <button
                            type="button"
                            className="button xs black btn_newback"
                          >
                            새로운 계좌
                          </button>
                        </section>

                        <div className="btn_wrap">
                          <button
                            type="button"
                            className="button md white"
                            onClick={() => {
                              setIsExchangePopup(true);
                              setIsExchangeNextPopup(false);
                            }}
                          >
                            이전
                          </button>
                          <button type="button" className="button md black">
                            신청하기
                          </button>
                        </div>
                      </>
                    )}
                  </section>
                </div>
                <button
                  type="button"
                  className="btn_close"
                  onClick={() => setIsExchangeNextPopup((prev) => !prev)}
                >
                  <span className="hide">닫기</span>
                </button>
              </section>
              <div className="dimmed"></div>
            </div>
          </div>
        )}

        {isCancelPopup && (
          <div className="popup m_full">
            <div className="popup_inner">
              <section className="body">
                <div className="hd">
                  <h2 className="title">주문 취소 신청</h2>
                </div>

                <div className="content">
                  <section className="cancel_popup">
                    <h3 className="title">취소 상품 선택</h3>

                    <Exchange />
                    <section className="info">
                      <h4 className="title">취소 안내 사항</h4>
                      <ul className="list_dot">
                        <li>
                          결제대기, 결제완료 단계에서만 주문취소가 가능합니다.
                        </li>
                        <li>
                          이미 배송을 시작한 경우에는 취소가 거부될 수 있습니다.
                        </li>
                        <li>
                          사용했던 쿠폰은 기간 만료로 재사용이 불가할 수
                          있습니다.
                        </li>
                        <li>
                          부분취소가 불가능한 쿠폰이 적용된 상품 선택시 해당
                          쿠폰이 적용된 상품 모두 선택해야 합니다.
                        </li>
                        <li>
                          <span className="imp">
                            바우처 상품이 있는 주문서에서 바우처 상품을
                            취소하고자 하면 주문서 상품 전체취소만 가능합니다.
                          </span>
                        </li>
                      </ul>
                    </section>
                    <div className="btn_wrap">
                      <button
                        type="button"
                        className="button md black"
                        onClick={handleCancelNextClick}
                      >
                        다음
                      </button>
                    </div>
                  </section>
                </div>
                <button
                  type="button"
                  className="btn_close"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCancelPopup((prev) => !prev);
                  }}
                >
                  <span className="hide">닫기</span>
                </button>
              </section>
              <div className="dimmed"></div>
            </div>
          </div>
        )}

        {isCancelNextPopup && (
          <div className="popup m_full">
            <div className="popup_inner">
              <section className="body">
                <div className="hd">
                  <h2 className="title">주문 취소 신청</h2>
                </div>
                <div className="content">
                  <div className="cancel_popup">
                    <h3 className="title">취소 상품</h3>
                    <Exchange />
                    <section className="section">
                      <h3 className="title">취소사유</h3>
                      <ul className="cancel_type">
                        <li>
                          <label>
                            <input type="radio" name="a" checked />
                            <span>단순 변심</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="a" />
                            <span>배송 지연</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="a" />
                            <span>주문 실수</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="a" />
                            <span>서비스 불만족</span>
                          </label>
                        </li>
                      </ul>
                      <textarea
                        rows={5}
                        cols={50}
                        className="cancel_text"
                        placeholder="자세한 사유를 입력해 주세요.(필수)"
                      ></textarea>
                    </section>
                    <section className="section">
                      <h3 className="title">환불정보</h3>
                      <div className="return active">
                        <button>
                          <span className="name">환불요청내역</span>
                          <span className="price">71,250원</span>
                        </button>
                        <div className="table">
                          <table>
                            <tbody>
                              <tr>
                                <th>판매가</th>
                                <td>95,000원</td>
                              </tr>
                              <tr>
                                <th>할인적용가</th>
                                <td>95,000원</td>
                              </tr>
                              <tr className="h45">
                                <th>배송비</th>
                                <td>0</td>
                              </tr>
                              <tr className="h45 bar">
                                <th>
                                  <strong>환불예정금액</strong>
                                </th>
                                <td>
                                  <strong>95,000원</strong>
                                </td>
                              </tr>
                              <tr>
                                <th>농식품바우처</th>
                                <td>95,000원</td>
                              </tr>
                              <tr>
                                <th>신용카드</th>
                                <td>95,000원</td>
                              </tr>
                              <tr>
                                <th>적립금</th>
                                <td>95,000원</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                    <section className="section">
                      <h3 className="title">환불계좌정보</h3>
                      <div className="data_view bank_out">
                        <table>
                          <tbody>
                            <tr>
                              <th>은행</th>
                              <td>남도은행</td>
                              <th>예금주</th>
                              <td>홍길동</td>
                            </tr>
                            <tr>
                              <th>계좌번호</th>
                              <td>1111111111111111111</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <button
                        type="button"
                        className="button xs black btn_newback"
                      >
                        새로운 계좌
                      </button>
                    </section>
                    <div className="btn_wrap">
                      <button
                        type="button"
                        className="button md white"
                        onClick={() => {
                          setIsCancelPopup(true);
                          setIsCancelNextPopup(false);
                        }}
                      >
                        이전
                      </button>
                      <button type="button" className="button md black">
                        신청하기
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn_close"
                  onClick={() => setIsCancelNextPopup((prev) => !prev)}
                >
                  <span className="hide">닫기</span>
                </button>
              </section>
              <div className="dimmed"></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
export default MyPageOrder;
