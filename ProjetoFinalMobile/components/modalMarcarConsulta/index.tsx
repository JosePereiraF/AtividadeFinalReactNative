import { View, Text, Button } from 'react-native'
import React from 'react'
import { ButtonModal, Container, ImagemCheck, InformacoesText, InformacoesView, SubTitulo, TextButtonModal, Titulo } from './styles'
import imagemTest from '../../assets/IconeCheckList.png'
export interface IMarcarConsulta{
    tipoConsulta:string,
    nomeUsuario:string,
    dataMarcada:string,
    valor:number,
    nomePersonal:string,
    setActiveModal?: (value: boolean) => void;
}

export default function MarcarConsulta({tipoConsulta,nomeUsuario,dataMarcada,valor,nomePersonal,setActiveModal}:IMarcarConsulta) {
    
    function handleModal(){
        setActiveModal(false);
    }
  return (
    
    <Container>
        <Titulo>
         {tipoConsulta} marcada com sucesso
        </Titulo>
        <ImagemCheck source={imagemTest}/>

        <InformacoesView>
        <SubTitulo>
            Dados da consulta:
        </SubTitulo>
        <InformacoesText>
            Nome: {nomeUsuario}
        </InformacoesText>
        <InformacoesText>
            Data: {dataMarcada}
        </InformacoesText>
        <InformacoesText>
            Valor: {valor}
        </InformacoesText>
        <InformacoesText>
            Personal: {nomePersonal}
        </InformacoesText>
        <ButtonModal onPress={handleModal}>
            <TextButtonModal>
                Fechar Modal
            </TextButtonModal>
        </ButtonModal>
        </InformacoesView>
    </Container>
  )
}