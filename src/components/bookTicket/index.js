import React from "react";
import styled from "styled-components";
import { ticketAction, deleteSeat } from "../../redux/actions/ticketAction";
import { useDispatch, useSelector } from "react-redux";
let rowNum = 5;
let colNum = 10;
const BookTicket = () => {
  const dispatch = useDispatch();
  const { tickets, total } = useSelector((store) => store.ticketReducer);
  const getRandomPrice = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  const seatArray = Array.from({ length: rowNum }, (i, row) =>
    Array.from({ length: colNum }, (j, col) => ({
      row: row + 1,
      column: col + 1,
      seatNumber: `${String.fromCharCode(65 + row)}${col + 1}`,
      price: parseFloat(getRandomPrice(10, 30)),
    }))
  ).flat();

  const addTickets = (obj) => {
    dispatch(ticketAction(obj));
  };
  const deleteTickets = (obj) => {
    dispatch(deleteSeat(obj));
  };

  const isExist = (seatNumber) =>
    tickets.some((item) => item.seatNumber === seatNumber);

  const totalPrice = tickets
    .reduce((acc, curr) => acc + curr.price, 0)
    .toFixed(2);

  return (
    <div className="mx-auto my-5">
      <div className="w-100 text-center">{totalPrice > 0 && totalPrice}</div>
      <Container className="container">
        {seatArray.map((seat, index) => {
          return (
            <Button
              active={isExist(seat.seatNumber) ? 1 : 0}
              onClick={() => {
                if (isExist(seat.seatNumber)) {
                  deleteTickets(seat);
                } else {
                  addTickets(seat);
                }
              }}
              className="col-md-2 col-3 col-lg-2"
              key={seat.seatNumber}
            >
              {seat.seatNumber}
            </Button>
          );
        })}
        <div className="mt-5 d-flex flex-wrap gap-3">
          {tickets.map((seat, index) => {
            return (
              <div className="" key={seat.seatNumber}>
                <div>
                  {seat.seatNumber}
                  {index !== tickets.length - 1 && ","}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BookTicket;

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  font-size: 12px;
  background: ${(props) => (props.active === 1 ? "green" : "")};
  color: ${(props) => (props.active === 1 ? "white" : "black")};
  border-radius: 4px;
`;

const me = "AkashSingh";

function ellipsis(str) {
  return `${str.split("").slice(0, 3).join("")}...`;
}
console.log(ellipsis(me));

const heroArr = ["h1", "h2", "h3", "h4", "h5"];

console.log(`${heroArr.slice(0, 3).join(",")}...`);

class MyName {
  constructor(userName, maxLength) {
    this.userName = userName;
    this.maxLength = maxLength;
  }

  truncateString() {
    if (this.userName.length <= this.maxLength) {
      return this.userName;
    }
    return `${this.userName.split("").slice(0, this.maxLength).join("")}...`;
  }

  capitalize() {
    return this.userName.toUpperCase();
  }
}
console.log(new MyName("AkashAkash", 7).truncateString());
