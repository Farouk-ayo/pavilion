import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import pointOfSale from "../assets/point-of-sale-terminal.svg";
import terminalHealth from "../assets/love-terminal.svg";
import settlement from "../assets/settlement.svg";
import performance from "../assets/performance.svg";
import statements from "../assets/statements.svg";
import shoppingPos from "../assets/shopping-pos.svg";
import settings from "../assets/settings.svg";
import message from "../assets/message.svg";
import reconcilation from "../assets/reconcilation.svg";
import dispute from "../assets/dispute.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <section className={classes.sidebar}>
      <h5>POS Monitoring</h5>

      {/* DASHBOARD  */}
      <NavLink
        to="/transactions"
        className={({ isActive }) => {
          return isActive ? classes.active : classes.notActive;
        }}
      >
        <MdDashboard color="#909DAD" size={20} />

        <h4>Dashboard</h4>
      </NavLink>

      {/* TRANSACTION */}
      <div className={classes.subsection}>
        <NavLink
          to="/transaction-report"
          className={({ isActive }) => {
            return isActive ? classes.active : classes.notActive;
          }}
        >
          <img src={pointOfSale} alt="" />

          <h4>Transactions</h4>
        </NavLink>
        <MdOutlineKeyboardArrowDown color="#909DAD" size={20} />
      </div>
      {/* TERMINAL HEALTH  */}
      <div className={classes.subsection}>
        <NavLink
          to="/terminal-health"
          className={({ isActive }) => {
            return isActive ? classes.active : classes.notActive;
          }}
        >
          <img src={terminalHealth} alt="" />

          <h4>Terminal Health</h4>
        </NavLink>
        <MdOutlineKeyboardArrowDown color="#909DAD" size={20} />
      </div>

      {/* SETTLEMENTS  */}
      <div className={classes.subsection}>
        <NavLink
          to="/settlement"
          className={({ isActive }) => {
            return isActive ? classes.active : classes.notActive;
          }}
        >
          <img src={settlement} alt="" />

          <h4>Settlement</h4>
        </NavLink>
        <MdOutlineKeyboardArrowDown color="#909DAD" size={20} />
      </div>

      {/* PERFORMANCE  */}
      <div className={classes.subsection}>
        <NavLink
          to="/performance"
          className={({ isActive }) => {
            return isActive ? classes.active : classes.notActive;
          }}
        >
          <img src={performance} alt="" />

          <h4>Performance</h4>
        </NavLink>
        <MdOutlineKeyboardArrowDown color="#909DAD" size={20} />
      </div>

      {/* STATEMENTS  */}
      <NavLink
        to="/statements"
        className={({ isActive }) => {
          return isActive ? classes.active : classes.notActive;
        }}
      >
        <img src={statements} alt="" />
        <h4>Bank Statement</h4>
      </NavLink>

      {/* MY TERMINAL  */}
      <NavLink
        to="/my-terminal"
        className={({ isActive }) => {
          return isActive ? classes.active : classes.notActive;
        }}
      >
        <img src={shoppingPos} alt="" />

        <h4>My Terminal</h4>
      </NavLink>

      {/* SETTINGS  */}
      <div className={classes.subsection}>
        <NavLink
          to="/settings"
          className={({ isActive }) => {
            return isActive ? classes.active : classes.notActive;
          }}
        >
          <img src={settings} alt="" />

          <h4>Settings</h4>
        </NavLink>
        <MdOutlineKeyboardArrowDown color="#909DAD" size={20} />
      </div>

      {/* MESSAGE CENTER  */}
      <NavLink
        to="/message-center"
        className={({ isActive }) => {
          return isActive ? classes.active : classes.notActive;
        }}
      >
        <img src={message} alt="" />

        <h4>Message Center</h4>
      </NavLink>

      {/* RECONCILATION  */}
      <NavLink
        to="/reconcilation"
        className={({ isActive }) => {
          return isActive ? classes.active : classes.notActive;
        }}
      >
        <img src={reconcilation} alt="" />

        <h4>Reconcilation</h4>
      </NavLink>

      {/* DISPUTE MANAGEMENT  */}
      <NavLink
        to="/Dispute-management"
        className={({ isActive }) => {
          return isActive ? classes.active : classes.notActive;
        }}
      >
        <img src={dispute} alt="" />

        <h4>Dispute Management</h4>
      </NavLink>
    </section>
  );
};

export default Sidebar;
