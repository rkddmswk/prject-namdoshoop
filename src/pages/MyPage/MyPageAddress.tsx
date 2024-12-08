import MyPageNav from "../../components/layout/MyPageNav";

const MyPageAddress = () => {
  return (
    <>
      <main className="sub_content">
        <section className="mypage">
          <div className="menu_wrap">
            <h2>마이페이지</h2>
            <MyPageNav />
          </div>

          <div className="contents_wrap">
            <div className="sub_header">
              <div className="inner">
                <h3 className="title">배송지 관리</h3>
                <button type="button" className="btn_prev">
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

            <div className="addr_mng">
              <div className="addr_mng_ctrl">
                <button type="button" className="button md gray">
                  기본배송지로 설정
                </button>
                <button type="button" className="button md black">
                  신규 배송지 추가
                </button>
              </div>

              <div className="addr_mng_list">
                <table>
                  <colgroup>
                    <col className="col_sel" />
                    <col className="col_add" />
                    <col className="col_name" />
                    <col />
                    <col className="col_tel" />
                    <col className="col_ctrl" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">선택</th>
                      <th scope="col">배송지명</th>
                      <th scope="col">이름</th>
                      <th scope="col">주소</th>
                      <th scope="col">연락처</th>
                      <th scope="col">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="radio">
                          <input type="radio" checked />
                          <span>선택</span>
                        </label>
                      </td>
                      <td>
                        <span className="base">기본배송지</span>
                        <strong>우리집</strong>
                      </td>
                      <td>홍길동</td>
                      <td>
                        <p>
                          (12345) 서울 영등포구 국회대로 54길 OO OOOO 아파트 2층
                          1203호 2층 1203호 2층 1203호
                        </p>
                      </td>
                      <td>010-1111-2222</td>
                      <td>
                        <div className="control">
                          <button type="button" className="button md gray">
                            보기
                          </button>
                          <button type="button" className="button md black">
                            수정
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className="radio">
                          <input type="radio" />
                          <span>선택</span>
                        </label>
                      </td>
                      <td>
                        <strong>우리집</strong>
                      </td>
                      <td>홍길동</td>
                      <td>
                        <p>
                          (12345) 서울 영등포구 국회대로 54길 OO OOOO 아파트 2층
                          1203호
                        </p>
                      </td>
                      <td>010-1111-2222</td>
                      <td>
                        <div className="control">
                          <button type="button" className="button md gray">
                            보기
                          </button>
                          <button type="button" className="button md black">
                            수정
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default MyPageAddress;
