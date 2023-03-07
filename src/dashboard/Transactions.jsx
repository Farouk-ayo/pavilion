import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { Details, failedDetails } from "./Data";
import classes from "./Transactions.module.scss";
import Table from "../components/Table";
import Navigation from "../components/layout/Navigation";
import ColumnChart from "../components/charts/ColumnChart";
import PieChart from "../components/charts/PieChart";
import Card from "../components/Card";

const Transactions = () => {
  return (
    <main>
      <section className={classes.dashboard}>
        {/* WELCOME BACK  */}
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

        {/* LIVE-MONITORING  */}
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
          </span>
          <Table />
        </section>

        {/* HOURLY DISTRIBUTION  */}
        <section className={classes.HourlyDistribute}>
          <h2>Hourly Distribution</h2>
          <ColumnChart />
        </section>

        {/* FAILED TRANSACTIONS  */}
        <section className={classes.failedTransact}>
          <h2>Failed Transactions</h2>
          <section>
            <PieChart />
            <div className={classes.failedDetails}>
              <span>
                <h2>10,000</h2>
                <p>Here’s why your transactions failed!</p>
              </span>
              <div className={classes.btnGroup}>
                <button className={classes.btnActive}>Cardholder</button>

                <button className={classes.btn}>Acquirer</button>
                <button className={classes.btn}>Issuer</button>
                <button className={classes.btn}>Switch</button>
                <button className={classes.btn}>Undefined</button>
              </div>
              <ul className={classes.funds}>
                {failedDetails.map((each) => (
                  <li key={each.id}>
                    <p>
                      <span>
                        {each.number} {each.reason}
                      </span>
                      <span>{each.price}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        {/* TRANSACTION PER CARD TYPE  */}
        <section className={classes.card}>
          <h2>Transactions Per Card Type</h2>
          <Card />
        </section>
      </section>
    </main>
  );
};
export default Transactions;
