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
      { path: "/transaction-report", element: <Transactions /> },
      { path: "/my-terminal", element: <Transactions /> },
      { path: "/settings", element: <Transactions /> },
      { path: "/message-center", element: <Transactions /> },
      { path: "/reconcilation", element: <Transactions /> },
      { path: "/Dispute-management", element: <Transactions /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
