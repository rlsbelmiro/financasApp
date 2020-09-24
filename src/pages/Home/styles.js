import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;
export const Container = styled.View`
    padding-left: 15px;
`;
export const Nome = styled.Text`
    color: #fff;
    font-size: 19px;
    font-style: italic;
`;
export const Saldo = styled.Text`
    color: #fff;
    font-size: 29px;
    font-weight: bold;
`;
export const Title = styled.Text`
    color: #00b94a;
    margin-left: 15px;
    margin-top: 30px;
    font-style: italic;
    font-size: 16px;
`;

export const List = styled.FlatList`
    margin-top: 15;
    padding-top: 10;
    flex: 1;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;
