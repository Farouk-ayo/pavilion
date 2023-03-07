import "./App.scss";
import Transactions from "./dashboard/Transactions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./dashboard/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Transactions /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/settlement", element: <Transactions /> },
      { path: "/performance", element: <Transactions /> },
      { path: "/terminal-health", element: <Transactions /> },
      { path: "/statements", element: <Transactions /> },
      // {
      //   path: "/transaction-report",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "//terminal-health",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/settlement",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/performance",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/statements",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/my-terminal",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/settings",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/message-center",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/reconcilation",
      //   element: <TransactReport />,
      // },
      // {
      //   path: "/Dispute-management",
      //   element: <TransactReport />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
