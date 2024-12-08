import { useNavigate } from "react-router-dom";
import FaqCustomer from "../../components/specific/customer/FaqCustomer";
import { useState } from "react";

const Customer = () => {
  const navigate = useNavigate();

  const sideMenu = [
    {
      label: "공지사항",
      url: "/customer/notice",
    },
    {
      label: "자주 묻는 질문",
      url: "/customer/qusition",
    },
    {
      label: "1:1 문의",
      url: "/customer/oneQusition",
    },
    {
      label: "입점 신청",
      url: "/customer/apply",
    },
  ];

  return (
    <div className="none_header">
      <main className="sub_content">
        <section className="cs_main">
          <div className="menu_wrap">
            <h2>고객센터</h2>
            <ul>
              {sideMenu.map((menu) => (
                <li>
                  <a
                    href="!#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`${menu.url}`);
                    }}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contents_wrap">
            <div className="sub_header">
              <div className="inner">
                <span className="title">고객센터</span>
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
            <div className="cs_ask m">
              <button type="button" className="button lg">
                1:1 문의하기
              </button>
            </div>

            <div className="cs_mainbox">
              <h3>고객센터</h3>
              <div className="inner">
                <strong>1668-4858</strong>
                <span>평일 10:00 ~ 18:00 (주말/공휴일 휴무)</span>
              </div>
              <div className="inner">
                <span>FAX : 0504-376-6099</span>
                <span>주소 : (58217) 전라남도 나주시 빛가람로 685, 10층</span>
              </div>
            </div>

            <div className="cs_acord">
              <header>
                <h3>자주 묻는 질문 TOP 5</h3>
                <a href="#" className="more">
                  전체보기
                </a>
              </header>
              <FaqCustomer />
            </div>
            {/* <div className="cs_acord">
              <header>
                <h3>자주 묻는 질문 TOP 5</h3>
                <a href="#" className="more">
                  전체보기
                </a>
              </header>
              <div className="cs_acordbox">
                {faqs.map((faq, index) => (
                  <div className="inner" key={index}>
                    <a
                      className={`more ${
                        activeFaq === index ? "more_open" : ""
                      }`}
                      role="button"
                      onClick={() => toggleFaq(index)}
                    >
                      <h4>{faq.question}</h4>
                    </a>
                    {activeFaq === index && (
                      <div className="cont">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};
export default Customer;
