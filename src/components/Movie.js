import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Movies({filmes}){
    return(
        <>
            {filmes.map((filme, index) => <Movie key={index} id={filme.id} filme={filme.posterURL}/> )}
        </>
    )
}

function Movie(props){
    return(
        <Link to={`sessoes/${props.id}`}>
            <MovieContainer>
                <img src={props.filme}/>
            </MovieContainer>
        </Link>
    )
}


const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`