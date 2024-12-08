import Tumb from "../../../assets/images/pc/temp_thumb_11.jpg";
import exchange from "../../common/json/exchange";

const Order = ({ setIsExchangePopup, setIsCancelPopup, setActiveTab }: any) => {
  // 버튼명에 따라 popup이 다름
  const handleButtonClick = (button: any) => {
    if (button === "교환/반품") {
      setActiveTab("exchange");
      setIsExchangePopup(true);
      setIsCancelPopup(false);
    } else if (button === "주문취소") {
      setIsCancelPopup(true);
      setIsExchangePopup(false);
    }
  };
  return (
    <>
      {exchange.map((item) => (
        <>
          <section className="order_list">
            <hgroup>
              <h4 className="title">{`주문일시 : ${item.date}`}</h4>
              <p>
                <u>{`주문번호 : ${item.number}`}</u>
              </p>
            </hgroup>
            <section className="order_prd">
              <h5 className="title_address">
                {item.id} <span>{item.address}</span>
              </h5>

              <section className="order_item">
                {item.children.map((child) => (
                  <>
                    <h6 className="title">{child.made}</h6>
                    <ul className="list">
                      <li>
                        <div className="prd_info">
                          <span className="thumb">
                            <img src={Tumb} width="100" height="100" alt="" />
                          </span>
                          <span className="name">{child.title}</span>
                          <span className="range">3</span>
                          <span className="price">{`${child.price}원`}</span>
                        </div>

                        {/* button */}
                        <div className="btn_list">
                          <div className="state">
                            <span className="delivery_state">배송완료</span>
                          </div>
                          <div>
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
                        </div>
                        {/* button end */}
                      </li>
                    </ul>
                  </>
                ))}
              </section>
            </section>

            {/* btn */}
            <div className="btn_r">
              <button
                type="button"
                className="button md black"
                onClick={() => handleButtonClick(item.button)}
              >
                {item.button}
              </button>
            </div>
          </section>
        </>
      ))}
    </>
  );
};
export default Order;
