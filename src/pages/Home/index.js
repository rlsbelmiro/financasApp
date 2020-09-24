import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';
import { Background, Container, Nome, Saldo, Title, List } from './styles';

export default function Home() {

    const { user } = useContext(AuthContext);
    const [historico, setHistorico] = useState([
        { key: '1', tipo: 'receita', valor: 1200 },
        { key: '1', tipo: 'receita', valor: 1200 },
        { key: '1', tipo: 'despesa', valor: 1200 },
        { key: '1', tipo: 'receita', valor: 1200 },
        { key: '1', tipo: 'receita', valor: 1200 },
    ])
    return (
        <Background>
            <Header />
            <Container>
                <Nome>{user && user.nome}</Nome>
                <Saldo>R$ 1.000,00</Saldo>
            </Container>
            <Title>Últimas movimentações</Title>

            <List
                showsVertificalScrollIndicator={false}
                data={historico}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item} />)}
            />
        </Background>
    );
}