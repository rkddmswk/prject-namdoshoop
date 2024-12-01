const QuestionsContent = () => {
  return (
    <>
      <section className="section inquiry_wrap">
        <h3 className="title">상품문의</h3>
        <div className="inquiry_write">
          <button type="button" className="btn_inquiry">
            상품문의 작성
          </button>
        </div>
        <div className="list">
          <div className="hd">
            <p className="count">총 8개</p>
            <label className="checkbox my_inquiry">
              <input type="checkbox" />
              <span>내 문의 보기</span>
            </label>
          </div>

          <table className="inquiry_table">
            <thead>
              <tr>
                <th className="col_01">답변상태</th>
                <th className="col_02">제목</th>
                <th className="col_03">작성자</th>
                <th className="col_04">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr className="inquiry">
                <td className="state">
                  <span className="wait">답변대기</span>
                </td>
                <td className="text">
                  <button type="button">
                    소비기한 문의소비기한 문의소비기한 문의소비기한 문의소비기한
                    문의소비기한 문의소비기한 문의소비기한 문의소비기한
                    문의소비기한 문의소비기한 문의소비기한 문의소비기한
                    문의소비기한 문의소비기한 문의소비기한 문의소비기한
                    문의소비기한 문의
                  </button>
                </td>
                <td className="user">magi****</td>
                <td className="date">2024-08-31</td>
              </tr>
              <tr className="content">
                <td className="state">
                  <span className="hide">문의 내용</span>
                </td>
                <td className="text">
                  대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
                  법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
                  있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를
                  진다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을
                  표시할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는
                  10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.
                </td>
                <td>magi****</td>
                <td>2024-08-31</td>
              </tr>
              <tr className="reply">
                <td className="state">
                  <span className="hide">답변</span>
                </td>
                <td className="text"></td>
                <td className="user"></td>
                <td className="date"></td>
              </tr>

              <tr className="inquiry">
                <td className="state">
                  <span className="wait">답변대기</span>
                </td>
                <td className="text">
                  <button type="button" className="secret">
                    소비기한 문의
                  </button>
                </td>
                <td className="user">magi****</td>
                <td className="date">2024-08-31</td>
              </tr>
              <tr className="content active">
                <td className="state">
                  <span className="hide">문의 내용</span>
                </td>
                <td className="text">
                  대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
                  법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
                  있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를
                  진다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을
                  표시할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는
                  10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.
                </td>
                <td className="user">magi****</td>
                <td className="date">2024-08-31</td>
              </tr>
              <tr className="reply">
                <td className="state">
                  <span className="hide">답변</span>
                </td>
                <td className="text">
                  대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
                  법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
                  있다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를
                  진다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을
                  표시할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는
                  10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.
                </td>
                <td className="user">magi****</td>
                <td className="date">2024-08-31</td>
              </tr>
            </tbody>
          </table>

          <div className="page">
            <a href="#" className="prev active">
              <span className="hide">이전</span>
            </a>
            <span className="num">
              <a href="#" className="current">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </span>
            <a href="#" className="next">
              <span className="hide">다음</span>
            </a>
          </div>
        </div>

        {/* 상품문의 작성 */}
        <div className="popup m_full" style={{ display: "none" }}>
          <div className="popup_inner">
            <section className="body">
              <div className="hd">
                <h4 className="title">상품문의 작성</h4>
              </div>
              <div className="content inquiry_popup">
                <div className="product">
                  <div className="thumb">
                    <img
                      src="../images/pc/temp_thumb_09.jpg"
                      width="80"
                      height="89"
                      alt=""
                    />
                  </div>
                  <p>
                    <span>남도농산</span>
                    식사대용 가벼운 한끼 단백한 오트쉐이크
                  </p>
                </div>
                <div className="inquiry_form">
                  <table cellPadding="0" cellSpacing="0" border={0}>
                    <tbody>
                      <tr>
                        <th>제목</th>
                        <td>
                          <input
                            type="text"
                            className="input"
                            placeholder="제목을 입력하세요"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>내용</th>
                        <td>
                          <textarea
                            rows={10}
                            cols={100}
                            placeholder="내용을 입력하세요."
                          ></textarea>
                          <div className="box">
                            <label className="checkbox">
                              <input type="checkbox" checked />
                              <span>비공개</span>
                            </label>
                            <span className="word">0 /1,000</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="btn_wrap">
                  <button type="button" className="btn_cancel">
                    취소
                  </button>
                  <button type="button" className="btn_submit">
                    등록
                  </button>
                </div>
                <p className="text_notification">
                  문의하신 내용에 대한 답변은 해당 상품의 상세페이지 또는{" "}
                  <u>‘마이페이지&gt;나의활동관리&gt;상품문의’</u> 에서 확인하실
                  수 있습니다.
                </p>

                <section className="product_notification">
                  <h5>상품문의 작성 유의사항</h5>
                  <ul>
                    <li>
                      상품관련 문의 게시판입니다. 주문/배송 및 교환/반품의 경우
                      1:1 문의로 부탁드립니다.
                    </li>
                    <li>
                      주문확인을 위하여 주문정보(주문번호, 주문상품, 주문자
                      성명, 연락처)를 정확하게 남겨주셔야 빠른 확인이
                      가능합니다.
                    </li>
                    <li>
                      전화번호, 이메일 등 개인 정보가 포함된 글 작성이 필요한
                      경우 판매자만 볼 수 있도록 비밀글로 문의해 주시기
                      바랍니다.
                    </li>
                    <li>
                      문의글을 댓글로 답변을 남겨주시면 누락될 수 있으니 꼭 새
                      글로 작성 부탁드립니다.
                    </li>
                    <li>
                      <strong>주문시 배송일 지정은 불가합니다.</strong>
                    </li>
                    <li>
                      <strong>
                        요청사항에 배송일 기재 시 반영되지 않을 수 있으며
                        개별연락을 드릴 수 없는 부분 참고 부탁드립니다.
                      </strong>
                    </li>
                    <li>
                      <strong>
                        관리자가 공급업체에게 확인하는 시간이 최대 n일 걸릴 수
                        있습니다.
                      </strong>
                    </li>
                  </ul>
                </section>
              </div>
              <button type="button" className="btn_close">
                <span className="hide">닫기</span>
              </button>
            </section>
            <div className="dimmed"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default QuestionsContent;
