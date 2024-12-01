import { useNavigate } from "react-router-dom";
import Bn from "../../assets/images/pc/temp_bn_big_01.jpg";
import Bn02 from "../../assets/images/pc/temp_bn_big_02.jpg";
import Bn03 from "../../assets/images/pc/temp_bn_big_03.jpg";
import Bn04 from "../../assets/images/pc/temp_bn_big_04.jpg";
import Bn05 from "../../assets/images/pc/temp_bn_big_05.jpg";

const Exhibition = () => {
  const navigate = useNavigate();
  return (
    <main className="sub_content">
      <section className="exhibition">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">기획전</h2>
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

        <ul className="exhibition_list">
          <li>
            <a href="#">
              <div className="pc">
                <img src={Bn} width="1220" height="200" alt="" />
              </div>
              <div className="m">
                <img src={Bn} width="100%" alt="" />
              </div>
              <span className="hide">대체 텍스트</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="pc">
                <img src={Bn02} width="1220" height="200" alt="" />
              </div>
              <div className="m">
                <img src={Bn02} width="100%" alt="" />
              </div>
              <span className="hide">대체 텍스트</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="pc">
                <img src={Bn03} width="1220" height="200" alt="" />
              </div>
              <div className="m">
                <img src={Bn03} width="100%" alt="" />
              </div>
              <span className="hide">대체 텍스트</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="pc">
                <img src={Bn04} width="1220" height="200" alt="" />
              </div>
              <div className="m">
                <img src={Bn04} width="100%" alt="" />
              </div>
              <span className="hide">대체 텍스트</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="pc">
                <img src={Bn05} width="1220" height="200" alt="" />
              </div>
              <div className="m">
                <img src={Bn05} width="100%" alt="" />
              </div>
              <span className="hide">대체 텍스트</span>
            </a>
          </li>
        </ul>
      </section>

      {/* 스카이 스크래퍼 */}
      <div className="sc sub">
        <div className="bn">
          <a href="#">
            <img
              src="../images/pc/temp_ss_01.jpg"
              width="70"
              height="273"
              alt=""
            />
          </a>
          <a href="#" className="btn_more">
            <span>더보기</span>
          </a>
        </div>
        <ul className="util">
          <li>
            <a href="#" className="btn_chatbot">
              <span className="hide">ChatBot</span>
            </a>
          </li>
          <li>
            <a href="#" className="btn_top">
              <span className="hide">TOP</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Exhibition;
