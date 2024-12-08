import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavCustomer = ({ children }: any) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("공지사항");

  const sideMenu = [
    {
      label: "공지사항",
      url: "/customer/notice",
      id: 1,
    },
    {
      label: "자주 묻는 질문",
      url: "/customer/qusition",
      id: 2,
    },
    {
      label: "1:1 문의",
      url: "/customer/oneQusition",
      id: 3,
    },
    {
      label: "입점 신청",
      url: "/customer/apply",
      id: 4,
    },
  ];

  const handleMenuClick = (id: number) => {
    console.log(id);
    const selectMenu = sideMenu.find((menu) => menu.id === id);
    if (selectMenu) {
      setTitle(selectMenu.label);
      navigate(selectMenu.url);
    }
  };

  return (
    <>
      {/* 고객센터 */}
      <section className="cs">
        <div className="menu_wrap">
          <h2>고객센터</h2>
          <ul>
            {sideMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href="!#"
                  onClick={(e) => {
                    e.preventDefault();
                    // handleMenuClick(menu.id);
                    setTitle(menu.label);
                    navigate(`${menu.url}`);
                  }}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="contents_wrap">
          {/*  sub header */}
          <div className="sub_header">
            <div className="inner">
              <h3 className="title">{title}</h3>
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
          {/*  sub header end */}
          {children}
        </div>
      </section>
    </>
  );
};
export default NavCustomer;
