import Img from "../../../assets/images/pc/temp_thumb_10.jpg";
import PrdImg from "../../../assets/images/pc/temp_thumb_01.jpg";
// 추천상품
const RecommendDetail = ({
  place,
  free,
  bulk,
  title,
  discount,
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
    <li className="swiper-slide">
      <div className="big_thumb">
        <a href="#">
          <img src={Img} width="380" height="220" alt="" />
        </a>
      </div>
      <div className="prd_img">
        <a href="#">
          <img src={PrdImg} width="270" height="300" alt="" />
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
      </div>
    </li>
  );
};
export default RecommendDetail;
