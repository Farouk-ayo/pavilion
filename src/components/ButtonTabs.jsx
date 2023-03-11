import { useState } from "react";
import classes from "./ButtonTabs.module.scss";

const ButtonTabs = () => {
  const [isActive, setActive] = useState("blue");
  const handleClick = (e) => {
    setActive(e.target.value);
  };

  return (
    <div className={classes.btnGroup} onClick={handleClick}>
      <button
        className={isActive === "blue" ? classes.btnBlue : classes.btn}
        value="blue"
      >
        Cardholder
      </button>
      <button
        className={isActive === "red" ? classes.btnRed : classes.btn}
        value="red"
      >
        Acquirer
      </button>
      <button
        className={isActive === "purple" ? classes.btnPurple : classes.btn}
        value="purple"
      >
        Issuer
      </button>
      <button
        className={isActive === "orange" ? classes.btnOrange : classes.btn}
        value="orange"
      >
        Switch
      </button>
      <button
        className={isActive === "green" ? classes.btnGreen : classes.btn}
        value="green"
      >
        Undefined
      </button>
    </div>
  );
};

export default ButtonTabs;
