import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./components/layout";
import ProductList from "./pages/Product/ProductList";
import ProductDetail from "./pages/Product/ProductDetail";
import ProductRecommend from "./pages/Product/ProductRecommend";
import City from "./pages/City/City";
import Customer from "./pages/Customer/Customer";
import MyPage from "./pages/MyPage/MyPage";
import Exhibition from "./pages/Exhibition/Exhibition";
import Login from "./pages/Login/Login";
import Membership from "./pages/Membership/Membership";
import Musium from "./pages/Musium/Musium";
import Privacy from "./pages/Privacy/Privacy";
import Use from "./pages/Use/Use";
import Guide from "./pages/Guide/Guide";
import MyPageOrder from "./pages/MyPage/MyPageOrder";
import MyPageCover from "./pages/MyPage/MyPageCover";
import MyPageMine from "./pages/MyPage/MyPageMine";
import MyPageReview from "./pages/MyPage/MyPageReview";
import MyPageInquiry from "./pages/MyPage/MyPageInquiry";
import MyPageOneInquiry from "./pages/MyPage/MyPageOneInquiry";
import MyPageMemberShip from "./pages/MyPage/MyPageMemberShip";
import MyPageCupon from "./pages/MyPage/MyPageCupon";
import MyPageVoucher from "./pages/MyPage/MyPageVoucher";
import MyPageInfoChange from "./pages/MyPage/MyPageInfoChange";
import MyPageAddress from "./pages/MyPage/MyPageAddress";
import MyPageSecession from "./pages/MyPage/MyPageSecession";
import Events from "./pages/Events/Events";
import CustomerNotice from "./pages/Customer/CustomerNotice";
import CustomerQusition from "./pages/Customer/CustomerQusition";
import CustomerOneQusition from "./pages/Customer/CustomerOneQusition";
import CustomerApply from "./pages/Customer/CustomerApply";
import LoginId from "./pages/Login/LoginId";
import LoginPw from "./pages/Login/LoginPw";
import MembershipInfo from "./pages/Membership/MembershipInfo";
import Business from "./pages/Business/Business";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        ></Route>
        {/* 로그인 */}
        <Route
          path="/login"
          element={
            <Layout className="none_header">
              <Login />
            </Layout>
          }
        ></Route>
        {/* 아이디 찾기*/}
        <Route
          path="/login/id"
          element={
            <Layout className="none_header">
              <LoginId />
            </Layout>
          }
        ></Route>
        {/* 비밀번호 찾기 */}
        <Route
          path="/login/pw"
          element={
            <Layout className="none_header">
              <LoginPw />
            </Layout>
          }
        ></Route>
        {/* 회원가입 */}
        <Route
          path="/membership"
          element={
            <Layout>
              <Membership />
            </Layout>
          }
        ></Route>

        {/* 회원가입정보 */}
        <Route
          path="/membershipInfo"
          element={
            <Layout>
              <MembershipInfo />
            </Layout>
          }
        ></Route>

        {/* 사업자정보 */}
        <Route
          path="/business"
          element={
            <Layout>
              <Business />
            </Layout>
          }
        ></Route>

        {/* 상품목록 */}
        <Route
          path="/productList"
          element={
            <Layout className="none_header">
              <ProductList />
            </Layout>
          }
        ></Route>
        {/* 상품목록상세 */}
        <Route
          path="/productDetail"
          element={
            <Layout className="none_header">
              <ProductDetail />
            </Layout>
          }
        ></Route>
        {/* 추천상품 */}
        <Route
          path="/productRecommend"
          element={
            <Layout className="none_header">
              <ProductRecommend />
            </Layout>
          }
        ></Route>
        {/* 기획전 */}
        <Route
          path="/exhibition"
          element={
            <Layout className="none_header">
              <Exhibition />
            </Layout>
          }
        ></Route>
        {/* 테마관 */}
        <Route
          path="/musium"
          element={
            <Layout className="none_header">
              <Musium />
            </Layout>
          }
        ></Route>
        {/* 시군몰 */}
        <Route
          path="/city"
          element={
            <Layout className="none_header">
              <City />
            </Layout>
          }
        ></Route>
        {/* 이벤트 */}
        <Route
          path="/event"
          element={
            <Layout className="none_header">
              <Events />
            </Layout>
          }
        ></Route>
        {/* 고객센터 */}
        <Route
          path="/customer"
          element={
            <Layout className="none_header ">
              <Customer />
            </Layout>
          }
        ></Route>
        {/* 공지사항 */}
        <Route
          path="/customer/notice"
          element={
            <Layout className="none_header nav_customer">
              <CustomerNotice />
            </Layout>
          }
        ></Route>
        {/* 자주묻는 질문 */}
        <Route
          path="/customer/qusition"
          element={
            <Layout className="none_header nav_customer">
              <CustomerQusition />
            </Layout>
          }
        ></Route>
        {/* 1:1문의 */}
        <Route
          path="/customer/oneQusition"
          element={
            <Layout className="none_header nav_customer">
              <CustomerOneQusition />
            </Layout>
          }
        ></Route>
        {/* 입점신청 */}
        <Route
          path="/customer/apply"
          element={
            <Layout className="none_header nav_customer">
              <CustomerApply />
            </Layout>
          }
        ></Route>
        {/* 마이페이지 */}
        <Route
          path="/myPage"
          element={
            <Layout className="none_header">
              <MyPage />
            </Layout>
          }
        ></Route>
        {/* 개인정보처리방침 */}
        <Route
          path="/privacy"
          element={
            <Layout className="none_header">
              <Privacy />
            </Layout>
          }
        ></Route>
        {/* 이용약관 */}
        <Route
          path="/use"
          element={
            <Layout className="none_header">
              <Use />
            </Layout>
          }
        ></Route>
        {/* 이용안내 */}
        <Route
          path="/guide"
          element={
            <Layout className="none_header">
              <Guide />
            </Layout>
          }
        ></Route>
        {/* 마이페이지 */}
        <Route
          path="/myPage/order"
          element={
            <Layout className="none_header">
              <MyPageOrder />
            </Layout>
          }
        ></Route>
        {/* 취소/교환/상품 */}
        <Route
          path="/myPage/cover"
          element={
            <Layout className="none_header">
              <MyPageCover />
            </Layout>
          }
        ></Route>
        {/* 찜한상품 */}
        <Route
          path="/myPage/mine"
          element={
            <Layout className="none_header">
              <MyPageMine />
            </Layout>
          }
        ></Route>
        {/* 상품후기 */}
        <Route
          path="/myPage/review"
          element={
            <Layout className="none_header">
              <MyPageReview />
            </Layout>
          }
        ></Route>
        {/* 상품문의 */}
        <Route
          path="/myPage/inquiry"
          element={
            <Layout className="none_header">
              <MyPageInquiry />
            </Layout>
          }
        ></Route>
        {/* 1대1문의 */}
        <Route
          path="/myPage/OneInquiry"
          element={
            <Layout className="none_header">
              <MyPageOneInquiry />
            </Layout>
          }
        ></Route>
        {/* 멤버쉽 */}
        <Route
          path="/myPage/memberShip"
          element={
            <Layout className="none_header">
              <MyPageMemberShip />
            </Layout>
          }
        ></Route>
        {/* 쿠폰 */}
        <Route
          path="/myPage/cupon"
          element={
            <Layout className="none_header">
              <MyPageCupon />
            </Layout>
          }
        ></Route>
        {/* 바우처 */}
        <Route
          path="/myPage/voucher"
          element={
            <Layout className="none_header">
              <MyPageVoucher />
            </Layout>
          }
        ></Route>
        {/* 회원정보변경 */}
        <Route
          path="/myPage/infoChange"
          element={
            <Layout className="none_header">
              <MyPageInfoChange />
            </Layout>
          }
        ></Route>
        {/* 배송지관리 */}
        <Route
          path="/myPage/address"
          element={
            <Layout className="none_header">
              <MyPageAddress />
            </Layout>
          }
        ></Route>
        {/* 회원탈퇴 */}
        <Route
          path="/myPage/secession"
          element={
            <Layout className="none_header">
              <MyPageSecession />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
