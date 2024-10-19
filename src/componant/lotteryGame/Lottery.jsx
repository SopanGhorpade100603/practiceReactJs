import React, { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n, winnigSum}) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWining = sum(ticket) === winnigSum;
  
  const BuyTicket = () => {
    setTicket(genTicket(n))
  }
  
  return (
    <div className="center">
      <h1 className="central heading">Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <button onClick={BuyTicket}>Buy Ticket</button>
      <h3>{isWining && 'Congratulation you won!'}</h3>
    </div>
  );
}
