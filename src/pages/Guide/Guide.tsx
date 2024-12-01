const Guide = () => {
  return (
    <main className="sub_content">
      <section className="ft_container">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">이용안내</h2>
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

        <div className="ft_inner">
          <h3>회원가입</h3>

          <div className="box">
            <div className="inner">
              <h4 className="tt_m1">개인회원</h4>
              <ul>
                <li>
                  [회원가입] 메뉴를 통해 이용약관, 개인정보보호정책 동의 및 일정
                  양식의 가입항목을 기입함으로써 회원에 가입되며, 가입 즉시
                  서비스를 무료로 이용하실 수 있습니다.
                </li>
                <li>
                  주문하실 때에 입력해야하는 각종 정보들을 일일이 입력하지
                  않으셔도 됩니다.{" "}
                </li>
                <li>
                  회원을 위한 이벤트 및 각종 할인행사에 참여하실 수 있습니다.
                </li>
              </ul>
            </div>

            <div className="inner">
              <h4 className="tt_m2">사업자회원</h4>
              <ul>
                <li>
                  [회원가입] 메뉴를 통해 이용약관, 개인정보보호정책 동의 및 일정
                  양식의 가입항목을 기입함으로써 회원에 가입되며, 가입 즉시
                  서비스를 무료로 이용하실 수 있습니다.
                </li>
                <li>
                  주문하실 때에 입력해야하는 각종 정보들을 일일이 입력하지
                  않으셔도 됩니다.
                </li>
                <li>대량주문이 가능합니다.</li>
                <li>
                  회원을 위한 이벤트 및 각종 할인행사에 참여하실 수 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ft_inner">
          <h3>주문</h3>
          <p>상품주문은 다음단계로 이루어집니다.</p>
          <p>
            비회원 주문인경우 6단계에서 주문번호와 승인번호(카드결제시)를 꼭
            메모해 두시기 바랍니다. 단, 회원인 경우 자동 저장되므로 따로
            관리하실 필요가 없습니다.
          </p>
          <div className="box_step">
            <ol>
              <li className="step1">
                <strong>Step1</strong>
                <span>상품 검색</span>
              </li>
              <li className="step2">
                <strong>Step2</strong>
                <span>장바구니에 담기</span>
              </li>
              <li className="step3">
                <strong>Step3</strong>
                <span>
                  회원ID 로그인 <span>또는 비회원 주문</span>
                </span>
              </li>
              <li className="step4">
                <strong>Step4</strong>
                <span>주문서 작성</span>
              </li>
              <li className="step5">
                <strong>Step5</strong>
                <span>결제방법선택 및 결제</span>
              </li>
              <li className="step6">
                <strong>Step6</strong>
                <span>
                  주문 성공 화면 <span>(주문번호)</span>
                </span>
              </li>
            </ol>
          </div>
        </div>

        <div className="ft_inner">
          <h3>결제</h3>
          <p>
            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
            있습니다.
            <br />
            확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
            아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
          </p>
          <p>
            무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
            가까운 은행에서 직접 입금하시면 됩니다.
            <br />
            주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
            7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
          </p>
        </div>

        <div className="ft_inner">
          <h3>배송</h3>
          <p>상품주문은 다음단계로 이루어집니다.</p>
          <ul>
            <li>배송 방법 : 택배</li>
            <li>배송 지역 : 전국지역</li>
            <li>배송 비용 : 판매처 정책에 따름</li>
            <li>배송 기간 : 2일 ~ 4일</li>
            <li>
              배송 안내 :
              <span>
                - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가
                있습니다.{" "}
              </span>
              <span>
                - 고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만,
                상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
              </span>
            </li>
          </ul>
        </div>

        <div className="ft_inner">
          <h3>교환/반품</h3>
          <div className="box_vert">
            <h4>가능한 경우</h4>
            <ul>
              <li>
                상품을 수령하신 날로부터 3일이내, 상품에 가치가 상실 된 경우
                상품사진 / 박스사진과 함께 고객센터로 접수 부탁드립니다.
                <br />
                (단, 상세페이지 미확인으로 인한 귀책사유 및 상품을 이미
                폐기하셨거나 섭취하셨을 경우 처리가 불가 할 수 있으니 이 점 참고
                바랍니다.)
              </li>
              <li>
                공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나
                다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그 사실을 알게
                된 날로부터 30일내
              </li>
              <li>
                구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히
                감소한 경우
              </li>
            </ul>
          </div>
          <div className="box_vert">
            <h4>불가능한 경우</h4>
            <div>
              <ul>
                <li>
                  고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단,
                  상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
                </li>
                <li>
                  포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
                  (예: 식품 등)
                </li>
                <li>
                  구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히
                  감소한 경우
                </li>
                <li>
                  시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가
                  현저히 감소한 경우
                </li>
                <li>복제가 가능한 상품등의 포장을 훼손한 경우</li>
                <li>고객주문 확인 후 상품제작에 들어가는 주문제작상품</li>
                <li>식품 특성상 변심에 의한 반품은 불가합니다.</li>
                <li>상세페이지 미확인으로 인한 불찰</li>
                <li>
                  구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히
                  감소한 경우
                </li>
              </ul>
              <p>
                ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
                고객님께서 부담하셔야 합니다. (식품은 변심에 의한 교환/반품이
                어려울 수 있습니다)
              </p>
            </div>
          </div>
        </div>

        <div className="ft_inner">
          <h3>환불</h3>
          <p>
            환불시 반품 확인여부를 확인한 후 3영업일 이내에 결제 금액을 환불해
            드립니다.
          </p>
          <p>
            신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이
            청구되지 않게 합니다. <br />
            (단, 신용카드 결제일자에 맞추어 대금이 청구 될수 있으면 이경우 익월
            신용카드 대금청구시 카드사에서 환급처리 됩니다.)
          </p>
        </div>

        <div className="ft_inner">
          <h3>적립금</h3>
          <div className="box_vert">
            <h4>이용기간</h4>
            <ul>
              <li>
                주문으로 발생한 적립금은 배송완료 체크시점으로 부터 20일이
                지나야 실제 사용 가능 적립금으로 변환(20일 동안은 미가용 적립금)
              </li>
              <li>
                미가용 적립금은 반품, 구매취소 등을 대비한 실질적인 구입이 되지
                않은 주문의 적립금
              </li>
              <li>
                사용가능한 적립금(총 적립금-사용된적립금-미가용적립금)은
                상품구매시 즉시 사용 가능
              </li>
            </ul>
          </div>
          <div className="box_vert">
            <h4>이용조건</h4>
            <ul>
              <li>
                적립금 사용시 최소구매가능적립금(구매가능한 적립금 요구선)은 0원
              </li>
              <li>
                적립금 사용시 최대구매가능적립금(적립금 1회 사용 가능
                최대금액)은 '한도제한없음'
              </li>
            </ul>
          </div>
          <div className="box_vert">
            <h4>소멸조건</h4>
            <ul>
              <li>주문취소/환불시에 상품구매로 적립된 적립금은 함께 취소됨</li>
              <li>회원 탈퇴시에는 적립금은 자동적으로 소멸</li>
              <li>
                최종 적립금 발생일로부터 3년 동안 추가적립금 누적이 없을
                경우에도 적립금은 소멸
              </li>
            </ul>
          </div>
        </div>
      </section>

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
export default Guide;
