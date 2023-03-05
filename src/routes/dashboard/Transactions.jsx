import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import classes from "./Transactions.module.scss";

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
              className={classes.arrowDown}
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

        <div></div>
        <div></div>
      </section>
    </main>
  );
};
export default Transactions;
