import classes from "./Card.module.scss";
import { CardDetails } from "../dashboard/Data";

const Card = () => {
  return (
    <section className={classes.card}>
      {CardDetails.map((eachCard) => (
        <div key={eachCard.id} className={classes.each}>
          <h3>{eachCard.type}</h3>
          <img src={eachCard.image} alt="" />
          <div>
            <span className={classes.approve}>
              <h3>
                Approved <span>({eachCard.approve})</span>
              </h3>
              <h1>{eachCard.approvePrice}</h1>
            </span>
            <span className={classes.failed}>
              <h3>
                Failed <span>({eachCard.failed})</span>
              </h3>
              <h1>{eachCard.failedPrice}</h1>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
