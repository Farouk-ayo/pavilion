import { useState } from "react";
import classes from "./ButtonTabs.module.scss";

const ButtonTabs = () => {
  const [isActive, setActive] = useState(true);
  const changeBlue = () => {};

  return (
    <div className={classes.btnGroup}>
      <button className={classes.btnBlue} onClick={changeBlue}>
        Cardholder
      </button>
      <button className={classes.btn}>Acquirer</button>
      <button className={classes.btn}>Issuer</button>
      <button className={classes.btn}>Switch</button>
      <button className={classes.btn}>Undefined</button>
    </div>
  );
};

export default ButtonTabs;
