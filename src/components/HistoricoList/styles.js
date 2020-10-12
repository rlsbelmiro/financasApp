import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.1);
    margin-left: 5;
    margin-right: 5;
    margin-bottom: 2;
    border-radius: 8;
`;
export const Tipo = styled.View`
    flex-direction: row;
`;
export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'acoes' ? '#fff' : props.tipo === 'receita' ? '#049301' : '#c62c36'};
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 8px;
    align-items: center;
    margin-left: 5;
`;
export const Valor = styled.Text`
color: #222;
font-size: 22px;
font-weight: bold;
`;

export const TipoText = styled.View`
    margin-left: 15;
    flex: 1;
`;

export const Data = styled.Text`
color: #222;
font-size: 13px;
font-style: italic;
margin-top: 5;
`;
