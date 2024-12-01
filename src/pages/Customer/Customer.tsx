import { useState } from "react";

const Customer = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // 자주 묻는 질문(Faq)
  const faqs = [
    {
      question: "대량주문 방법을 알려주세요.",
      answer:
        "반품&교환은 남도장터 고객센터(1668-4868)를 통해 접수바랍니다. ※ 남도장터 카카오톡 채널로 접수 가능 ※ 고객님께서 반품 상품을 임의로 보낼 시 발생하는 불이익은 책임지지 않습니다.",
    },
    {
      question: "견적서는 어떻게 출력하나요?",
      answer: "견적서는 고객센터 메뉴에서 출력할 수 있습니다.",
    },
    {
      question: "반품 & 교환은 어디로 보내야 하나요?",
      answer: "반품&교환은 남도장터 고객센터(1668-4868)를 통해 접수바랍니다.",
    },
    {
      question: "배송은 어디서 하나요?",
      answer: "배송은 상품 상세 페이지에서 배송 정보를 확인하세요.",
    },
  ];

  const toggleFaq = (index: any) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="none_header">
      <main className="sub_content">
        <section className="cs_main">
          <div className="menu_wrap">
            <h2>고객센터</h2>
            <ul>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">자주 묻는 질문</a>
              </li>
              <li>
                <a href="#">1:1 문의</a>
              </li>
              <li>
                <a href="#">입점 신청</a>
              </li>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Customer;
