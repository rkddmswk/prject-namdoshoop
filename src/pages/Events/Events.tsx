import { act, useState } from "react";
import Eevent01 from "../../assets/images/pc/temp_event_01.jpg";

const Events = () => {
  const [activeTab, setActiveTab] = useState("all"); // 활성화탭

  // 탭 변경 핸들러
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="sub_content">
      <section className="event">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">이벤트</h2>
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

          <ul className="event_tab">
            <li className={activeTab === "all" ? "active" : ""}>
              <button type="button" onClick={() => handleTabChange("all")}>
                전체
              </button>
            </li>
            <li className={activeTab === "event" ? "active" : ""}>
              <button type="button" onClick={() => handleTabChange("event")}>
                이벤트
              </button>
            </li>
            <li className={activeTab === "winner" ? "active" : ""}>
              <button type="button" onClick={() => handleTabChange("winner")}>
                당첨자 발표
              </button>
            </li>
          </ul>

          {activeTab === "all" && (
            <div className="event_list">
              <ul>
                <li>
                  <a href="#">
                    <div className="thumb">
                      <img src={Eevent01} width="380" height="230" alt="" />
                    </div>
                    <div className="detail">
                      <p className="title">[댓글이벤트68차] 추석 댓글 이벤트</p>
                      <p className="date">2024-09-20 ~ 2024-10-19</p>
                      <div className="state ing">신청중</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default Events;
