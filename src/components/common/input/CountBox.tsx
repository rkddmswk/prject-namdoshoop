const CountBox = () => {
  return (
    <div className="product_count">
      <p className="option_name">완도 활전복 1kg (7-8미)</p>
      <div className="box">
        <div className="option_count">
          <button type="button" className="decrementer">
            <span className="hide">수량 뺴기</span>
          </button>
          <input type="text" className="count" value="1" />
          <button type="button" className="incrementer">
            <span className="hide">수량 더하기</span>
          </button>
        </div>
        <p className="option_price">25,700원 </p>
      </div>
      <button type="button" className="btn_del">
        <span className="hide">삭제</span>
      </button>
    </div>
  );
};
export default CountBox;
