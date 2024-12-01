import Visual from "../../assets/images/pc/main_visual.jpg";
import Mvisual from "../../assets/images/m/main_visual.jpg";
import ProductItem from "../../components/specific/product/ProductItem";
import products from "../../components/specific/product/Product";
import SelectBox from "../../components/common/input/SelectBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 상품목록
const ProductList = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="sub_content">
      <div className="location">
        <div className="home">
          <a href="#">
            <span className="hide">홈</span>
          </a>
        </div>
        <div className="link">
          <a href="#">수산물</a>
        </div>
        <div className="link">
          <a href="#">해산물/어패류</a>
        </div>
      </div>

      <div className="sub_header">
        <div className="inner">
          <h2 className="title">사과/배</h2>
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

      {/* 업체 이미지  */}
      <div className="seller_visual">
        <div
          className="pc_visual"
          style={{ backgroundImage: `url(${Visual})` }}
        ></div>
        <div
          className="m_visual"
          style={{ backgroundImage: `url(${Mvisual})` }}
        ></div>
        <span className="hide">대충 소개 문구</span>
      </div>

      {/* 상품목록 */}
      <div className="products_list">
        <aside className={`search_option ${isVisible === true ? "on" : ""}`}>
          <div className="search_inner_01">
            <div className="search_inner_02">
              <h3 className="hide">검색 옵션</h3>

              {/* 필터검색 */}
              <section className="filter">
                <h4>필터</h4>
                <div className="content">
                  <div className="search">
                    <input
                      type="text"
                      placeholder="검색어를 입력해주세요."
                      title="검색어"
                    />
                    <button type="button">
                      <span className="hide">검색</span>
                    </button>
                  </div>
                  <ul className="filter_item">
                    <li>
                      <span className="item">
                        <span>무료배송</span>
                        <button type="button">
                          <span className="hide">필터삭제</span>
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        <span>10,000원~20,000원</span>
                        <button type="button">
                          <span className="hide">필터삭제</span>
                        </button>
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        <span>무료배송</span>
                        <button type="button">
                          <span className="hide">필터삭제</span>
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 혜택 */}
              <section className="benefits on">
                <h4>혜택</h4>
                <button type="button" className="open">
                  <span className="hide">열기</span>
                </button>
                <ul className="content">
                  <li>
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span>할인상품</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span>할인상품</span>
                    </label>
                  </li>
                </ul>
              </section>

              {/* 배송 */}
              <section className="delivery on">
                <h4>배송</h4>
                <button type="button" className="open">
                  <span className="hide">열기</span>
                </button>
                <ul className="content">
                  <li>
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span>무료배송</span>
                    </label>
                  </li>
                  <li>
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span>유료배송</span>
                    </label>
                  </li>
                </ul>
              </section>

              {/* 가격 */}
              <section className="price on">
                <h4>가격</h4>
                <button type="button" className="open">
                  <span className="hide">열기</span>
                </button>
                <ul className="content">
                  <li>
                    <label className="radio">
                      <input type="radio" />
                      <span>~3만원</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio">
                      <input type="radio" />
                      <span>3만원~6만원</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio">
                      <input type="radio" />
                      <span>6만원~9만원</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio">
                      <input type="radio" />
                      <span>9만원~</span>
                    </label>
                  </li>
                  <li>
                    <label className="radio">
                      <input type="radio" />
                      <span>직접입력</span>
                    </label>
                    <div className="price_range">
                      <span className="ipt">
                        <input
                          type="text"
                          placeholder="최소가격"
                          title="최소가격"
                        />
                        <span className="text">원</span>
                      </span>
                      <span className="bar">~</span>
                      <span className="ipt">
                        <input
                          type="text"
                          placeholder="최대가격"
                          title="최대가격"
                        />
                        <span className="text">원</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </section>

              <button type="button" className="btn_apply">
                적용하기
              </button>
              <button
                type="button"
                className="btn_close"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                <span className="hide">검색 옵션 닫기</span>
              </button>
            </div>
          </div>
        </aside>

        <section className="prd_list">
          <h2 className="hide">상품 목록</h2>
          <div className="list_header">
            <p className="total_count">
              총 <strong>1,024</strong>의 상품
            </p>
            <div className="rtl">
              <div className="order on">
                <SelectBox buttonLabel="인기순" />
              </div>
              <button
                type="button"
                className="btn_filter"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                필터
              </button>
            </div>
          </div>
          <ul className="list">
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </ul>
          <a href="#" className="btn_more">
            <span>더보기</span>
          </a>
          <div className="loading">Loading...</div>
        </section>
      </div>

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
export default ProductList;
