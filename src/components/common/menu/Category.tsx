import { useState } from "react";
import ProductList from "../../../pages/Product/ProductList";
import { useNavigate } from "react-router-dom";

// 전체카테고리
const Menu = ({ isMenu, closeMenu }: any) => {
  // const menu = [
  //   "쌀/잡곡",
  //   "과일/견과",
  //   "채소류",
  //   "축산물",
  //   "수산물",
  //   "가공식품",
  //   "전통식품",
  //   "건강식품",
  //   "생활용품",
  // ];
  // const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  // const handleCloseHandler = () => {
  //   setIsVisible((prev) => !prev);
  // };

  const handleProductList = (e: any) => {
    e.preventDefault();
    closeMenu();
    navigate("/productList");
  };
  return (
    <>
      {/* <section className="total_category">
        <div className="head">
          <div className="head_inner">
            <h2>전체 카테고리</h2>
            <button type="button" className="btn_close">
              <span className="hide">전체 메뉴 닫기</span>
            </button>
          </div>
        </div>
        <div className="menu_inner">
          <ul className="cate_list">
            {menu.map((category, index) => (
              <li key={index} className={index === 0 ? "on" : ""}>
                <a href="#" className={`depth_01 menu_0${index + 1}`}>
                  {category}
                </a>
                <ul>
                  <li>
                    <a href="#" className="depth_02">
                      전체
                    </a>
                  </li>
                  {Array(5)
                    .fill("백미")
                    .map((item, idx) => (
                      <li
                        key={idx}
                        className={idx === 0 && index === 0 ? "on" : ""}
                      >
                        <a href="#" className="depth_02">
                          {item}
                        </a>
                        {idx === 0 && index === 0 && (
                          <ul>
                            {Array(4)
                              .fill("10K")
                              .map((subitem, subIdx) => (
                                <li
                                  key={subIdx}
                                  className={subIdx === 0 ? "on" : ""}
                                >
                                  <a href="#" className="depth_03">
                                    {subitem}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
      {isMenu && (
        <section className="total_category on">
          <div className="head">
            <div className="head_inner">
              <h2>전체 카테고리</h2>
              <button
                type="button"
                className="btn_close"
                // onClick={handleCloseHandler}
              >
                <span className="hide">전체 메뉴 닫기</span>
              </button>
            </div>
          </div>
          <div className="menu_inner">
            <ul className="cate_list">
              <li className="on">
                <a href="#" className="depth_01 menu_01">
                  쌀/잡곡
                </a>
                <ul>
                  <li>
                    <a href="#" className="depth_02">
                      전체
                    </a>
                  </li>
                  <li className="on">
                    <a href="#" className="depth_02">
                      백미
                    </a>
                    <ul>
                      <li className="on">
                        <a href="#" className="depth_03">
                          10K
                        </a>
                      </li>
                      <li>
                        <a href="#" className="depth_03">
                          10K
                        </a>
                      </li>
                      <li>
                        <a href="#" className="depth_03">
                          10K
                        </a>
                      </li>
                      <li>
                        <a href="#" className="depth_03">
                          10K
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      쌀/견과/냉동과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      현미/찹쌀/견과/견과
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      기타과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      과일선물세트
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="depth_01 menu_02">
                  과일/견과
                </a>
                <ul>
                  <li>
                    <a href="#" className="depth_02">
                      전체
                    </a>
                  </li>
                  <li onClick={handleProductList}>
                    <a href="#" className="depth_02">
                      백미
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      쌀/견과/냉동과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      현미/찹쌀/견과/견과
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      기타과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      과일선물세트
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="depth_01 menu_03">
                  채소류
                </a>
                <ul>
                  <li>
                    <a href="#" className="depth_02">
                      전체
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      백미
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      쌀/견과/냉동과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      현미/찹쌀/견과/견과
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      기타과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      과일선물세트
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="depth_01 menu_04">
                  축산물
                </a>
                <ul>
                  <li>
                    <a href="#" className="depth_02">
                      전체
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      백미
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      쌀/견과/냉동과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      현미/찹쌀/견과/견과
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      기타과일
                    </a>
                  </li>
                  <li>
                    <a href="#" className="depth_02">
                      과일선물세트
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
export default Menu;
