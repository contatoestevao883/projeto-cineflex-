import styled from "styled-components";
export default function SeatsItems({seat, isAvailable, setSeatSelected}){
    console.log(seat)
    if(seat === undefined){
        return(
            <div>Carregando...</div>
        )
    }
    return(
        <>
            {seat && seat.seats.map((seats, index) => <SeatItem key={index} name={seats.name} isAvailable={isAvailable} setSeatSelected={setSeatSelected}/>)}
        </>
    )
}

function SeatItem(props, {setSeatSelected, isAvailable}){
    return(
        <>
        {isAvailable ?
            <SeatItemSyledSelected onClick={() => setSeatSelected(!props.isAvailable)} key={props.index}>
                {props.name}
            </SeatItemSyledSelected>
            :
            <SeatItemSyledGrey onClick={() => setSeatSelected(!props.isAvailable)} key={props.index}>
                {props.name}
            </SeatItemSyledGrey>
        }
        </>
    )
}

const SeatItemSyledSelected = styled.div`
    border: 1px solid #0E7D71;         // Essa cor deve mudar
    background-color: #0E7D71; // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const SeatItemSyledGrey = styled.div`
   background: #C3CFD9;
    border: 1px solid #7B8B99;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const SeatItemSyledYellow = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`