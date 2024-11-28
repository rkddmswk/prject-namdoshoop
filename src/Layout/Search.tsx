const Search = () => {
  return (
    <>
      <div className="auto_complete on">
        <div className="box">
          <dl className="keyword">
            <dt className="hide">연관 검색어</dt>
            <dd>연관검색어가 없습니다.</dd>
            <dd>
              <a href="#">
                연관검색어연관검색어연관검색어연관검색어연관검색어 입니다.
              </a>
            </dd>
            <dd>
              <a href="#">연관검색어 입니다.</a>
            </dd>
            <dd>
              <a href="#">연관검색어 입니다.</a>
            </dd>
            <dd>
              <a href="#">연관검색어 입니다.</a>
            </dd>
            <dd>
              <a href="#">연관검색어 입니다.</a>
            </dd>
            <dd>
              <a href="#">연관검색어 입니다.</a>
            </dd>
          </dl>
          <dl className="fav_word">
            <dt>인기 검색어</dt>
            <dd>
              <a href="#">1. 신상품</a>
            </dd>
            <dd>
              <a href="#">2. 신상품</a>
            </dd>
            <dd>
              <a href="#">3. 신상품</a>
            </dd>
            <dd>
              <a href="#">4. 신상품</a>
            </dd>
            <dd>
              <a href="#">5. 신상품</a>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};
export default Search;
