import styled from 'styled-components';

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BotaoFiltro = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const GridDeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CartaoIndividual = styled.div`
  background-color: #002060; 
  padding: 15px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  color: white;            
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const ImagemJogadora = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const TextoPrincipal = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 5px 0;
`;

export const TextoComum = styled.p`
  font-size: 0.95rem;
  margin: 4px 0;
`;

export const BlocoDeDetalhes = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2); 
  text-align: left;
`;

