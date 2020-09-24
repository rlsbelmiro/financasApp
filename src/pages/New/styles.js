import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;
export const Input = styled.TextInput`
    height: 50;
    width: 90%;
    background-color: rgba(255,255,255,0.9);
    padding: 8px;
    font-size: 22px;
    color: #222;
    border-radius: 6px;
    margin-top: 30px;
`;
export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.tipo === 'receita' ? '#00b94a' : '#C62c36'};
    border-radius: 6px;
`;
export const SubmitText = styled.Text`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
`;

export const AreaOpcoes = styled.View`
    height: 50;
    width: 90%;
    flex-direction: row;
    margin-top: 15px;
`;
export const Opcao = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 50;
    border-width: 1;
    border-color: #ccc;
    background-color: ${props => props.selecionado ? '#fff' : '#131313'};
`;
export const OpcaoText = styled.Text`
    color: ${props => !props.selecionado ? '#fff' : props.tipo === 'receita' ? '#00b94a' : '#C62c36'};
`;
