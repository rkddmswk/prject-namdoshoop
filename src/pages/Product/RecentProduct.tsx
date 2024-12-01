import img from "../../assets/images/pc/temp_thumb_01.jpg";
import products from "../../components/specific/product/Product";
import RecentItem from "../../components/specific/product/RecentItem";

// 메인 - 최근본상품
const RecentProduct = ({ closeRecent }: any) => {
  return (
    <>
      <section className="recent_products on">
        <div className="head">
          <div className="head_inner">
            <h2>최근본 상품</h2>
            <button type="button" className="btn_close" onClick={closeRecent}>
              <span className="hide">최근본 상품 닫기</span>
            </button>
          </div>
        </div>
        <div className="recent_inner">
          <div className="list_hd">
            <p className="total_count">총 10 개의 상품</p>
            <button type="button" className="btn_del">
              <span>전체삭제</span>
            </button>
          </div>
          <div className="prd_list">
            <ul className="list">
              {products.map((product, index) => (
                <RecentItem key={index} {...product} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProduct;
