import dollarCircle from "../../assets/dollar-circle.svg";
import dollarSquare from "../../assets/dollar-square.svg";
import moneyReceive from "../../assets/money-receive.svg";
import moneySend from "../../assets/money-send.svg";
import terminalTransact from "../../assets/terminal-transact.svg";

export const Details = [
  {
    id: 1,
    transaction: "Total Transactions",
    icon: dollarCircle,
    price: "30,101",
  },
  {
    id: 2,
    transaction: "Approved Transactions",
    icon: moneyReceive,
    price: "20,101",
  },
  {
    id: 3,
    transaction: "Failed Transactions",
    icon: moneySend,
    price: "10,000",
  },
  {
    id: 4,
    transaction: "Transacting Terminals",
    icon: terminalTransact,
    price: "48",
  },
  { id: 5, transaction: "Total Terminals", icon: dollarSquare, price: "120" },
];
