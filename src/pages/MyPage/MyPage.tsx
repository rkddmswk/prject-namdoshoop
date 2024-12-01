import { useState } from "react";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("order"); // 활성화탭

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
            <li>
              <b>나의 쇼핑관리</b>
              <ul>
                <li>
                  <a href="#">주문내역</a>
                </li>
                <li>
                  <a href="#">취소/교환/반품</a>
                </li>
              </ul>
            </li>
            <li>
              <b>나의 활동관리</b>
              <ul>
                <li>
                  <a href="#">찜한상품</a>
                </li>
                <li>
                  <a href="#">최근 본 상품</a>
                </li>
                <li>
                  <a href="#">상품후기</a>
                </li>
                <li>
                  <a href="#">상품문의</a>
                </li>
                <li>
                  <a href="#">1:1문의</a>
                </li>
              </ul>
            </li>
            <li>
              <b>나의 혜택관리</b>
              <ul>
                <li>
                  <a href="#">멤버십</a>
                </li>
                <li>
                  <a href="#">쿠폰</a>
                </li>
                <li>
                  <a href="#">적립금</a>
                </li>
                <li>
                  <a href="#">바우처</a>
                </li>
                <li>
                  <a href="#">1:1문의</a>
                </li>
              </ul>
            </li>
            <li>
              <b>나의 정보관리</b>
              <ul>
                <li>
                  <a href="#">회원정보 변경</a>
                </li>
                <li>
                  <a href="#">배송지관리</a>
                </li>
                <li>
                  <a href="#">회원탈퇴</a>
                </li>
              </ul>
            </li>
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

          <div className="my_reward">
            <p className="name">홍길동님</p>
            <p className="grade grade1">플래티넘</p>

            <div className="member">
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
            <a href="#" className="btn_more">
              더보기
            </a>
          </section>

          <div className="mobile_mymenu">
            <ul>
              <li>
                <b>나의 쇼핑관리</b>
                <ul>
                  <li>
                    <a href="#">주문내역</a>
                  </li>
                  <li>
                    <a href="#">취소/교환/반품</a>
                  </li>
                </ul>
              </li>
              <li>
                <b>나의 활동관리</b>
                <ul>
                  <li>
                    <a href="#">찜한상품</a>
                  </li>
                  <li>
                    <a href="#">최근 본 상품</a>
                  </li>
                  <li>
                    <a href="#">상품후기</a>
                  </li>
                  <li>
                    <a href="#">상품문의</a>
                  </li>
                  <li>
                    <a href="#">1:1문의</a>
                  </li>
                </ul>
              </li>
              <li>
                <b>나의 혜택관리</b>
                <ul>
                  <li>
                    <a href="#">멤버십</a>
                  </li>
                  <li>
                    <a href="#">쿠폰</a>
                  </li>
                  <li>
                    <a href="#">적립금</a>
                  </li>
                  <li>
                    <a href="#">바우처</a>
                  </li>
                  <li>
                    <a href="#">1:1문의</a>
                  </li>
                </ul>
              </li>
              <li>
                <b>나의 정보관리</b>
                <ul>
                  <li>
                    <a href="#">회원정보 변경</a>
                  </li>
                  <li>
                    <a href="#">배송지관리</a>
                  </li>
                  <li>
                    <a href="#">회원탈퇴</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MyPage;
