import { useState } from "react";

const FaqCustomer = () => {
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
    <>
      <div className="cs_acordbox">
        {faqs.map((faq, index) => (
          <div className="inner" key={index}>
            <a
              className={`more ${activeFaq === index ? "more_open" : ""}`}
              role="button"
              onClick={() => toggleFaq(index)}
            >
              <h4>{faq.question}</h4>
            </a>
            {activeFaq === index && <div className="cont">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </>
  );
};
export default FaqCustomer;
