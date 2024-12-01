import { useState } from "react";
import ProductImg from "../../assets/images/pc/image.jpg";
import DetailContent from "./DetailContent";
import ReviewsContent from "./ReviewsContent";
import QuestionsContent from "./QuestionsContent";
import PolicyContent from "./PolicyContent";
import products from "../../components/specific/product/Product";
import RecommendItem from "../../components/specific/product/RecommendItem";
import SelectBox from "../../components/common/input/SelectBox";
import CountBox from "../../components/common/input/CountBox";
import { useNavigate } from "react-router-dom";

// 상품 상세
const ProductDetail = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState("detail"); // 활성화탭
  const navigate = useNavigate();

  const toggleTooltip = () => {
    setIsActive((prev) => !prev);
  };

  // selectbox  data
  const selectBox = [
    {
      text: "옵션선택(필수)",
    },
    {
      text: "옵션선택옵션선택옵션선택옵션선택옵션선택옵션선택 (연계 상품)",
    },
  ];

  const tableData = [
    {
      label: "품목 또는 명칭",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "포장 단위별 내용물의 용량 (중량), 수량, 크기",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "생산자 및 소재지",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    { label: "원산지", content: "해당 항목의 내용이 들어가는 위치입니다." },
    { label: "제조연월일", content: "해당 항목의 내용이 들어가는 위치입니다." },
    {
      label: "유통기한 / 소비기한",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "세부 품목군별 표시사항",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label:
        "식품 등의 표시, 광고에 관한 법률에 따른 소비자안전을 위한 주의사항",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "소비자 상담 관련 전화번호",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
  ];

  const details = [
    {
      label: "품목 또는 명칭",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "포장 단위별 내용물의 용량 (중량), 수량, 크기",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "생산자 및 소재지",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    { label: "원산지", content: "해당 항목의 내용이 들어가는 위치입니다." },
    { label: "제조연월일", content: "해당 항목의 내용이 들어가는 위치입니다." },
    {
      label: "유통기한 / 소비기한",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "세부 품목군별 표시사항",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label:
        "식품 등의 표시, 광고에 관한 법률에 따른 소비자안전을 위한 주의사항",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "소비자 상담 관련 전화번호",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
  ];

  const inquiries = [
    {
      state: "답변대기",
      title: "소비기한 문의소비기한 문의소비기한 문의소비기한 문의",
      user: "magi****",
      date: "2024-08-31",
      content:
        "대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
      reply: null,
    },
    {
      state: "답변대기",
      title: "소비기한 문의",
      user: "magi****",
      date: "2024-08-31",
      content:
        "대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
      reply: null,
    },
    {
      state: "답변완료",
      title: "소비기한 문의",
      user: "magi****",
      date: "2024-08-31",
      content:
        "대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
      reply:
        "대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.",
    },
  ];

  // 탭 변경 핸들러
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="sub_content">
      <div className="location">
        <div className="home">
          <a href="#">
            <span className="hide">홈</span>
          </a>
        </div>
        <div className="link">
          <a href="#">수산물</a>
        </div>
        <div className="link">
          <a href="#">해산물/어패류</a>
        </div>
      </div>

      {/* sub_header */}
      <div className="sub_header">
        <div className="inner">
          <span className="title">상품상세</span>
          <button
            type="button"
            className="btn_prev"
            onClick={() => {
              navigate(-1);
            }}
          >
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

      <section className="products_wrap">
        <div className="product_info">
          <div className="detail_wrap">
            <div className="product_name">
              <h2 className="title">
                맛도 으뜸, 품질도 으뜸 완도 활전복 1kg (7-8미) +선물포장가능
              </h2>
              <p className="sub_copy">완도맘영어조합법인</p>
            </div>

            <div className={`tooltip_sns ${isActive === true ? "active" : ""}`}>
              <button className="btn_sns" type="button" onClick={toggleTooltip}>
                <span className="hide">SNS 공유하기</span>
              </button>

              <div className="text" style={{ display: "none" }}>
                <dl>
                  <dt>공유하기</dt>
                  <dd>
                    <button type="button" className="url">
                      URL복사
                    </button>
                    <button type="button" className="kakao">
                      카카오톡
                    </button>
                    <button type="button" className="facebook">
                      페이스북
                    </button>
                  </dd>
                </dl>
                <button
                  type="button"
                  className="btn_close"
                  onClick={toggleTooltip}
                >
                  <span className="hide">닫기</span>
                </button>
              </div>
            </div>

            {/* 쿠폰 할인가가 있는 경우  */}
            <div className="price_box is_disc_coupon">
              <strong className="discount">30%</strong>
              <span className="price_sale">
                <strong>28,600</strong>원
              </span>
              <del className="price_consumer">30,000원</del>
            </div>

            <div className="price_box">
              <div className="discount_box">
                <span className="price_discount">
                  <strong>999,999</strong>원
                </span>
                <span className="tooltip_coupon">
                  <button type="button" className="prd_coupon">
                    쿠폰할인가
                  </button>
                  <div className="text">
                    <dl>
                      <dt>이 상품에 사용 가능한 쿠폰</dt>
                      <dd>
                        <span>여름할인대전 (3만원이상 구매시)</span>{" "}
                        <strong>5,000원</strong>
                      </dd>
                      <dd>
                        <span>여름할인대전 (3만원이상 구매시)</span>{" "}
                        <strong>10%</strong>
                      </dd>
                    </dl>
                    <button type="button" className="btn_close">
                      <span className="hide">닫기</span>
                    </button>
                  </div>
                </span>
              </div>
              <div className="bulk_box">
                <span className="price_discount">
                  <strong>999,999</strong>원
                </span>
                <span className="prd_bulk">대량주문가</span>
              </div>
            </div>

            {/* 쿠폰 할인가가 없는 경우 */}
            <div className="price_box is_disc">
              <strong className="discount">30%</strong>
              <span className="price_sale">
                <strong>28,600</strong>원
              </span>
              <del className="price_consumer">30,000원</del>
            </div>
            <div className="price_box">
              <div className="discount_box">
                <span className="price_discount">
                  <strong>999,999</strong>원
                </span>
              </div>
            </div>

            {/*  판매가만 존재 */}
            <div className="price_box">
              <span className="price_sale">
                <strong>28,600</strong>원
              </span>
            </div>
            <div className="price_box">
              <div className="bulk_box">
                <span className="price_discount">
                  <strong>999,999</strong>원
                </span>
                <span className="prd_bulk">대량주문가</span>
              </div>
            </div>

            <dl className="delivery_info">
              <dt>
                배송정보 <span>CJ대한통운(오네)</span>
              </dt>
              <dd>
                평균 2~3일 이내 수령 가능
                <div className="tooltip">
                  <button
                    className="btn_emark"
                    type="button"
                    onClick={toggleTooltip}
                  >
                    <span className="hide">!</span>
                  </button>

                  <div className="text">
                    <p>
                      최근 1개월의 배송 데이터를 기반으로 예상한 도착일입니다.
                      <br />
                      배송지나 택배사 사정 등으로 변경될 수 있습니다.
                    </p>
                    <button
                      type="button"
                      className="btn_close"
                      onClick={toggleTooltip}
                    >
                      <span className="hide">닫기</span>
                    </button>
                  </div>
                </div>
              </dd>
              <dd>배송비 3,000원 (7만원 이상 구매시 무료)</dd>
              <dd>제주 추가 3,000원, 제주 외 도서 지역 추가 5,000원</dd>
            </dl>
            <dl className="origin_info">
              <dt>원산지</dt>
              <dd>국내산 100%</dd>
            </dl>

            <div className="buy_pannel">
              <div className="buy_pannel_inner">
                <button className="pannel_toggle">
                  <span className="hide">패널 열기</span>
                </button>
                <div className="pannel_cont active">
                  <div className="product_option">
                    <div className="option">
                      <SelectBox buttonLabel="옵션선택(필수)" />
                    </div>
                    <div className="option">
                      <SelectBox buttonLabel="옵션선택 (연계 상품)" />
                    </div>
                  </div>

                  <CountBox />

                  <dl className="total_price">
                    <dt>총 합계금액</dt>
                    <dd>
                      <strong>51,400</strong>원{" "}
                    </dd>
                  </dl>
                </div>

                <div className="shopping_button">
                  <button type="button" className="fav">
                    <span className="hide">즐겨찾기</span>
                  </button>
                  <button type="button" className="cart">
                    <span className="hide">장바구니</span>
                  </button>
                  <button type="button" className="bulk">
                    <span>대량주문</span>
                  </button>
                  <button type="button" className="buy">
                    <span>바로구매</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb_wrap">
            <div className="big_thumb">
              <img
                src="../images/pc/temp_thumb_03.jpg"
                width="636"
                height="636"
                alt=""
              />
            </div>
            <div className="ctrol">
              <button type="button" className="btn_prev">
                <span className="hide">이전</span>
              </button>
              <div className="slider">
                <ul>
                  <li>
                    <button type="button">
                      <img
                        src="../images/pc/temp_thumb_06.jpg"
                        width="70"
                        height="70"
                        alt="이미지"
                      />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <img
                        src="../images/pc/temp_thumb_06.jpg"
                        width="70"
                        height="70"
                        alt="이미지"
                      />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <img
                        src="../images/pc/temp_thumb_06.jpg"
                        width="70"
                        height="70"
                        alt="이미지"
                      />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <img
                        src="../images/pc/temp_thumb_06.jpg"
                        width="70"
                        height="70"
                        alt="이미지"
                      />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <img
                        src="../images/pc/temp_thumb_06.jpg"
                        width="70"
                        height="70"
                        alt="이미지"
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <button type="button" className="btn_next">
                <span className="hide">다음</span>
              </button>
            </div>
          </div>
        </div>

        <div className="product_detail">
          <div className="detail_tab">
            <ul>
              <li className={activeTab === "detail" ? "active" : ""}>
                <button type="button" onClick={() => handleTabChange("detail")}>
                  상세정보
                </button>
              </li>
              <li className={activeTab === "reviews" ? "active" : ""}>
                <button
                  type="button"
                  onClick={() => handleTabChange("reviews")}
                >
                  <span className="pc inline">상품</span>후기{" "}
                  <span className="count">(999+)</span>
                </button>
              </li>
              <li className={activeTab === "questions" ? "active" : ""}>
                <button
                  type="button"
                  onClick={() => handleTabChange("questions")}
                >
                  <span className="pc inline">상품</span>문의{" "}
                  <span className="count">(999+)</span>
                </button>
              </li>
              <li className={activeTab === "policy" ? "active" : ""}>
                <button type="button" onClick={() => handleTabChange("policy")}>
                  배송/교환/반품
                </button>
              </li>
            </ul>
          </div>

          <div className="tab_content">
            {/* 상세정보 */}
            {activeTab === "detail" && <DetailContent />}
            {/* 상품후기 */}
            {activeTab === "reviews" && <ReviewsContent />}
            {/* 상품문의 */}
            {activeTab === "questions" && <QuestionsContent />}
            {/* 배송/교환/반품  */}
            {activeTab === "policy" && <PolicyContent />}
          </div>
        </div>
      </section>

      {/* 추천상품 */}
      <section className="prd_slider recommend">
        <h2 className="title">추천상품</h2>
        <button className="btn_left" type="button">
          <span className="hide">이전</span>
        </button>
        <div className="prd_list swiper">
          <ul className="list swiper-wrapper">
            {products.map((product, index) => (
              <RecommendItem key={index} {...product} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default ProductDetail;
