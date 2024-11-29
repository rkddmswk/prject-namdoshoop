// 에러화면
const ErrorMsg = () => {
  return (
    <>
      <div className="error_wrap">
        <div className="error">
          <header>
            <h1>
              <img src="../images/m/error_ico_404.png" alt="404" width="181" />
            </h1>
            <p>Page not found</p>
          </header>
          <div className="error_inner">
            <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
            <p>
              존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가 변경,
              삭제되어 찾을 수 없습니다.
            </p>
          </div>
          <div className="error_btn">
            <a href="#">홈으로</a>
          </div>
        </div>
      </div>

      <div className="error_wrap">
        <div className="error">
          <header>
            <h1>
              <img src="../images/m/error_ico_505.png" alt="505" width="181" />
            </h1>
            <p>Internal Server Error</p>
          </header>
          <div className="error_inner">
            <p>죄송합니다. 서버가 요청사항을 수행할 수 없습니다.</p>
          </div>
          <div className="error_btn">
            <a href="#">홈으로</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorMsg;
