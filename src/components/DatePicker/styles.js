import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`;

export const Header = styled.View`
    width: 100%;
    padding: 16px;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: white;
    border-width: 1;
    border-color: #ccc;
    flex-direction: row;
`;

export const BotaoTextoIOS = styled.Text`
    font-weight: bold;
    font-size: 16;
`;