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

        {/* 회원가입 */}
        <Route
          path="/membership"
          element={
            <Layout>
              <Membership />
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

        <Route
          path="/customer"
          element={
            <Layout>
              <Customer />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
