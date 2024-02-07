import React from "react";
import "./Ticket.css";
import Performance from "../components/Performance";
import TicketOpen from "../components/TicketOpen";
import Concert from "../components/Concert";

const Ticket = () => {
  return (
    <div className="Ticket">
      <Performance />
      <TicketOpen />
      <Concert />
    </div>
  );
};

export default Ticket;
