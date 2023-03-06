import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import classes from "./Root.module.scss";

const Root = () => {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
export default Root;
