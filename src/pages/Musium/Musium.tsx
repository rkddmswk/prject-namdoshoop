import { useNavigate } from "react-router-dom";
import RecentItem from "../../components/specific/product/RecentItem";
import products from "../../components/specific/product/Product";

const Musium = () => {
  const navigate = useNavigate();
  return (
    <main className="sub_content">
      <section className="thmem_hall">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">테마관</h2>
            <button
              type="button"
              className="btn_prev"
              onClick={() => {
                navigate(-1);
              }}
            >
              <span className="hide">이전페이지</span>
            </button>
            <div className="btn_wrap">
              <a href="#" className="btn_search">
                <span className="hide">검색</span>
              </a>
              <a href="#" className="btn_cart">
                <span className="hide">장바구니</span>
                <span className="count">99</span>
              </a>
            </div>
          </div>
        </div>

        <div className="thmem_hall_list">
          <section className="theme">
            <hgroup className="banner">
              <a href="#">
                <h3 className="hide">백야 장터</h3>
                <p className="hide">밤낮없이 열리는 특가</p>
                <div className="pc">
                  <img
                    src="../images/pc/temp_bn_01.jpg"
                    width="1220"
                    height="200"
                    alt=""
                  />
                </div>
                <div className="m">
                  <img src="../images/m/temp_bn_01.jpg" width="100%" alt="" />
                </div>
              </a>
            </hgroup>

            <div className="prd_list">
              <ul className="list">
                {products.map((product, index) => (
                  <RecentItem key={index} {...product} />
                ))}
              </ul>
            </div>
          </section>

          <section className="theme">
            <hgroup className="banner">
              <a href="#">
                <h3 className="hide">백야 장터</h3>
                <p className="hide">밤낮없이 열리는 특가</p>
                <div className="pc">
                  <img
                    src="../images/pc/temp_bn_01.jpg"
                    width="1220"
                    height="200"
                    alt=""
                  />
                </div>
                <div className="m">
                  <img src="../images/m/temp_bn_01.jpg" width="100%" alt="" />
                </div>
              </a>
            </hgroup>

            <div className="prd_list">
              <ul className="list">
                {products.map((product, index) => (
                  <RecentItem key={index} {...product} />
                ))}
              </ul>
            </div>
          </section>

          <section className="theme">
            <hgroup className="banner">
              <a href="#">
                <h3 className="hide">백야 장터</h3>
                <p className="hide">밤낮없이 열리는 특가</p>
                <div className="pc">
                  <img
                    src="../images/pc/temp_bn_01.jpg"
                    width="1220"
                    height="200"
                    alt=""
                  />
                </div>
                <div className="m">
                  <img src="../images/m/temp_bn_01.jpg" width="100%" alt="" />
                </div>
              </a>
            </hgroup>

            <div className="prd_list">
              <ul className="list">
                {products.map((product, index) => (
                  <RecentItem key={index} {...product} />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};
export default Musium;
