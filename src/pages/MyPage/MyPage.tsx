import { useState } from "react";
import myPageMenu from "../../components/common/json/mypageMenu";
import Order from "../../components/specific/user/Order";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("order"); // 활성화탭
  const [isVisible, setIsVisible] = useState(false); // 전체 카테고리

  // 탭 변경 핸들러
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="sub_content">
      <section className="mypage_main">
        <div className="menu_wrap">
          <h2>마이페이지</h2>
          <ul>
            {myPageMenu.map((item, index) => (
              <li key={index}>
                <b>{item.topLabel}</b>
                <ul>
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <a href="!#">{child.text}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="contents_wrap">
          <div className="sub_header">
            <div className="inner">
              <span className="title">마이페이지</span>
              <button type="button" className="btn_prev">
                <span className="hide">이전페이지</span>
              </button>
              <div className="btn_wrap">
                <a
                  href="!#"
                  className="btn_search"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="hide">검색</span>
                </a>
                <a
                  href="!#"
                  className="btn_cart"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="hide">장바구니</span>
                  <span className="count">99</span>
                </a>
              </div>
            </div>
          </div>

          <div className="my_reward">
            <p className="name">홍길동님</p>
            <p className="grade grade1">플래티넘</p>

            <div className="member" style={{ padding: 0 }}>
              <p className="alumni">
                향우회
                <span className="approved">
                  <span className="m">(</span>승인완료
                  <span className="m">)</span>
                </span>
              </p>
              <p className="partner">
                제휴회원
                <span className="rejected">
                  <span className="m">(</span>미승인<span className="m">)</span>
                </span>
              </p>
            </div>

            <div className="reward_state">
              <dl>
                <dt>쿠폰</dt>
                <dd>
                  <strong>3</strong>장
                </dd>
              </dl>
              <dl>
                <dt>적립금</dt>
                <dd>
                  <strong>1,000</strong>원
                </dd>
              </dl>
              <dl>
                <dt>바우처</dt>
                <dd>
                  <strong>100,000</strong>원
                </dd>
              </dl>
            </div>
            <p className="recent">최종 조회일 : 24/08/12</p>
          </div>

          <section className="section">
            <hgroup>
              <h3 className="title">주문/배송 조회</h3>
              <p>(최근 1개월)</p>
            </hgroup>
            <ol className="delivery_process">
              <li>
                <strong className="ing">1</strong>결제대기
              </li>
              <li>
                <strong>0</strong>결제완료
              </li>
              <li>
                <strong className="ing">99</strong>배송준비중
              </li>
              <li>
                <strong>0</strong>배송중
              </li>
              <li>
                <strong>0</strong>배송완료
              </li>
            </ol>
            <a
              href="!#"
              className="btn_more"
              onClick={(e) => e.preventDefault()}
            >
              더보기
            </a>
          </section>

          {/* 모바일 */}
          <div className="mobile_mymenu">
            <ul>
              {myPageMenu.map((item, index) => (
                <li key={index}>
                  <b>{item.topLabel}</b>
                  <ul>
                    {item.children.map((child, index) => (
                      <li key={index}>
                        <a href="!#">{child.text}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <section className="section recent_order">
            <hgroup>
              <h3 className="title">최근 주문내역</h3>
              <p>(최근 1개월)</p>
            </hgroup>

            <section className="order_list">
              <hgroup>
                <h4 className="title">주문일시 : 2024-08-14</h4>
                <p>
                  <u>주문번호 : AB2403040503050504</u>
                </p>
              </hgroup>
              <Order />
              <div className="btn_r">
                <button
                  type="button"
                  className="button md black"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVisible((prev) => !prev);
                  }}
                >
                  교환/반품
                </button>
              </div>
            </section>
          </section>
        </div>

        {isVisible && (
          <div className="popup m_full">
            <div className="popup_inner">
              <section className="body">
                <div className="hd">
                  <h2 className="title">교환/반품 신청</h2>
                </div>

                <div className="content">
                  <section className="return_popup">
                    <ul className="main_tab">
                      <li className="active">
                        <button type="button">교환</button>
                      </li>
                      <li>
                        <button type="button">반품</button>
                      </li>
                    </ul>
                    <h3 className="title">교환 상품 선택</h3>

                    <section className="cancel_prd">
                      <h4 className="title_address">
                        배송지 <span>친구친구친구친구네집</span>
                      </h4>
                      <section className="cancel_item">
                        <h5 className="title">남도농산</h5>
                        <ul className="list">
                          <li>
                            <div className="prd_info">
                              <label className="checkbox single">
                                <input type="checkbox" checked />
                                <span>선택</span>
                              </label>
                              <span className="thumb">
                                <img
                                  src="../images/pc/temp_thumb_11.jpg"
                                  width="100"
                                  height="100"
                                  alt=""
                                />
                              </span>
                              <span className="detail">
                                <span>
                                  맛도 으뜸, 품질도 으뜸 완도 활전복 1kg (7-8미)
                                  +선물포장가능
                                </span>
                                <span>옵션옵션옵션옵션옵션옵션옵션옵션</span>
                              </span>
                              <span className="count">
                                <div className="select_box">
                                  <button type="button">10</button>
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
                              </span>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </section>

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
                      <button type="button" className="button md black">
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
                    setIsVisible((prev) => !prev);
                  }}
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
export default MyPage;
