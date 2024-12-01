import { useNavigate } from "react-router-dom";
import img from "../../../assets/images/pc/temp_thumb_01.jpg";

const ProductItem = ({
  tags,
  cupon,
  voucher,
  Nonghal,
  badges,
  imageUrl,
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
  const navigate = useNavigate();

  const handleProductDetail = () => {
    navigate("/productDetail");
  };
  return (
    <li className="item" onClick={handleProductDetail}>
      <div className="prd_img">
        {tags && (
          <span className={`tag ${tags.className}`}>
            <span className="hide">{tags.text}</span>
          </span>
        )}
        {badges && (
          <span className={`badge ${badges.className}`}>
            <span className="hide">{badges.text}</span>
          </span>
        )}
        {/* {tags.map((tag, index) => (
          <span key={index} className={`tag ${tag.className}`}>
            <span className="hide">{tag.text}</span>
          </span>
        ))} */}
        {/* {badges.map((badge, index) => (
          <span key={index} className={`badge ${badge.className}`}>
            <span className="hide">{badge.text}</span>
          </span>
        ))} */}
        <span className="coupon">
          {cupon && (
            <span className={`cupon ${cupon.className}`}>{cupon.text}</span>
          )}
          {voucher && <span className={voucher.className}>{voucher.text}</span>}
          {Nonghal && <span className={Nonghal.className}>{Nonghal.text}</span>}
        </span>

        <a href="#">
          <img src={imageUrl} width="270" height="300" alt="" />
        </a>
      </div>
      <div className="detail">
        <div className="prd_box flex">
          {place && <div className="prd_place">{place}</div>}
          <div className="prd_order_type">
            {free && <span className="ico_free">{free}</span>}
            {bulk && <span className="ico_free">{bulk}</span>}
          </div>
        </div>
        <div className="prd_title">
          <a href="#">{title}</a>
        </div>
        <div className="price_info">
          <div className="price_box">
            <strong className="discount">{discount}</strong>
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
export default ProductItem;
