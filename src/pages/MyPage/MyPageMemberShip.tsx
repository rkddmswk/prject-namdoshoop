import MyPageNav from "../../components/layout/MyPageNav";
import cupon01 from "../../assets/images/pc/temp_coupon_01.jpg";

const MyPageMemberShip = () => {
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
                <h3 className="title">멤버쉽</h3>
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

            <div className="my_membership">
              <p className="name">홍길동 님의 등급</p>
              <p className="grade grade1">플래티넘</p>
              <p className="date">2024.01.01 ~ 2024.12.31</p>
              <div className="rank">
                <span className="progress">
                  <span className="bar" style={{ width: "10%" }}></span>
                </span>
                <ul>
                  <li className="rank_01">패밀리</li>
                  <li className="rank_02">실버</li>
                  <li className="rank_03">골드</li>
                  <li className="rank_04">플래티넘</li>
                </ul>
              </div>
            </div>

            <section className="coupon_box">
              <h3 className="title">멤버십 쿠폰</h3>
              <ul className="coupon_list">
                <li>
                  <div className="coupon_item">
                    <div className="thumb">
                      <img src={cupon01} width="248" height="128" alt="" />
                    </div>
                    <div className="detail">
                      <p className="name">9월 정기 쿠폰</p>
                      <p className="text">10%할인</p>
                      <p className="date">2024.08.01~08.31</p>
                      <div className="state">
                        <button type="button" className="button md gray">
                          사용전
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <section className="membership_tier">
              <h3 className="title">
                남도장터 등급에 따른 혜택을 확인해보세요
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>패밀리</th>
                    <th className="now">실버</th>
                    <th>골드</th>
                    <th>플래티넘</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>선정기준</td>
                    <td>
                      30만원 <br className="m" />
                      미만
                    </td>
                    <td className="now">
                      30만원 이상
                      <br className="m" /> ~ 60만원 미만
                    </td>
                    <td>
                      60만원
                      <br className="m" />
                      이상
                      <br className="m" /> ~ 100만원 <br className="m" />
                      미만
                    </td>
                    <td>
                      100만원
                      <br className="m" /> 이상
                    </td>
                  </tr>

                  <tr>
                    <td>
                      신규 가입
                      <br className="m" /> 적립금
                    </td>
                    <td>
                      30만원
                      <br className="m" /> 미만
                    </td>
                    <td className="now">-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      5%
                      <br className="m" /> 할인쿠폰
                    </td>
                    <td>-</td>
                    <td className="now">월 1회</td>
                    <td>월 2회</td>
                    <td>월 3회</td>
                  </tr>
                  <tr>
                    <td>
                      후기 작성
                      <br className="m" /> 적립금
                    </td>
                    <td>100원</td>
                    <td className="now">200원</td>
                    <td>300원</td>
                    <td>500원</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="membership_notice">
              <h3 className="title">멤버십 등급 기준</h3>
              <div className="detail">
                <ul>
                  <li>
                    2024년 남도장터 멤버스 등급 적용 기간 : 2024년 1월 1일 ~
                    2024년 12월 31일
                    <ul>
                      <li>*2024년 : 2024년 1월 1일 승급 진행</li>
                      <li>*2025년 : 2025년 1월 1일 승급 진행 예정</li>
                    </ul>
                  </li>
                  <li>
                    2024년 올리브 멤버스 등급 산정 기간 : 2023년 1월 1일 ~
                    2023년 12월 31일
                    <ul>
                      <li>*누적 구매 금액 기준으로 반영</li>{" "}
                    </ul>
                  </li>

                  <li>
                    2024년 등급은 2023년 12월 31일 기준 남도장터 홈페이지 회원
                    가입(이용약관 동의)이 확인된 회원의 실적이 반영됩니다.
                  </li>
                  <li>
                    남도장터 홈페이지 회원 가입(이용약관 동의)과 동시에 패밀리
                    등급이 부여됩니다.
                  </li>
                </ul>
              </div>
            </section>

            <section className="membership_notice">
              <h3 className="title">유의사항</h3>
              <div className="detail">
                <ul>
                  <li>
                    남도장터 등급 산정 시 실적으로 반영되는 누적 구매 금액은 실
                    결제 금액(적립금 결제 금액, 바우처카드 사용 금액 포함)
                    기준이며 제휴 할인, 쿠폰 할인, 배송비를 비롯하여,
                    기프트카드를 포함한 유가증권, 담배, 쇼핑 봉투 구매 금액은
                    제외됩니다.
                  </li>
                  <li>
                    쿠폰 혜택의 경우 쿠폰에 명시된 쿠폰 사용 기간 내에만 사용
                    가능하며, 추가 발급 및 재발행은 불가합니다.
                  </li>
                  <li>
                    쿠폰 혜택을 제외한 회원 혜택은 올리브영 홈페이지를 통해 별도
                    고지하며, 혜택의 성격에 따라 선착순 또는 추첨 방식으로
                    증정될 수 있습니다.
                  </li>
                  <li>
                    제휴카드 사용 시 CJ ONE 포인트는 올리브 멤버스 등급과
                    무관하게 결제 금액의 0.1% 적립, 포인트 제휴 할인 카드의 경우
                    카드사 기준에 따라 일부 상이
                  </li>
                  <li>
                    상기 회원 혜택은 당사의 사정에 의해 변경될 수 있습니다.
                  </li>
                  <li>
                    일부 쿠폰 혜택의 경우 제휴/임직원 카드 사용 시 중복 적용
                    불가합니다.
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
export default MyPageMemberShip;
