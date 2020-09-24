import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 5;
    padding: 10px;
    box-shadow: 2px 2px rgba(0,0,0,0.40);
    background-color: rgba(0,0,0,0.02);
`;
export const Tipo = styled.View`
    flex-direction: row;
`;
export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'receita' ? '#049301' : '#c62c36'};
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 8px;
    align-items: center;
`;
export const Valor = styled.Text`
color: #222;
font-size: 22px;
font-weight: bold;

`;

export const TipoText = styled.Text`
color: #fff;
font-size: 18px;
font-style: italic;
`;
