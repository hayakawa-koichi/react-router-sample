import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import CustomRoute from "./CustomRoute";
import { AboutPage } from "../src/page/About";
import { HomePage } from "../src/page/Home";
import { RedirectPage } from "./page/Redirect";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/**
       * CustomRoute 用例
       * -----------------------------------------------------
       * 下記の例；
       * AboutPage遷移前に判定したい処理を、
       * CustomRouteコンポーネントのbeforeEnterにわたすことで、
       * CustomRouteコンポーネント内で、遷移をスイッチする。
       * redirectPathには、処理NG時に遷移したいパスを指定する。
       * -----------------------------------------------------
       */}
      <Route
        path="/about"
        element={
          <CustomRoute beforeEnter={mockAuth} redirectPath="/redirect" />
        }
      >
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="/redirect" element={<RedirectPage />} />
    </Routes>
  );
};

/**
 * ランダムでtrue,falseを返す関数
 */
const mockAuth = () => {
  return Math.floor(Math.random() * 2) >= 1;
};

export default Router;
