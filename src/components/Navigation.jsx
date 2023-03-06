import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
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
  );
};
export default Navigation;
