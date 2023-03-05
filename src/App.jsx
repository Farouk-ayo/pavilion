import "./App.scss";
import Transactions from "./routes/dashboard/Transactions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import TransactReport from "./routes/transaction/TransactReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Transactions />,
      },
      {
        path: "/transaction",
        element: <TransactReport />,
      },
      {
        path: "//terminal-health",
        element: <TransactReport />,
      },
      {
        path: "/settlement",
        element: <TransactReport />,
      },
      {
        path: "/performance",
        element: <TransactReport />,
      },
      {
        path: "/statements",
        element: <TransactReport />,
      },
      {
        path: "/my-terminal",
        element: <TransactReport />,
      },
      {
        path: "/settings",
        element: <TransactReport />,
      },
      {
        path: "/message-center",
        element: <TransactReport />,
      },
      {
        path: "/reconcilation",
        element: <TransactReport />,
      },
      {
        path: "/Dispute-management",
        element: <TransactReport />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
