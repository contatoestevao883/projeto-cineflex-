import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Sessoes from "../../components/Sessao"

export default function SessionsPage() {
    const [sessao, setSessao] = useState(undefined)
    const { idFilme } = useParams()
    console.log(idFilme)
    useEffect (() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        requisicao.then((resposta) =>{
            setSessao(resposta.data)
            
        })
        requisicao.catch((err) =>{
            console.log(err.response.data)
        })
    }, [idFilme])
    return (
        <PageContainer>
            Selecione o horário
                <div>
                    <Sessoes sessao={sessao}  /> 
                </div>
            <FooterContainer  data-test="footer">
                <div>
                    <img src= {sessao && sessao.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sessao && sessao.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`