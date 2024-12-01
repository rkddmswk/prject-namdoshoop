import ProductImg from "../../assets/images/pc/image.jpg";

const DetailContent = () => {
  const details = [
    {
      label: "품목 또는 명칭",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "포장 단위별 내용물의 용량 (중량), 수량, 크기",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "생산자 및 소재지",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    { label: "원산지", content: "해당 항목의 내용이 들어가는 위치입니다." },
    { label: "제조연월일", content: "해당 항목의 내용이 들어가는 위치입니다." },
    {
      label: "유통기한 / 소비기한",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "세부 품목군별 표시사항",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label:
        "식품 등의 표시, 광고에 관한 법률에 따른 소비자안전을 위한 주의사항",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
    {
      label: "소비자 상담 관련 전화번호",
      content: "해당 항목의 내용이 들어가는 위치입니다.",
    },
  ];

  return (
    <>
      <section className="section">
        <h3 className="hide">상세정보</h3>
        <section className="delivery_notice active">
          <h4>배송공지</h4>
          <ul>
            <li>
              택배사 파업으로 인하여 일부지역 배송 불가 또는 지연될 수 있으니
              주문 시 유의 부탁드립니다.
            </li>
            <li>
              상품 불량건의 경우 고객센터 접수 없이 임의로 폐기처분 및 반품 발송
              시 교환/반품/환불처리가 불가능하오니 수령하신 택배 박스 그대로
              보관하여 고객센터에 당일 문의 부탁드립니다.
            </li>
            <li>
              요청 사항에 배송일/배송메모 기재 시 반영되지 않을 수 있으며 개별
              연락 드릴 수 없는 점 참고부탁드립니다.
            </li>
            <li>
              요청 사항에 배송일/배송메모 기재 시 반영되지 않을 수 있으며 개별
              연락 드릴 수 없는 점 참고부탁드립니다.
            </li>
            <li>
              산지 상황에 따라 배송이 상이 할 수 있으며, 주문당일 발송은 불가능
              할 수 있습니다.
            </li>
            <li>
              주문건의 송장번호가 확인되지 않더라도 상품이 출고되었을 경우
              취소요청이 철회될 수 있습니다.
            </li>
          </ul>
          <button type="button" className="btn_toggle">
            <span className="hide">배공 공지 열기</span>
          </button>
        </section>

        <section className="detail_contents">
          <h4 className="hide">상품 설명</h4>
          <div>
            <img src={`${ProductImg}`} width="100%" alt="대충 이미지 출력" />
          </div>
        </section>
        <section className="products_info">
          <h4>상품 필수 정보</h4>
          <table>
            <tbody>
              {details.map((detail, index) => (
                <tr key={index}>
                  <th>{detail.label}</th>
                  <td>{detail.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};
export default DetailContent;
