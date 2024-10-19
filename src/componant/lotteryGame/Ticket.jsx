import React from 'react'
import TicketNum from './TicketNum'
export default function Ticket({ticket}) {
  return (
    <div>
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, idx)=>{
               return <TicketNum num={num} key={idx} />
            })}
        </div>
    </div>
  )
}
