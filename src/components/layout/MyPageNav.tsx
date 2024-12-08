import { useNavigate } from "react-router-dom";
import myPageMenu from "../common/json/mypageMenu";

const MyPageNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        {myPageMenu.map((item, index) => (
          <li key={index}>
            <b>{item.topLabel}</b>
            <ul>
              {item.children.map((child, index) => (
                <li key={index}>
                  <a
                    href="!#"
                    // className="active"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`${child.url}`);
                    }}
                  >
                    {child.text}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MyPageNav;
