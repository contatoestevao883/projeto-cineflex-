import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import Movies from "../../components/Movie"

export default function HomePage({setFilmes, filmes}) {
    
    useEffect (() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        requisicao.then((resposta) => {
            console.log(resposta.data)
            setFilmes(resposta.data)
        })
    },[])
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                <Movies data-test="movie" filmes={filmes}/>
            </ListContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
