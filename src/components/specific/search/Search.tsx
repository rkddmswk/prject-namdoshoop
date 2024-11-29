// 서브 - 모바일검색

const Search = () => {
  return (
    <>
      <section className="mobile_search on">
        <div className="head">
          <h2>검색</h2>
          <button type="button" className="btn_close">
            <span className="hide">전체 메뉴 닫기</span>
          </button>
        </div>
        <div className="search_body">
          <div className="inner">
            <div className="search_box">
              <input
                type="text"
                placeholder="텍스트입력"
                title="검색어를 입력해 주세요."
              />
              <button type="submit">
                <span className="hide">검색</span>
              </button>
            </div>

            <section className="search_trending on">
              <h3>인기 검색어</h3>
              <ul>
                <li>
                  <a href="#">
                    <span>1.</span>{" "}
                    사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과사과
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>2.</span> 사과
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>3.</span> 사과
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>4.</span> 사과
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>5.</span> 사과
                  </a>
                </li>
              </ul>
            </section>

            <section className="search_related on">
              <h3 className="hide">연관 검색어</h3>
              <ul>
                <li>연관검색어가 없습니다.</li>
                <li>
                  <a href="#">연관검색어 입니다.</a>
                </li>
                <li>
                  <a href="#">연관검색어 입니다.</a>
                </li>
                <li>
                  <a href="#">연관검색어 입니다.</a>
                </li>
                <li>
                  <a href="#">연관검색어 입니다.</a>
                </li>
                <li>
                  <a href="#">연관검색어 입니다.</a>
                </li>
                <li>
                  <a href="#">연관검색어 입니다.</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
