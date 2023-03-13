import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Sessoes({sessao}){
    if(sessao === undefined){
        return(
            <div>Carregando...</div>
        )
    }
    return(
        <>
            {sessao && sessao.days.map((session, index) =>  <Sessao key={index} weekday={session.weekday} id={session.id} date={session.date} showtimes={session.showtimes}/>)}
        </>
    )
}

function Sessao(props){ 
    return(
        <>
            <SessionContainer>
                {`${props.weekday} - ${props.date}`}
                        <ButtonsContainer>
                            <Link to={`/assentos/${props.showtimes[0].id}`}>
                                <div data-test="movie-day">
                                    <button>{props.showtimes[0].name}</button> 
                                </div>
                            </Link>
                            <Link to={`/assentos/${props.showtimes[1].id}`}>
                                <div data-test="movie-day">
                                    <button>{props.showtimes[1].name}</button>
                                </div>
                            </Link>  
                        </ButtonsContainer>
            </SessionContainer>
    </>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
    text-decoration: none;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`