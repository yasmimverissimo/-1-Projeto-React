import React, { useState } from 'react';
import * as S from './style'; 

export const CardJogadoras = ({ Data }) => {

    const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

    const alterarVisibilidade = () => {
        setMostrarDetalhes(!mostrarDetalhes);
    };

    return (
        <S.ContainerPai>
            <S.BotaoFiltro onClick={alterarVisibilidade}>
                {mostrarDetalhes ? 'Esconder Detalhes Extras' : 'Mostrar Detalhes Extras'}
            </S.BotaoFiltro>

            <S.GridDeCards>
                {Data.map((jogadoras, index) => (
                    <S.CartaoIndividual key={`${jogadoras.id}_${index}`}>
                        <S.ImagemJogadora src={jogadoras.imagem} alt={jogadoras.nome} />
                        <S.TextoPrincipal>Nome: {jogadoras.nome}</S.TextoPrincipal>
                        <S.TextoComum>Seleção: {jogadoras.selecao}</S.TextoComum>
                        <S.TextoComum>Posição: {jogadoras.posicao}</S.TextoComum>


                        {mostrarDetalhes && (
                            <S.BlocoDeDetalhes>
                                <S.TextoComum>Idade: {jogadoras.idade}</S.TextoComum>
                                <S.TextoComum>Cidade: {jogadoras.cidade}</S.TextoComum>
                                <S.TextoComum>Técnico: {jogadoras.tecnico}</S.TextoComum>
                                <S.TextoComum>Altura: {jogadoras.altura}</S.TextoComum>
                                <S.TextoComum>Time: {jogadoras.time}</S.TextoComum>
                            </S.BlocoDeDetalhes>
                        )}
                    </S.CartaoIndividual>
                ))}
            </S.GridDeCards>
        </S.ContainerPai>
    );
};
