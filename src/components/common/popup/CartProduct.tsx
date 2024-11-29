// 상품목록- 장바구니 담기
const CartProduct = () => {
  return (
    <section className="add_cart">
      <h2 className="hide">장바구니 담기</h2>
      <h3 className="title">옵션선택</h3>
      <div className="cont">
        <div className="option">
          <button type="button" className="text">
            상품선택
          </button>
          <ul>
            <li>
              <button type="button">인기순</button>
            </li>
            <li>
              <button type="button">낮은가격순</button>
            </li>
            <li>
              <button type="button">높은가격순</button>
            </li>
            <li>
              <button type="button">평점높은순</button>
            </li>
            <li>
              <button type="button">후기많은순</button>
            </li>
            <li>
              <button type="button">최근등록순</button>
            </li>
          </ul>
        </div>
        <div className="option on">
          <button type="button" className="text">
            상품선택
          </button>
          <ul>
            <li>
              <button type="button">인기순</button>
            </li>
            <li>
              <button type="button">낮은가격순</button>
            </li>
            <li>
              <button type="button">높은가격순</button>
            </li>
            <li>
              <button type="button">평점높은순</button>
            </li>
            <li>
              <button type="button">후기많은순</button>
            </li>
            <li>
              <button type="button">최근등록순</button>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button type="button" className="add">
            장바구니 담기
          </button>
          <button type="button" className="del">
            삭제
          </button>
        </div>
      </div>
      <button type="button" className="btn_close">
        <span className="hide">삭제</span>
      </button>
    </section>
  );
};
export default CartProduct;
