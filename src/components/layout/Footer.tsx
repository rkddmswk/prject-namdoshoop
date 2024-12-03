import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 메인 푸터
const Footer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Family site");

  const siteInfo = [
    {
      label: "남도장터 소개",
    },
    {
      label: "개인정보처리방침",
      url: "/privacy",
    },
    {
      label: "이용약관",
      url: "/use",
    },
    {
      label: "이용안내",
      url: "/guide",
    },
  ];

  const footerInfo = [
    {
      className: "sns_facebook",
      label: "Facebook",
    },
    {
      className: "sns_instargram",
      label: "Instargram",
    },
    {
      className: "sns_youtube",
      label: "Youtube",
    },
  ];

  const options = [
    {
      label: "전라남도청",
    },
    {
      label: "재단법인 남도장터",
    },
    {
      label: "가나다라마사아",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <footer className="footer_container">
      <div className="site_info">
        <ul>
          {siteInfo.map((item, index) => (
            <li key={index}>
              <a
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`${item.url}`);
                  window.scrollTo({ top: 0 });
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer_info">
        <ul className="sns">
          {footerInfo.map((item, index) => (
            <li key={index}>
              <a
                href="!#"
                target="_blank"
                className={item.className}
                onClick={(e) => e.preventDefault}
              >
                <span className="hide">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className={`fm_site ${isOpen ? "on" : ""}`}>
          <a
            href="!#"
            className="text"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            {selectedOption}
          </a>
          {isOpen && (
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <a
                    href="!#"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOptionClick(option);
                    }}
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* <ul>
            <li>
              <a href="#" target="_blank">
                전라남도청
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                재단법인 남도장터
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                가나다라마사아
              </a>
            </li>
          </ul> */}
        </div>

        <p className="text_customer">
          <strong>
            고객센터 <span>1688-4888</span>
          </strong>
          <span>평일 10:00 ~ 18:00 (주말/공휴일 휴무)</span>
        </p>
        <p className="c_name">(주)우리들이야기</p>
        <address>
          <span className="address">
            61027) 광주광역시 북구 하서로 672번길 25
          </span>
          <span>/</span> <span>대표 : 윤세운</span>
          <br className="m" />
          <span className="pc inline">/</span> 개인정보 관리 책임자 : 김은정
          <span>/</span>
          <span>
            <a href="#">westory7979@naver.com</a>
          </span>
          <br />
          <span>통신판매업신고번호 : 2020-광주북구-0683</span>
          <span className="pc inline">/</span>
          <br className="m" /> <span>사업자등록번호 : 267-87-01748</span>
          <span>/</span>
          <span>
            <a href="#">사업자정보확인</a>
          </span>
        </address>
        <p className="text_info">
          ※ 남도장터는 재단법인 남도장터 위탁으로 (주)우리들이야기에서 관리하는
          쇼핑몰입니다.
        </p>
        <p className="c_name">
          <strong>재단법인 남도장터</strong>
        </p>
        <address>
          <span className="address">
            (58567) 전라남도 무안군 삼향읍 후광대로 282, 4층
          </span>
          <span>/</span> <span>대표 : 김경호</span>
          <span>/</span> <span>개인정보 관리 책임자 : 황지연</span>
          <span>/</span>
          <span>
            <a href="#">wldus4923@naver.com</a>
          </span>
          <br /> <span>통신판매업신고번호 : 2023-전남무안-0228</span>
          <span>/</span>
          <span>사업자등록번호 : 871-82-00432</span>
        </address>
        <p className="text_info_02">
          재단법인 남도장터 구매안전(에스크로) 서비스 가맹점
          <br />
          고객님의 모든 거래 결제시 저희 쇼핑몰에서 가입한 LG U+ 전자결제의
          매매보호 (에스크로)서비스를 이용하실 수 있습니다.
        </p>
        <p className="text_cp">
          Copyright (c) 2024 남도장터 All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
