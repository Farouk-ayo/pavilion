import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";

import { Details } from "./Data";
import classes from "./Transactions.module.scss";
import Table from "../components/Table";
import Navigation from "../components/Navigation";

import ColumnChart from "../components/ColumnChart";

const Transactions = () => {
  return (
    <main>
      <section className={classes.welcome}>
        <section className={classes.welcomeBack}>
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
        </section>
        <Navigation />
        <section className={classes.transactions}>
          {Details.map((each) => (
            <section key={each.id}>
              <div>
                <img src={each.icon} alt="" />
                <p>{each.transaction}</p>
              </div>
              <h2>{each.price}</h2>
            </section>
          ))}
        </section>

        <section className={classes.liveMonitor}>
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
          </span>{" "}
          <Table />
        </section>

        <section className={classes.HourlyDistribute}>
          <h2>Hourly Distribution</h2> <ColumnChart />
        </section>
      </section>
    </main>
  );
};
export default Transactions;
