import { useNavigate } from "react-router-dom";
import Temp from "../../assets/images/pc/bg_temp01.jpg";
import Temp02 from "../../assets/images/pc/bg_temp02.jpg";
import Temp03 from "../../assets/images/pc/bg_temp03.jpg";
import Temp04 from "../../assets/images/pc/bg_temp04.jpg";
import products from "../../components/specific/product/Product";
import RecommendItem from "../../components/specific/product/RecommendItem";

const City = () => {
  const navigate = useNavigate();
  return (
    <div className="none_header">
      <main className="sub_content">
        <section className="local_store">
          <div className="sub_header">
            <div className="inner">
              <h2 className="title">시군몰</h2>
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

          <div className="local_store_list">
            <section className="store" data-slider="store_01">
              <hgroup className="hd">
                <a href="#">
                  <h3>
                    <span>담양군</span>
                  </h3>
                  <p>
                    담양장터 청정자연이 주는 건강함을 담양장터를 통해 전하고
                    싶습니다. 따뜻하고 건강한 마을은 고스란히 담은 담양장터의
                    다채로운 먹거리를 만나요.
                  </p>
                  <div
                    className="pc_visual"
                    style={{ backgroundImage: `url(${Temp})` }}
                  ></div>
                  <div
                    className="m_visual"
                    style={{ backgroundImage: `url(${Temp})` }}
                  ></div>
                </a>
              </hgroup>

              <div className="prd_list swiper">
                <button className="btn_left" type="button">
                  <span className="hide">이전</span>
                </button>
                <ul className="list swiper-wrapper">
                  {products.map((product, index) => (
                    <RecommendItem key={index} {...product} />
                  ))}
                </ul>
                <button className="btn_right" type="button">
                  <span className="hide">다음</span>
                </button>
              </div>
            </section>

            <section className="store" data-slider="store_02">
              <hgroup className="hd">
                <a href="#">
                  <h3>
                    <span>담양군</span>
                  </h3>
                  <p>
                    담양장터 청정자연이 주는 건강함을 담양장터를 통해 전하고
                    싶습니다.
                  </p>
                  <div
                    className="pc_visual"
                    style={{ backgroundImage: `url(${Temp02})` }}
                  ></div>
                  <div
                    className="m_visual"
                    style={{ backgroundImage: `url(${Temp02})` }}
                  ></div>
                </a>
              </hgroup>

              <div className="prd_list swiper">
                <button className="btn_left" type="button">
                  <span className="hide">이전</span>
                </button>
                <ul className="list swiper-wrapper">
                  {products.map((product, index) => (
                    <RecommendItem key={index} {...product} />
                  ))}
                </ul>
                <button className="btn_right" type="button">
                  <span className="hide">다음</span>
                </button>
              </div>
            </section>

            <section className="store" data-slider="store_03">
              <hgroup className="hd">
                <a href="#">
                  <h3>
                    <span>담양군</span>
                  </h3>
                  <p>
                    담양장터 청정자연이 주는 건강함을 담양장터를 통해 전하고
                    싶습니다.
                  </p>
                  <div
                    className="pc_visual"
                    style={{ backgroundImage: `url(${Temp03})` }}
                  ></div>
                  <div
                    className="m_visual"
                    style={{ backgroundImage: `url(${Temp03})` }}
                  ></div>
                </a>
              </hgroup>

              <div className="prd_list swiper">
                <button className="btn_left" type="button">
                  <span className="hide">이전</span>
                </button>
                <ul className="list swiper-wrapper">
                  {products.map((product, index) => (
                    <RecommendItem key={index} {...product} />
                  ))}
                </ul>
                <button className="btn_right" type="button">
                  <span className="hide">다음</span>
                </button>
              </div>
            </section>

            <section className="store" data-slider="store_04">
              <hgroup className="hd">
                <a href="#">
                  <h3>
                    <span>담양군</span>
                  </h3>
                  <p>
                    담양장터 청정자연이 주는 건강함을 담양장터를 통해 전하고
                    싶습니다.
                  </p>
                  <div
                    className="pc_visual"
                    style={{ backgroundImage: `url(${Temp04})` }}
                  ></div>
                  <div
                    className="m_visual"
                    style={{ backgroundImage: `url(${Temp04})` }}
                  ></div>
                </a>
              </hgroup>

              <div className="prd_list swiper">
                <button className="btn_left" type="button">
                  <span className="hide">이전</span>
                </button>
                <ul className="list swiper-wrapper">
                  {products.map((product, index) => (
                    <RecommendItem key={index} {...product} />
                  ))}
                </ul>
                <button className="btn_right" type="button">
                  <span className="hide">다음</span>
                </button>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};
export default City;
