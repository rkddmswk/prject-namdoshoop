const CustomerApply = () => {
  return (
    <div className="cs_entry_dtl">
      <div className="head">
        <h4>남도장터 입점자격 및 상품 선정기준</h4>

        <div className="tooltip_sns active">
          <button className="btn_sns" type="button">
            <span className="hide">SNS 공유하기</span>
          </button>
          <div className="text">
            <dl>
              <dt>공유하기</dt>
              <dd>
                <button type="button" className="url">
                  URL복사
                </button>
                <button type="button" className="kakao">
                  카카오톡
                </button>
                <button type="button" className="facebook">
                  페이스북
                </button>
              </dd>
            </dl>
            <button type="button" className="btn_close">
              <span className="hide">닫기</span>
            </button>
          </div>
        </div>
      </div>

      <ul>
        <li>사업자등록 상 소재지가 전라남도에 속하는 경우</li>
        <li>등록일 현재 농수산업에 종사하면서 식품제조 허가를 받은 자</li>
        <li>
          등록할 상품을 안정적으로 판매할 수 있도록 일정 규모 이상 생산하는 자
          <br />→ 농산물, 수산물 공히 공급 물량을 확보할 수 있는 면적
        </li>
        <li>기타 전라남도가 입점할 자격이 있다고 인정하는 생산자나 단체</li>
      </ul>

      <div className="head">
        <h4>남도장터 입점 절차</h4>
      </div>

      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th scope="col">구분</th>
            <th scope="col">주요내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">선정기준</th>
            <td>
              <p>[입점 신청 서류 접수]</p>
              <ul>
                <li>접수시기 : 연 중</li>
                <li>전라남도 시•군 담당자 추천</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">
              신청서류 검토
              <br className="pc" />
              (서류심사)
            </th>
            <td>
              <p>[전라남도 농수산물 전자상거래 적격심사]</p>
              <ul>
                <li>심사자 : 시, 군 업무담당자</li>
                <li>통신판매업 신고증 등 구비서류 확인</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">입점업체 현장실사</th>
            <td>
              <p>[시•군별 서류심사 합격업체 현장실사]</p>
              <ul>
                <li>조사자 : 시•군 담당자 및 남도장터 운영요원</li>
                <li>방법 : 방문조사 및 인터넷 홈페이지</li>
                <li>판매수수료, 결제, 배송시스템 등 사전 안내</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">입점업체 선정 및 품목 분류</th>
            <td>
              <p>[입점업체 선정 및 입점품목 선정]</p>
              <ul>
                <li>대상 : 입점업체 현장실사 적격업체</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">선정결과 통보</th>
            <td>
              <p>[입점업체 및 입점품목 선정결과 통보]</p>
            </td>
          </tr>
          <tr>
            <th scope="row">입력자료 조사</th>
            <td>
              <p>[전산입력 자료조사]</p>
              <ul>
                <li>대상 : 입점업체</li>
                <li>업체정보 및 상품정보 취합 및 촬영</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">입점상품 정보등록</th>
            <td>
              <p>[입점업체 및 입점 상품정보 DB 등록]</p>
            </td>
          </tr>
          <tr>
            <th scope="row">판매 개시</th>
            <td>
              <p>[남도장터를 통하여 해당상품 판매 개시]</p>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        위의 사항에 적합한 업체는 첨부파일에 있는 입점신청서를 작성
        부탁드립니다.
        <br />
        추가로 사업자등록증 사본, 통장사본, 통신판매업신고증, 상품에 해당하는
        각종 인증 서류들을 같이 관할 시•군청에 접수하여 신청해주시기 바랍니다.{" "}
      </p>
      <p>
        추가 문의사항은 join@namdomarket.or.kr 으로 문의 주시면
        답변드리겠습니다.
      </p>
      <p>감사합니다.</p>

      <div className="cs_filedown">
        <a href="#" download>
          <span>
            전라남도 온라인 쇼핑몰 남도장터 운영 규정 시행규칙(개정본) (1).hwp
          </span>
        </a>
      </div>

      <div className="cs_btnarea mb0">
        <button type="button" className="button lg black">
          입점 신청하기
        </button>
      </div>
    </div>
  );
};
export default CustomerApply;
