import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../src/page/About";
import { HomePage } from "../src/page/Home";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* AboutPageに遷移前に処理を入れたい */}
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
};

export default Router;
