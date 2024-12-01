import img from "../../../assets/images/pc/temp_thumb_01.jpg";

// 최근 본상품
const RecentItem = ({
  place,
  free,
  bulk,
  title,
  priceSale,
  priceConsumer,
  couponPrice,
  rating,
  reviewCount,
  proCupon,
  isCartOn,
  isFavOn,
}: any) => {
  return (
    <li className="item">
      <div className="prd_img">
        <a href="#">
          <img src={img} width="270" height="300" alt="" />
        </a>
      </div>
      <div className="detail">
        <div className="prd_box flex">
          <div className="prd_place">{place}</div>
          <div className="prd_order_type">
            <span className="ico_free">{free}</span>
            <span className="ico_bulk">{bulk}</span>
          </div>
        </div>
        <div className="prd_title">
          <a href="#">{title}</a>
        </div>
        <div className="price_info">
          <div className="price_box">
            <strong className="price_sale">{priceSale}</strong>
            <del className="price_consumer">{priceConsumer}</del>
          </div>
          <div className="coupon_box">
            <span className="price_discount">
              <strong>{couponPrice}</strong>
            </span>
            <span className="prd_coupon">{proCupon}</span>
          </div>
        </div>
        <div className="prd_avg">
          <span className="prd_review">
            <span style={{ width: "70%" }}>
              <span className="hide">별점</span>
            </span>
          </span>
          <span className="count">{rating}</span>
          <span className="prd_comment">
            ( <a href="#">{reviewCount}</a> )
          </span>
        </div>
        <div className="prd_btn">
          <button type="button" className={`btn_cart ${isCartOn.className}`}>
            <span className="hide">장바구니</span>
          </button>
          <button type="button" className={`btn_fav ${isFavOn.className}`}>
            <span className="hide">좋아요</span>
          </button>
        </div>
      </div>
    </li>
  );
};
export default RecentItem;
