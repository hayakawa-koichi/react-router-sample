import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const toAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Page</h1>
      <button onClick={toAbout}>Aboutページへ遷移する。</button>
    </div>
  );
};
