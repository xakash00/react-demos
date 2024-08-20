export const ticketAction = (seatDetails)=>{
    return{
        type:"TICKET_NO",
        seatDetails
    }
}

export const deleteSeat = (seat)=>{
    return{
        type:"DELETE_SEAT",
        seat
    }
}