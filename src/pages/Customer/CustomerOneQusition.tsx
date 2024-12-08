import { useState } from "react";

const CustomerOneQusition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("유형을 선택하세요.");

  const options = [
    "회원",
    "상품",
    "주문/결제",
    "배송",
    "취소/환불",
    "반품/교환",
    "쿠폰/적립금",
    "기타",
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option); // 선택된 옵션 업데이트
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <div className="my_inquiry">
      <div className="inquiry_write">
        <table>
          <tbody>
            <tr>
              <th>유형</th>
              <td>
                <div className={`select_box ${isOpen ? "active" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {selectedOption}
                  </button>
                  <div>
                    <ul>
                      {options.map((item, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleOptionClick(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th>제목</th>
              <td>
                <input
                  type="text"
                  className="input"
                  placeholder="제목을 입력하세요."
                />
              </td>
            </tr>

            <tr>
              <th>내용</th>
              <td>
                <textarea
                  rows={5}
                  cols={100}
                  className="text_area"
                  placeholder="내용을 입력하세요."
                ></textarea>
              </td>
            </tr>

            <tr>
              <th>파일등록</th>
              <td>
                <style type="text/css"></style>
                <div className="upload">
                  <div className="file_item">
                    <input type="file" className="file" />
                    <input
                      type="text"
                      className="input"
                      placeholder="파일을 등록하세요."
                    />
                    <button type="button" className="button md gray">
                      파일찾기
                    </button>
                  </div>
                  <div className="file_item">
                    <input type="file" className="file" />
                    <input
                      type="text"
                      className="input"
                      placeholder="파일을 등록하세요."
                    />
                    <button type="button" className="button md gray">
                      파일찾기
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="btn_bottom">
        <button type="button" className="button lg white">
          취소
        </button>
        <button type="button" className="button lg black">
          등록
        </button>
      </div>

      <section className="notice">
        <h4 className="title">1:1 문의 안내사항</h4>
        <ul>
          <li>답변 등록시 회원정보에 등록된 연락처로 알림 메세지가 갑니다.</li>
        </ul>
      </section>
    </div>
  );
};
export default CustomerOneQusition;
