const ProductFilter = () => {
  // 상품목록 - 카테고리 필터
  return (
    <>
      <div className="search_inner_02">
        <h3 className="hide">검색 옵션</h3>

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
                  <input type="text" placeholder="최소가격" title="최소가격" />
                  <span className="text">원</span>
                </span>
                <span className="bar">~</span>
                <span className="ipt">
                  <input type="text" placeholder="최대가격" title="최대가격" />
                  <span className="text">원</span>
                </span>
              </div>
            </li>
          </ul>
        </section>
        <button type="button" className="btn_apply">
          적용하기
        </button>
        <button type="button" className="btn_close">
          <span className="hide">검색 옵션 닫기</span>
        </button>
      </div>
    </>
  );
};
export default ProductFilter;
