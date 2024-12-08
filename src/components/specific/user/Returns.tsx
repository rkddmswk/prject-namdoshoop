import exchange from "../../common/json/exchange";
import Tumb from "../../../assets/images/pc/temp_thumb_11.jpg";

const Returns = () => {
  return (
    <>
      {exchange.map((item) => (
        <section className="cancel_prd">
          <h4 className="title_address">
            배송지 <span>{item.address}</span>
          </h4>
          {item.children.map((item) => (
            <section className="cancel_item">
              <h5 className="title">{item.made}</h5>
              <ul className="list">
                <li>
                  <div className="prd_info">
                    <label className="checkbox single">
                      <input type="checkbox" checked />
                      <span>선택</span>
                    </label>
                    <span className="thumb">
                      <img src={Tumb} width="100" height="100" alt="" />
                    </span>
                    <span className="detail">
                      <span>{item.title}</span>
                      <span>{item.option}</span>
                    </span>
                    <span className="count">
                      <div className="select_box">
                        <button type="button">10</button>
                        <div>
                          <ul>
                            <li>
                              <button type="button">1</button>
                            </li>
                            <li>
                              <button type="button">2</button>
                            </li>
                            <li>
                              <button type="button">3</button>
                            </li>
                            <li>
                              <button type="button">4</button>
                            </li>
                            <li>
                              <button type="button">5</button>
                            </li>
                            <li>
                              <button type="button">6</button>
                            </li>
                            <li>
                              <button type="button">7</button>
                            </li>
                            <li>
                              <button type="button">8</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
            </section>
          ))}
        </section>
      ))}
    </>
  );
};
export default Returns;
