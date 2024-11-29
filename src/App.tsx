import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./components/layout";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
