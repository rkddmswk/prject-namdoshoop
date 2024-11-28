import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper 스타일
import "swiper/css/free-mode"; // FreeMode 모듈 스타일
import { FreeMode } from "swiper/modules";

const Nav = () => {
  const menuItems = [
    { text: "전체 카테고리", className: "btn_ham" },
    { text: "신상품" },
    { text: "세일상품" },
    { text: "추천상품" },
    { text: "기획전" },
    { text: "테마관" },
    { text: "시군몰" },
    { text: "이벤트" },
    { text: "커머스", className: "live", hasLive: true },
  ];

  return (
    <nav className="gnb swiper">
      <Swiper
        slidesPerView="auto" // 슬라이드 너비에 따라 설정
        freeMode={true} // 사용자가 자유롭게 스크롤 가능하도록 설정
        spaceBetween={"40px"} // 슬라이드 간의 간격
        modules={[FreeMode]}
        className="swiper-wrapper"
        style={{
          paddingLeft: "14px",
          boxSizing: "border-box",
          gap: 0,
        }}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className={item.className || ""}
            style={{
              width: "fit-content",
              flex: "1 0 auto",
            }}
          >
            <a href="#">
              {item.hasLive ? (
                <span>
                  <span className="hide">라이브</span>
                </span>
              ) : null}
              {item.text}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  );
};
export default Nav;
