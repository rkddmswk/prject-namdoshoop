const RecentProduct = () => {
  return (
    <>
      <section className="recent_products on">
        <div className="head">
          <div className="head_inner">
            <h2>최근본 상품</h2>
            <button type="button" className="btn_close">
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
              <li className="item">
                <div className="prd_img">
                  <a href="#">
                    <img
                      src="../images/pc/temp_thumb_01.jpg"
                      width="270"
                      height="300"
                      alt=""
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="prd_box flex">
                    <div className="prd_place">
                      남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산
                    </div>
                    <div className="prd_order_type">
                      <span className="ico_free">무료배송</span>
                      <span className="ico_bulk">대량주문</span>
                    </div>
                  </div>
                  <div className="prd_title">
                    <a href="#">
                      식사대용 가벼운 한끼 단백한 오트쉐이크단백한 오트쉐이크
                    </a>
                  </div>
                  <div className="price_info">
                    <div className="price_box">
                      <strong className="price_sale">28,600원</strong>
                      <del className="price_consumer">30,000원</del>
                    </div>
                    <div className="coupon_box">
                      <span className="price_discount">
                        <strong>25,700</strong>원
                      </span>
                      <span className="prd_coupon">쿠폰할인가</span>
                    </div>
                  </div>
                  <div className="prd_avg">
                    <span className="prd_review">
                      <span style={{ width: "70%" }}>
                        <span className="hide">별점</span>
                      </span>
                    </span>
                    <span className="count">4.5</span>
                    <span className="prd_comment">
                      ( <a href="#">999+</a> )
                    </span>
                  </div>
                  <div className="prd_btn">
                    <button type="button" className="btn_cart">
                      <span className="hide">장바구니</span>
                    </button>
                    <button type="button" className="btn_fav">
                      <span className="hide">좋아요</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="prd_img">
                  <a href="#">
                    <img
                      src="../images/pc/temp_thumb_01.jpg"
                      width="270"
                      height="300"
                      alt=""
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="prd_box flex">
                    <div className="prd_place">
                      남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산
                    </div>
                    <div className="prd_order_type">
                      <span className="ico_free">무료배송</span>
                      <span className="ico_bulk">대량주문</span>
                    </div>
                  </div>
                  <div className="prd_title">
                    <a href="#">
                      식사대용 가벼운 한끼 단백한 오트쉐이크단백한 오트쉐이크
                    </a>
                  </div>
                  <div className="price_info">
                    <div className="price_box">
                      <strong className="price_sale">28,600원</strong>
                      <del className="price_consumer">30,000원</del>
                    </div>
                    <div className="coupon_box">
                      <span className="price_discount">
                        <strong>25,700</strong>원
                      </span>
                      <span className="prd_coupon">쿠폰할인가</span>
                    </div>
                  </div>
                  <div className="prd_avg">
                    <span className="prd_review">
                      <span style={{ width: "70%" }}>
                        <span className="hide">별점</span>
                      </span>
                    </span>
                    <span className="count">4.5</span>
                    <span className="prd_comment">
                      ( <a href="#">999+</a> )
                    </span>
                  </div>
                  <div className="prd_btn">
                    <button type="button" className="btn_cart">
                      <span className="hide">장바구니</span>
                    </button>
                    <button type="button" className="btn_fav">
                      <span className="hide">좋아요</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="prd_img">
                  <a href="#">
                    <img
                      src="../images/pc/temp_thumb_01.jpg"
                      width="270"
                      height="300"
                      alt=""
                    />
                  </a>
                </div>
                <div className="detail">
                  <div className="prd_box flex">
                    <div className="prd_place">
                      남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산남도농산
                    </div>
                    <div className="prd_order_type">
                      <span className="ico_free">무료배송</span>
                      <span className="ico_bulk">대량주문</span>
                    </div>
                  </div>
                  <div className="prd_title">
                    <a href="#">
                      식사대용 가벼운 한끼 단백한 오트쉐이크단백한 오트쉐이크
                    </a>
                  </div>
                  <div className="price_info">
                    <div className="price_box">
                      <strong className="price_sale">28,600원</strong>
                      <del className="price_consumer">30,000원</del>
                    </div>
                    <div className="coupon_box">
                      <span className="price_discount">
                        <strong>25,700</strong>원
                      </span>
                      <span className="prd_coupon">쿠폰할인가</span>
                    </div>
                  </div>
                  <div className="prd_avg">
                    <span className="prd_review">
                      <span style={{ width: "70%" }}>
                        <span className="hide">별점</span>
                      </span>
                    </span>
                    <span className="count">4.5</span>
                    <span className="prd_comment">
                      ( <a href="#">999+</a> )
                    </span>
                  </div>
                  <div className="prd_btn">
                    <button type="button" className="btn_cart">
                      <span className="hide">장바구니</span>
                    </button>
                    <button type="button" className="btn_fav">
                      <span className="hide">좋아요</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProduct;
