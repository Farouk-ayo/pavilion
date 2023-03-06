import { Button } from "@chakra-ui/react";
import dollarCircle from "../assets/dollar-circle.svg";
import dollarSquare from "../assets/dollar-square.svg";
import moneyReceive from "../assets/money-receive.svg";
import moneySend from "../assets/money-send.svg";
import terminalTransact from "../assets/terminal-transact.svg";

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

export const transactDetails = [
  {
    id: 1,
    time: "12: 30 pm",
    amount: "20,100",
    paymentType: "Card",
    terminal: "23012100",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },
  {
    id: 2,
    time: "12:08 pm",
    amount: "14,200",
    paymentType: "Transfer",
    terminal: "23013201",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },

  {
    id: 3,
    time: "11:32 am",
    amount: "4,500",
    paymentType: "Card",
    terminal: "23019800",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },
  {
    id: 4,
    time: "11:25 am",
    amount: "8,000",
    paymentType: "Card",
    terminal: "23014019",
    account: "07613*******67",
    status: (
      <Button
        backgroundColor="#FCE8E8"
        color="#DC1D1D
      "
        size="xs"
      >
        Failed
      </Button>
    ),
  },
  {
    id: 5,
    time: "11:20 am",
    amount: "1,100",
    paymentType: "Transfer",
    terminal: "23011100",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 6,
    time: "11:05 am",
    amount: "3,400",
    paymentType: "Transfer",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 8,
    time: "10:05 am",
    amount: "50,000",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 9,
    time: "9:50 am",
    amount: "3,500",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 10,
    time: "10:05 am",
    amount: "50,000",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 11,
    time: "9:50 am",
    amount: "3,500",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 12,
    time: "9:35 am",
    amount: "91,250",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#FCE8E8" color="#DC1D1D" size="xs">
        Failed
      </Button>
    ),
  },
  {
    id: 13,
    time: "9:20 am",
    amount: "40,000",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },
  {
    id: 14,
    time: "8:15 am",
    amount: "12,400",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },
  {
    id: 15,
    time: "8:10 am",
    amount: "2,140",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },
  {
    id: 16,
    time: "7:40 am",
    amount: "4,000",
    paymentType: "Card",
    terminal: "09087043AA",
    account: "07613*******67",
    status: (
      <Button backgroundColor="#C3F1CA" color="#3DD154" size="xs">
        Approved
      </Button>
    ),
  },
];
