// 본인인증 안내 팝업화면
const Verification = () => {
  return (
    <>
      <div className="alert_msg">
        <div className="alert_inner">
          <section className="body">
            <div className="content">
              <div className="confirm auth">
                <h2>본인인증 안내</h2>
                <p className="text_03">
                  <strong>본인인증</strong>이 필요한 회원입니다. <br />
                  아래 버튼을 눌러 본인인증을 진행해주세요.
                </p>
                <div className="btn_wrap">
                  <button type="button" className="button md black">
                    본인인증하기
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="dimmed"></div>
        </div>
      </div>
    </>
  );
};
export default Verification;
