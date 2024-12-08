import { useState } from "react";
import MyPageNav from "../../components/layout/MyPageNav";
import Order from "../../components/specific/user/Order";

const MyPageCover = () => {
  const [activeTab, setActiveTab] = useState("exchange"); // 활성화탭
  const [isVisible, setIsVisible] = useState(false); // 전체 카테고리
  const [isExchangePopup, setIsExchangePopup] = useState(false); // 교환팝업버튼
  const [isExchangeNextPopup, setIsExchangeNextPopup] = useState(false); // 교환팝업다음버튼
  const [isCancelPopup, setIsCancelPopup] = useState(false); // 취소팝업버튼
  const [isCancelNextPopup, setIsCancelNextPopup] = useState(false); // 취소팝업다음버튼

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
              <h3 className="title">취소/교환/반품</h3>
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
          <div className="order_history_wrap">
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

            <div className="order_list">
              <Order
                setActiveTab={setActiveTab}
                setIsExchangePopup={setIsExchangePopup}
                setIsCancelPopup={setIsCancelPopup}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MyPageCover;
