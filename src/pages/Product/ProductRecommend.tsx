import { useNavigate } from "react-router-dom";
import products from "../../components/specific/product/Product";
import RecommendDetail from "../../components/specific/product/RecommendDetail";

// 추천상품
const ProductRecommend = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="sub_content">
        <section className="recommend_products">
          <div className="sub_header">
            <div className="inner">
              <h2 className="title">추천상품</h2>
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

          <div
            className="list"
            style={{ whiteSpace: "nowrap", overflowX: "auto" }}
          >
            <button
              className="btn_left"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              <span className="hide">이전</span>
            </button>
            <div className="slider swiper">
              <ul className="swiper-wrapper">
                {products.map((product, index) => (
                  <div
                    style={{
                      display: "inline-block",
                      // width: "300px",
                      marginRight: "30px",
                      verticalAlign: "top",
                    }}
                  >
                    <RecommendDetail key={index} {...product} />
                  </div>
                ))}
              </ul>
            </div>
            <button className="btn_right" type="button">
              <span className="hide">다음</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
export default ProductRecommend;
