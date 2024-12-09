function calculateMoney(ticket) {
  const ticketPrice = 120;
  const gateMan = 500;
  const stuff = 50;

  if (ticket < 0) {
    return "Invalid number";
  } else {
    const totalTicketPrice = ticketPrice * ticket;

    const stuffCost = stuff * 8;
    const totalCost = stuffCost + gateMan;

    const totalProfit = totalTicketPrice - totalCost;

    return totalProfit;
  }
}

const profit = calculateMoney(10);
console.log(profit);
