import React from 'react';
import { DadosDaAPI } from '../../data/dados'; 
import { CardJogadoras } from '../../components/CardJogadoras'; 
import { ContainerPagina, TituloPrincipal } from './style';

export const Home = () => {

    return(

        <ContainerPagina>
            <TituloPrincipal>Jogadoras de Vôlei</TituloPrincipal>

            <CardJogadoras Data={DadosDaAPI} />
        </ContainerPagina>

        
    )
}