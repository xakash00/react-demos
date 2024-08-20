const initialState = {
  tickets: [],
  total: null,
};
const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TICKET_NO":
      return {
        ...state,
        tickets: [...state.tickets, action.seatDetails],
      };
    case "DELETE_SEAT":
      const newTickets = state.tickets.filter(
        (item) => item.seatNumber !== action.seat.seatNumber
      );

      return {
        ...state,
        tickets: newTickets,

        // titkets:state.tickets.filter(item => item.seatNumber !== action.seat)
      };

    default:
      return {
        ...state,
      };
  }
};
export default ticketReducer;
