const genTicket = (length) => {
  let tickets = [];
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * 10);
    tickets.push(num);
  }
  //   console.log(tickets);
  return tickets;
};

// genTicket(3);

const sum = (arr) => {
  return arr.reduce((sum, currVal) => sum + currVal, 0);
};

export { genTicket, sum };
