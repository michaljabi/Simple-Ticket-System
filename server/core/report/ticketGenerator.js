export const ticketGenerator = () => {
  function stringRand(base) {
    return parseInt(Math.random()*1000000000).toString(base);
  }
  const ticket = stringRand(36) + 'x' + stringRand(20);
  return ticket.substring(0, 15);
};

