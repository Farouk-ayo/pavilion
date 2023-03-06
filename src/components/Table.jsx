import { transactDetails } from "../dashboard/Data";
import classes from "./TableData.module.scss";

const Table = () => {
  return (
    <section className={classes.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Amount</th>
            <th>Payment Type</th>
            <th>Terminal</th>
            <th>Account</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactDetails.map((each) => (
            <tr key={each.id}>
              <td>{each.time}</td>
              <td>{each.amount}</td>
              <td>{each.paymentType}</td>
              <td>{each.terminal}</td>
              <td>{each.account}</td>
              <td>{each.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
