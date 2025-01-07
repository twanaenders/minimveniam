// Define an array of tickets
const tickets = [
  { id: 1, name: 'Ticket 1' },
  { id: 2, name: 'Ticket 2' },
  { id: 3, name: 'Ticket 3' }
];

// The ticket we are looking for
const ticketToFind = { id: 2, name: 'Ticket 2' };

// Ticket Exists in Tickets
const ticketExists = tickets.some(ticket => ticket.id === ticketToFind.id);

if (ticketExists) {
  console.log('Ticket exists in the tickets array.');
} else {
  console.log('Ticket does not exist in the tickets array.');
}
