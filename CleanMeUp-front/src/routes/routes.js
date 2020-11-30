import Error from "../components/payment/Error";
import Success from "../components/payment/Success";
import Order from "../components/order/Order";

const routes = [
  { path: "/", name: "Home", component: Order, exact: true },
  { path: "/success", name: "Success", component: Success, exact: true },
  {
    path: "/error",
    name: "Error",
    component: Error,
    exact: true,
  },
];

export default routes;
