import MyPageNav from "../../components/layout/MyPageNav";
import cupon01 from "../../assets/images/pc/temp_coupon_01.jpg";
import cupon02 from "../../assets/images/pc/temp_coupon_02.jpg";
import cupon03 from "../../assets/images/pc/temp_coupon_03.jpg";

const MyPageCupon = () => {
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
                <h3 className="title">쿠폰</h3>
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

            <div className="entry_coupon">
              <div className="box entry">
                <p>쿠폰을 등록해 주세요.</p>
                <div>
                  <input type="text" className="input md" />
                  <button type="button" className="button md2 black">
                    쿠폰<span className="m inline">등록</span>
                  </button>
                </div>
              </div>
              <div className="box list">
                <p>쿠폰 사용내역을 확인하세요.</p>
                <button type="button" className="button md2 black">
                  확인
                </button>
              </div>
            </div>

            <ul className="main_tab">
              <li className="active">
                <button type="button">보유 쿠폰</button>
              </li>
              <li>
                <button type="button">다운로드 가능한 쿠폰</button>
              </li>
            </ul>

            <section className="coupon_box">
              <h3 className="title hide">보유 쿠폰</h3>
              <ul className="coupon_list">
                <li className="coupon_item">
                  <div className="thumb">
                    <img src={cupon01} width="248" height="128" alt="" />
                  </div>
                  <div className="detail">
                    <p className="name">9월 정기 쿠폰</p>
                    <p className="text">
                      10%할인
                      <span className="condition">
                        (최소주문금액: 20,000원)
                      </span>
                    </p>
                    <p className="date">2024.08.01~08.31</p>
                    <div className="cash">
                      <span>
                        <strong>잔여횟수:</strong> 5회
                      </span>
                      <span>
                        <strong>잔여한도:</strong> 99,000원
                      </span>
                    </div>
                    <div className="state">
                      <button type="button" className="button md gray">
                        사용전
                      </button>
                    </div>
                  </div>
                </li>
                <li className="coupon_item ing">
                  <div className="thumb">
                    <img src={cupon02} width="248" height="128" alt="" />
                  </div>
                  <div className="detail">
                    <p className="name">9월 정기 쿠폰</p>
                    <p className="text">
                      10%할인
                      <span className="condition">
                        (최소주문금액: 20,000원)
                      </span>
                    </p>
                    <p className="date">2024.08.01~08.31</p>
                    <div className="state">
                      <button type="button" className="button md gray">
                        사용중
                      </button>
                    </div>
                  </div>
                </li>
                <li className="coupon_item end">
                  <div className="thumb">
                    <img src={cupon03} width="248" height="128" alt="" />
                  </div>
                  <div className="detail">
                    <p className="name">9월 정기 쿠폰</p>
                    <p className="text">10%할인</p>
                    <p className="date">2024.08.01~08.31</p>
                    <div className="state">
                      <button type="button" className="button md gray">
                        사용완료
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <button type="button" className="btn_more">
                더보기
              </button>
            </section>

            <section className="membership_notice bdt">
              <h3 className="title">유의사항</h3>
              <div className="detail">
                <ul>
                  <li>
                    혜택 금액 소진시 쿠폰이 자동회수되어 결제 단계에서 사용이
                    불가능할 수 있습니다.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
export default MyPageCupon;
