import { LayoutHome } from "../layouts/layout-home/LayoutHome";
import { MainLayout } from "../layouts/main-layout/MainLayout";

const routes = [
  { path: "/", name: "Home", component: LayoutHome, exact: true },
  { path: "/page", name: "Page", component: MainLayout }
  // { path: "/order", name: "Order", component: Order, exact: true },
  // { path: "/success", name: "Success", component: Success, exact: true },
  // {
  //   path: "/error",
  //   name: "Error",
  //   component: Error,
  //   exact: true,
  // },
];

export default routes;
