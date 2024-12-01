import { useState } from "react";

const SelectBox = ({ buttonLabel }: any) => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태 관리
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option); // 선택된 옵션 업데이트
    setIsOpen(false); // 드롭다운 닫기
  };

  const options = [
    "인기순",
    "낮은가격순",
    "높은가격순",
    "평점높은순",
    "후기많은순",
    "최근등록순",
  ];

  return (
    <>
      <button type="button" className="text" onClick={toggleDropdown}>
        {selectedOption || buttonLabel}
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button type="button" onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* <label htmlFor="optionSelect">옵션 선택(필수)</label>
      <select id="optionSelect" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          옵션을 선택하세요
        </option>
        <option value="인기순">인기순</option>
        <option value="낮은가격순">낮은가격순</option>
        <option value="높은가격순">높은가격순</option>
        <option value="평점높은순">평점높은순</option>
        <option value="후기많은순">후기많은순</option>
        <option value="최근등록순">최근등록순</option>
      </select>
      {selectedOption && (
        <p>
          선택된 옵션: <strong>{selectedOption}</strong>
        </p>
      )} */}
    </>
  );
};
export default SelectBox;
