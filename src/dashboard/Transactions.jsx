import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { Details } from "./Data";
import classes from "./Transactions.module.scss";
import Table from "../components/Table";

const Transactions = () => {
  return (
    <main>
      <section className={classes.welcome}>
        <div className={classes.welcomeBack}>
          <span className={classes.text}>
            <h1>Welcome back</h1>
            <p>Here’s what is happening with your Terminals today,</p>
          </span>
          <span className={classes.date}>
            <p>12th October, 2022</p>
            <MdOutlineKeyboardArrowDown
              color="#4C6FFF"
              size={30}
              className={classes.navIcon}
            />
          </span>
        </div>
        <div className={classes.navlinks}>
          <NavLink
            to="/transactions"
            className={({ isActive }) => {
              return isActive ? classes.active : classes.notActive;
            }}
          >
            Transactions
          </NavLink>
          <NavLink
            to="/settlement"
            className={({ isActive }) => {
              return isActive ? classes.active : classes.notActive;
            }}
          >
            Settlements
          </NavLink>
          <NavLink
            to="/performance"
            className={({ isActive }) => {
              return isActive ? classes.active : classes.notActive;
            }}
          >
            Performance
          </NavLink>
          <NavLink
            to="/terminal-health"
            className={({ isActive }) => {
              return isActive ? classes.active : classes.notActive;
            }}
          >
            Terminal Health
          </NavLink>
          <NavLink
            to="/statements"
            className={({ isActive }) => {
              return isActive ? classes.active : classes.notActive;
            }}
          >
            Bank Statement
          </NavLink>
        </div>

        <div className={classes.transactions}>
          {Details.map((each) => (
            <section key={each.id}>
              <div>
                <img src={each.icon} alt="" />
                <p>{each.transaction}</p>
              </div>
              <h2>{each.price}</h2>
            </section>
          ))}
        </div>
        <div className={classes.liveMonitor}>
          <span>
            <h2>Live Monitoring</h2>
            <div>
              <TfiReload
                color="#4C6FFF"
                size={30}
                className={classes.navIcon}
              />
              <BsArrowDown
                color="#4C6FFF"
                size={30}
                className={classes.navIcon}
              />
              <img src="" alt="" />
            </div>
          </span>
        </div>
        <Table/>
      </section>
    </main>
  );
};
export default Transactions;
