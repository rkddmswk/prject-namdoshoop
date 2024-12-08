const MembershipInfo = () => {
  return (
    <main className="sub_content">
      <div className="member">
        <div className="sub_header">
          <div className="inner">
            <h2 className="title">회원가입</h2>
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

        <div className="member_joinform">
          <p className="member_notice m">회원정보를 입력해주세요.</p>
          <div className="member_table">
            <table>
              <tr>
                <th>
                  아이디 <span className="imp">*</span>
                </th>
                <td className="m_box">
                  <div className="box inputbox">
                    <input
                      type="text"
                      className="input"
                      placeholder="영문, 숫자 조합으로 8자이상"
                    />
                    <button type="button" className="button normal ">
                      중복조회
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <th>
                  비밀번호 <span className="imp">*</span>
                </th>
                <td className="m_box">
                  <div className="box inputbox">
                    <input
                      type="password"
                      className="input"
                      placeholder="영문, 숫자, 특수문자 조합으로 10자 이상"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th>
                  비밀번호 확인 <span className="imp">*</span>
                </th>
                <td className="m_box">
                  <div className="box inputbox">
                    <input
                      type="password"
                      className="input"
                      placeholder="영문, 숫자, 특수문자 조합으로 10자 이상"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <th>비밀번호 확인 (불일치시 샘플)</th>
                <td className="m_box">
                  <div className="box inputbox">
                    <input
                      type="password"
                      className="input imp"
                      placeholder="비밀번호가 일치 하지 않습니다."
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <h3 className="head head_sns">
            간편 로그인 sns
            <span className="btn_naver">네이버</span>
            <span className="btn_kakao">카카오</span>
          </h3>

          <div className="member_table">
            <table cellPadding="0" cellSpacing="0" border={0}>
              <tbody>
                <tr>
                  <th>
                    이름 <span className="imp">*</span>
                  </th>
                  <td colSpan={5}>
                    <div className="m_box">
                      <div className="box inputbox">
                        <input
                          type="text"
                          className="input"
                          placeholder="이름을 입력해주세요"
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>
                    연락처 <span className="imp">*</span>
                  </th>
                  <td colSpan={5}>
                    <div className="m_box">
                      <div className="box cell">
                        <input type="text" className="input" readOnly />
                        <span className="bar">-</span>
                        <input type="text" className="input" readOnly />
                        <span className="bar">-</span>
                        <input type="text" className="input" readOnly />
                        <button type="button" className="button normal ">
                          본인인증
                        </button>
                      </div>
                      <div className="box">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>문자 수신동의</span>
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>전화번호</th>
                  <td colSpan={5}>
                    <div className="m_box">
                      <div className="box cell">
                        <input type="text" className="input" />
                        <span className="bar">-</span>
                        <input type="text" className="input" />
                        <span className="bar">-</span>
                        <input type="text" className="input" />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>
                    이메일 <span className="imp">*</span>
                  </th>
                  <td colSpan={5}>
                    <div className="m_box">
                      <div className="box email">
                        <input type="text" className="input" />
                        <span className="bar">@</span>
                        <input type="text" className="input" />
                      </div>
                      <div className="box email">
                        <div className="select_box">
                          <button type="button">직접입력</button>
                          <div>
                            <ul>
                              <li>
                                <button type="button">1</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>메일 수신동의</span>
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>
                    생년월일 <span className="imp">*</span>
                  </th>
                  <td colSpan={5}>
                    <div className="m_box">
                      <div className="box birth">
                        <div className="select_box">
                          <button type="button">2001</button>
                          <div>
                            <ul>
                              <li>
                                <button type="button">1</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="select_box">
                          <button type="button">1</button>
                          <div>
                            <ul>
                              <li>
                                <button type="button">1</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="select_box">
                          <button type="button">1</button>
                          <div>
                            <ul>
                              <li>
                                <button type="button">1</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <label className="radio">
                          <input type="radio" checked />
                          <span>남</span>
                        </label>
                        <label className="radio">
                          <input type="radio" />
                          <span>여</span>
                        </label>
                        <span className="cert">
                          본인인증여부<em>Y</em>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>
                    주소 <span className="imp">*</span>
                  </th>
                  <td colSpan={5}>
                    <div className="m_box">
                      <div className="box addr">
                        <input
                          type="text"
                          className="input"
                          placeholder="우편번호"
                        />
                        <button type="button" className="button normal">
                          우편번호 검색
                        </button>
                      </div>
                      <div className="box addr2">
                        <input
                          type="text"
                          className="input"
                          placeholder="기본주소"
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th className="m_hide">
                    상세주소 <span className="imp">*</span>
                  </th>
                  <td colSpan={5}>
                    <input
                      type="text"
                      className="input"
                      placeholder="상세주소"
                    />
                  </td>
                </tr>

                <tr className="support_code">
                  <th>추천인아이디</th>
                  <td>
                    <input
                      type="text"
                      className="input"
                      placeholder="추천인아이디"
                    />
                  </td>
                  <th>그룹코드(제휴)</th>
                  <td>
                    <input type="text" className="input" readOnly />
                  </td>
                  <th>그룹코드(이벤트)</th>
                  <td>
                    <input type="text" className="input" readOnly />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="head">업체정보</h4>
          <div className="member_table">
            <table cellPadding="0" cellSpacing="0" border={0}>
              <tbody>
                <tr>
                  <th>
                    업체명 <span className="imp">*</span>
                  </th>
                  <td className="m_box">
                    <div className="box inputbox">
                      <input
                        type="text"
                        className="input"
                        placeholder="업체명을 입력해주세요."
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    대표자명 <span className="imp">*</span>
                  </th>
                  <td className="m_box">
                    <div className="box inputbox">
                      <input
                        type="text"
                        className="input"
                        placeholder="대표자명을 입력해주세요."
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    사업자등록번호 <span className="imp">*</span>
                  </th>
                  <td className="m_box">
                    <div className="box inputbox">
                      <input
                        type="text"
                        className="input"
                        value="123-45-67890"
                        readOnly
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>대표번호</th>
                  <td className="m_box">
                    <div className="box cell">
                      <input type="text" className="input" />
                      <span className="bar">-</span>
                      <input type="text" className="input" />
                      <span className="bar">-</span>
                      <input type="text" className="input" />
                    </div>
                    <div className="box"></div>
                  </td>
                </tr>
                <tr>
                  <th>
                    주소 <span className="imp">*</span>
                  </th>
                  <td className="m_box">
                    <div className="box addr">
                      <input
                        type="text"
                        className="input"
                        placeholder="우편번호"
                      />
                      <button type="button" className="button normal">
                        우편번호 검색
                      </button>
                    </div>
                    <div className="box addr2">
                      <input
                        type="text"
                        className="input"
                        placeholder="기본주소"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="m_hide">
                    상세주소 <span className="imp">*</span>
                  </th>
                  <td>
                    <input
                      type="text"
                      className="input"
                      placeholder="상세주소"
                    />
                  </td>
                </tr>
                <tr>
                  <th>업태</th>
                  <td className="m_box">
                    <div className="box biz">
                      <input
                        type="text"
                        className="input"
                        placeholder="sample"
                      />
                    </div>
                    <div className="box biz2">
                      <label className="label">종목</label>
                      <input
                        id="biz2"
                        type="text"
                        className="input"
                        placeholder="sample"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="member_agree">
            <h3>개인정보 수집 및 이용약관 동의</h3>
            <ul>
              <li>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>모든 약관에 동의합니다.</span>
                </label>
              </li>
              <li>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>(필수) 남도장터 이용약관</span>
                </label>
                <a href="#">약관보기</a>
              </li>
              <li>
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>(필수) 남도장터 개인정보 수집 및 이용 동의</span>
                </label>
                <a href="#">약관보기</a>
              </li>
            </ul>
          </div>

          <div className="member_btn">
            <button className="btn btn_active" type="submit">
              회원가입 완료하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MembershipInfo;
