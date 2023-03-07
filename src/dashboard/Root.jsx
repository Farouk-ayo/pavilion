import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import classes from "./Root.module.scss";

const Root = () => {
  return (
    <section>
      <Header />
      <div className={classes.main}>
        <Sidebar />
        <Outlet />
      </div>
    </section>
  );
};
export default Root;
