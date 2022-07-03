import { RouteProps, Navigate, Outlet } from "react-router-dom";

/**
 * カスタムルートコンポーネントに渡すProps
 */
type CustomRouteProps = {
  // 前処理で判定したい関数
  beforeEnter: () => boolean;
  // リダイレクト先のパス
  redirectPath: string;
} & RouteProps;

/**
 * カスタムルートコンポーネント
 *
 * 前処理の結果に応じて遷移をスイッチする。
 */
const CustomRoute = ({
  beforeEnter,
  redirectPath,
  ...props
}: CustomRouteProps) => {
  const beforeEnterResult = beforeEnter();

  // 前処理の結果に応じて遷移をスイッチする。
  return beforeEnterResult ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default CustomRoute;
