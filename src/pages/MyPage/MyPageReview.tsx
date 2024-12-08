import { useState } from "react";
import MyPageNav from "../../components/layout/MyPageNav";
import exchange from "../../components/common/json/exchange";
import tumb12 from "../../assets/images/pc/temp_thumb_12.jpg";
import tumb13 from "../../assets/images/pc/temp_thumb_13.jpg";
import tumb9 from "../../assets/images/pc/temp_thumb_09.jpg";

const MyPageReview = () => {
  const [activeTab, setActiveTab] = useState("reviewIng"); // 활성화탭
  const [reviewInsert, setReviewInsert] = useState(false); // 후기작성팝업

  return (
    <main className="sub_content">
      <section className="mypage">
        <div className="menu_wrap">
          <h2>마이페이지</h2>
          <MyPageNav />
        </div>
        <div className="contents_wrap">
          <div className="my_review">
            <div className="sub_header">
              <div className="inner">
                <h3 className="title">상품후기</h3>
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

            <ul className="main_tab">
              <li className={activeTab === "reviewIng" ? "active" : ""}>
                <button type="button" onClick={() => setActiveTab("reviewIng")}>
                  작성 가능한 후기
                </button>
              </li>
              <li className={activeTab === "reviewed" ? "active" : ""}>
                <button type="button" onClick={() => setActiveTab("reviewed")}>
                  작성한 후기
                </button>
              </li>
            </ul>
            <ul className="list_dot">
              <li>
                구매확정은 배송완료일로부터 5일까지 가능합니다. 5일 후 자동으로
                구매확정 됩니다.
              </li>
              <li>구매확정 후 1개월 간 후기 작성이 가능합니다.</li>
              <li>기한이 지난 상품에 대해서는 후기 작성이 불가능합니다.</li>
            </ul>

            {activeTab === "reviewIng" && (
              <div className="review_table">
                <table>
                  <thead>
                    <tr>
                      <th>주문일자</th>
                      <th>상품</th>
                      <th>작성가능기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exchange.map((item) => (
                      <tr>
                        <td className="date">
                          <span className="m inline">주문일자 : </span>
                          {item.date}
                        </td>
                        <td className="prd">
                          <div className="prd_flex">
                            <div className="thumb">
                              <img src={tumb12} width="70" height="70" alt="" />
                            </div>

                            <div className="detail">
                              <span>{item.made}</span>
                              <strong>{item.title} </strong>
                              <strong>1kg (7-8미) +선물포장가능</strong>
                            </div>
                          </div>
                        </td>
                        <td className="r_date">
                          <div className="date_flex">
                            <div className="col end_date">
                              <span className="m inline">작성가능기간 : </span>
                              <span className="pc inline">~</span>
                              {item.date}
                            </div>
                            <div className="col btn_w">
                              <button
                                type="button"
                                className="button md black"
                                onClick={() => setReviewInsert((prev) => !prev)}
                              >
                                후기작성
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviewed" && (
              <div className="review_table02">
                <table>
                  <thead>
                    <tr>
                      <th>상품</th>
                      <th>내용</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="ct">
                      <td className="prd" colSpan={2}>
                        <div className="prd_flex">
                          <div className="thumb">
                            <img src={tumb12} width="70" height="70" alt="" />
                          </div>
                          <div className="detail">
                            <span>완도맘영어조합법인</span>
                            <strong>맛도 으뜸, 품질도 으뜸 완도 활전복 </strong>
                            <strong>1kg (7-8미) +선물포장가능</strong>
                          </div>
                        </div>
                      </td>
                      <td className="btn">
                        <div className="btn_w">
                          <button type="button" className="button md gray">
                            보기
                          </button>
                          <button type="button" className="button md black">
                            수정
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="review">
                      <td colSpan={3}>
                        <div className="review_print">
                          <div className="hd">
                            <span className="point">
                              <span className="point_avg">
                                <span style={{ width: "90%" }}></span>
                              </span>
                              <strong>4.6</strong>
                            </span>
                            <span className="date">2024-08-23</span>
                          </div>
                          <p className="text">
                            국회의 정기회는 법률이 정하는 바에 의하여 매년 1회
                            집회되며, 국회의 임시회는 대통령 또는 국회재적의원
                            4분의 1 이상의 요구에 의하여 집회된다. 대법원에
                            대법관을 둔다. 다만, 법률이 정하는 바에 의하여
                            대법관이 아닌 법관을 둘 수 있다. 국회의원은 그
                            지위를 남용하여 국가·공공단체 또는 기업체와의
                            계약이나 그 처분에 의하여 재산상의 권리·이익 또는
                            직위를 취득하거나 타인을 위하여 그 취득을 알선할 수
                            없다.
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {reviewInsert && (
              <div className="popup m_full">
                <div className="popup_inner">
                  <section className="body">
                    <div className="hd">
                      <h2 className="title">후기 작성</h2>
                    </div>
                    <div className="content">
                      <div className="review_write">
                        <div className="prd_item">
                          <div className="thumb">
                            <img src={tumb9} width="80" height="89" alt="" />
                          </div>
                          <div className="detail">
                            <p className="c_name">남도농산</p>
                            <p>식사대용 가벼운 한끼 단백한 오트쉐이크</p>
                            <p>옵션~~~옵션~~~옵션~~~옵션~~~</p>
                          </div>
                        </div>
                        <div className="review_point">
                          <p className="text_01">상품은 만족하셨나요?</p>
                          <p className="statistics">
                            <span className="point_avg">
                              <span style={{ width: "90%" }}></span>
                            </span>
                            <strong>
                              3점 <span className="ment">(괜찮아요)</span>
                            </strong>
                          </p>
                          <p className="text_02">
                            만족도 3점을 주셨네요. 어떤 점이 좋았나요?
                          </p>
                        </div>

                        <div className="textarea">
                          <textarea
                            rows={10}
                            cols={100}
                            placeholder="최소 10자 이상 입력해주세요."
                          ></textarea>
                        </div>
                        <span className="count">0/5,000</span>

                        <section className="pic">
                          <h3 className="title">사진 첨부하기</h3>
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
                                  src={tumb13}
                                  width="60"
                                  height="60"
                                  alt=""
                                />
                              </div>
                              <button type="button" className="btn_del">
                                <span className="hide">첨부 파일 삭제</span>
                              </button>
                            </li>
                            <li>
                              <div className="preview">
                                <img
                                  src={tumb13}
                                  width="60"
                                  height="60"
                                  alt=""
                                />
                              </div>
                              <button type="button" className="btn_del">
                                <span className="hide">첨부 파일 삭제</span>
                              </button>
                            </li>
                            <li>
                              <div className="preview">
                                <img
                                  src={tumb13}
                                  width="60"
                                  height="60"
                                  alt=""
                                />
                              </div>
                              <button type="button" className="btn_del">
                                <span className="hide">첨부 파일 삭제</span>
                              </button>
                            </li>
                            <li>
                              <div className="preview">
                                <img
                                  src={tumb13}
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

                        <div className="popup_button flex">
                          <button type="button" className="button md white">
                            삭제
                          </button>
                          <button type="button" className="button md black">
                            저장
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn_close"
                      onClick={() => setReviewInsert((prev) => !prev)}
                    >
                      <span className="hide">닫기</span>
                    </button>
                  </section>
                  <div className="dimmed"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
export default MyPageReview;
