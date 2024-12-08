import FaqCustomer from "../../components/specific/customer/FaqCustomer";

const CustomerQusition = () => {
  const list = [
    {
      title: "[전남 사랑애 서포터즈] 대량주문 방법을 알려주세요.",
      label: "중요공지",
      date: "2024.08.31",
    },
    {
      title: "★★남도장터 운영 안내★★",
      label: "중요공지",
      date: "2024.08.31",
    },
    {
      title: "[고객공지] 남도장터 부당구매 고객 조치사항 안내",
      label: "01",
      date: "2024.08.31",
    },
  ];

  return (
    <div className="cs_acord">
      <div className="cs_search">
        <fieldset>
          <legend className="hide">자주 묻는 질문을 검색해 보세요</legend>
          <input type="search" placeholder="검색어를 입력해주세요" />
          <button type="submit">
            <span className="hide">검색하기</span>
          </button>
        </fieldset>
      </div>

      <div className="cs_tab">
        <div className="cs_tab_scroll">
          <button type="button" className="selected">
            전체
          </button>
          <button type="button">회원</button>
          <button type="button">상품</button>
          <button type="button">주문/결제</button>
          <button type="button">배송</button>
          <button type="button">취소/환불</button>
          <button type="button">반품/교환</button>
          <button type="button">쿠폰/적립금</button>
          <button type="button">기타</button>
        </div>
      </div>

      <FaqCustomer />

      <div className="page">
        <a href="#" className="prev active">
          <span className="hide">이전</span>
        </a>
        <span className="num">
          <a href="#" className="current">
            100
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </span>
        <a href="#" className="next">
          <span className="hide">다음</span>
        </a>
      </div>
    </div>
  );
};
export default CustomerQusition;
