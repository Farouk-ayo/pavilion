import classes from "./Card.module.scss";
import { CardDetails } from "../dashboard/Data";

const Card = () => {
  return (
    <section className={classes.card}>
      {CardDetails.map((eachCard) => (
        <div className={classes.each}>{eachCard.type}</div>
      ))}
    </section>
  );
};

export default Card;
