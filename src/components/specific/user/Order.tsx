const Order = () => {
  return (
    <section className="order_prd">
      <h5 className="title">남도농산</h5>
      <ul className="list">
        <li>
          <div className="prd_info">
            <span className="thumb">
              <img
                src="../images/pc/temp_thumb_11.jpg"
                width="100"
                height="100"
                alt=""
              />
            </span>
            <span className="name">식사대용 가벼운 한끼 단백한 오트쉐이크</span>
            <span className="range">3</span>
            <span className="price">36,000원</span>
          </div>
          <div className="btn_list">
            <div className="state">
              <span className="delivery_state">배송완료</span>
            </div>
            <button type="button" className="button md black">
              배송조회
            </button>
            <button type="button" className="button md black">
              후기작성
            </button>
            <button type="button" className="button md gray">
              <span className="cart">장바구니 담기</span>
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Order;
