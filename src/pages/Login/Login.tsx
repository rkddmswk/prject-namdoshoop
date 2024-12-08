import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isUnMember, setIsUnMember] = useState(false);

  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">로그인</h2>
            <button
              type="button"
              className="btn_prev"
              onClick={() => {
                navigate(-1);
              }}
            >
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

        <div className="member_form login">
          <fieldset>
            <legend>로그인 폼 작성</legend>
            <div className="member_input">
              <input placeholder="아이디" type="text" />
            </div>
            <div className="member_input">
              <input placeholder="비밀번호" type="password" />
            </div>
            <div className="member_dtl">
              <label className="checkbox">
                <input type="checkbox" />
                <span>아이디 저장</span>
              </label>
              <a
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login/id");
                }}
              >
                아이디 찾기
              </a>
              <a
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login/pw");
                }}
              >
                비밀번호 찾기
              </a>
            </div>
            <div className="member_btn">
              <button className="btn btn_active" type="submit">
                로그인
              </button>
              <a
                className="btn"
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/membership");
                }}
              >
                회원가입
              </a>
            </div>
          </fieldset>

          <div className="member_simple">
            <h3>간편 로그인</h3>
            <button type="button" className="btn_kakao">
              카카오
            </button>
            <button type="button" className="btn_naver">
              네이버
            </button>
          </div>

          <div className="member_nonmem">
            <a
              href="!#"
              className="btn btn_gray"
              onClick={(e) => {
                e.preventDefault();
                setIsUnMember((prev) => !prev);
              }}
            >
              비회원 주문조회
            </a>
          </div>
        </div>

        <div className="member_benefit">
          <h3>회원 혜택</h3>
          <ul>
            <li className="benef1">
              <strong>가입하면 1,000원</strong>
              남도장터 회원이 되시면 가입
              <br />
              즉시 1,000원 적립됩니다.
            </li>
            <li className="benef2">
              <strong>우수회원 혜택</strong>
              매월 우수회원을 선별하여
              <br />
              적립금을 드립니다
            </li>
            <li className="benef3">
              <strong>소중한 포토후기 혜택!</strong>
              포토후기를 남겨주시면 추첨을
              <br />
              통해 다양한 혜택을 드립니다.
            </li>
          </ul>
        </div>
      </div>

      {isUnMember && (
        <div id="NonMemOrderInq" className="popup m_full">
          <div className="popup_inner">
            <section className="body">
              <div className="hd">
                <h2 className="title">비회원 주문조회</h2>
              </div>

              <div className="content">
                <div className="member_form nonmem">
                  <fieldset>
                    <legend>비회원 주문번호 폼 작성하기</legend>
                    <div className="member_input">
                      <label htmlFor="nonmemNo">주문번호</label>
                      <input
                        id="nonmemNo"
                        type="text"
                        placeholder="주문번호를 입력하세요"
                      />
                    </div>
                    <div className="member_input">
                      <label htmlFor="nonmemName">이름</label>
                      <input
                        id="nonmemName"
                        type="text"
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div className="member_input">
                      <label htmlFor="nonmemTel">전화번호</label>
                      <div className="tel">
                        <input id="nonmemTel" type="tel" placeholder="000" />
                        <span>-</span>
                        <input id="nonmemTel2" type="tel" placeholder="0000" />
                        <span>-</span>
                        <input id="nonmemTel3" type="tel" placeholder="0000" />
                      </div>
                    </div>
                  </fieldset>

                  <ul className="desc">
                    <li>
                      상품 주문 시 입력한 주문자 정보로 조회가 가능합니다.
                    </li>
                    <li>주문번호를 모르시는 경우 고객센터로 문의해주세요.</li>
                  </ul>

                  <div className="member_btn inline">
                    <button className="btn btn_white" type="reset">
                      취소
                    </button>
                    <button className="btn btn_black" type="submit">
                      조회하기
                    </button>
                  </div>

                  <div className="join">
                    <p>
                      남도장터 회원가입을 하시면 더 많은 혜택을 받으실 수
                      있습니다.
                    </p>
                    <a className="btn" href="#">
                      <i>회원가입</i>
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn_close"
                onClick={() => setIsUnMember((prev) => !prev)}
              >
                <span className="hide">닫기</span>
              </button>
            </section>
            <div className="dimmed"></div>
          </div>
        </div>
      )}
    </main>
  );
};
export default Login;
