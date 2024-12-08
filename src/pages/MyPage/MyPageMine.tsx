import MyPageNav from "../../components/layout/MyPageNav";
import products from "../../components/specific/product/Product";
import ProductItem from "../../components/specific/product/ProductItem";
import bn from "../../assets/images/pc/temp_ss_01.jpg";

const MyPageMine = () => {
  return (
    <main className="sub_content">
      <section className="mypage">
        <div className="menu_wrap">
          <h2>마이페이지</h2>
          <MyPageNav />
        </div>
        <div className="contents_wrap">
          <div className="wish_item">
            <div className="sub_header">
              <div className="inner">
                <h3 className="title">찜한 상품</h3>
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

            <p className="total_count">총 10 개의 상품</p>
            <div className="prd_list">
              <ul className="list">
                {products.map((product, index) => (
                  <ProductItem key={index} {...product} />
                ))}
              </ul>
            </div>
            <div className="btn_del">
              <button type="button">
                <span>전체삭제</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="sc sub">
        <div className="bn">
          <a href="#">
            <img src={bn} width="70" height="273" alt="" />
          </a>
          <a href="#" className="btn_more">
            <span>더보기</span>
          </a>
        </div>
        <ul className="util">
          <li>
            <a href="#" className="btn_chatbot">
              <span className="hide">ChatBot</span>
            </a>
          </li>
          <li>
            <a href="#" className="btn_top">
              <span className="hide">TOP</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default MyPageMine;
