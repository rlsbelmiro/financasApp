import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import HistoricoList from '../../components/HistoricoList';
import { Background, Container, Nome, Saldo, Title, List, Area, AreaList, InfoText } from './styles';
import { format } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';
import DatePicker from '../../components/DatePicker';

export default function Home() {


    const [historico, setHistorico] = useState([]);
    const [saldo, setSaldo] = useState(0);
    const [show, setShow] = useState(false);
    const [newDate, setNewDate] = useState(new Date());

    const { user } = useContext(AuthContext);
    const uid = user && user.uid;

    useEffect(() => {
        async function loadList() {
            await firebase.database().ref('users').child(uid).on('value', (obj) => {
                setSaldo(obj.val().saldo);
            });

            await firebase.database().ref('historico')
                .child(uid)
                .orderByChild('data').equalTo(format(newDate, 'dd/MM/yyyy'))
                .limitToLast(10).on('value', (obj) => {
                    setHistorico([]);

                    obj.forEach((childItem) => {
                        let list = {
                            key: childItem.key,
                            tipo: childItem.val().tipo,
                            valor: childItem.val().valor,
                            data: childItem.val().data
                        };

                        setHistorico(oldArray => [...oldArray, list].reverse());
                    });
                });
        }

        loadList();
    }, [newDate]);

    function selecionarData() {
        setShow(true);
    }
    function handleClose() {
        setShow(false);
    }

    const onChange = (date) => {
        setShow(Platform.OS === 'ios');
        setNewDate(date);
    }
    return (
        <Background>
            <Header />
            <Container>
                <Nome>{user && user.nome}</Nome>
                <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
            </Container>
            <Area>
                <TouchableOpacity onPress={() => selecionarData()}>
                    <MaterialIcons name="event" size={30} color="#fff" />
                </TouchableOpacity>
                <Title>Últimas movimentações</Title>
            </Area>

            <AreaList>
                {
                    historico.length > 0 ? (
                        <List
                            showsVertificalScrollIndicator={false}
                            data={historico}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => (<HistoricoList data={item} saldo={saldo} />)}
                        />
                    ) : (
                            <InfoText>Nenhuma movimentação para o dia {format(newDate, 'dd/MM/yyyy')}</InfoText>
                        )
                }
            </AreaList>

            {
                show &&
                <DatePicker
                    onClose={handleClose}
                    date={newDate}
                    onChange={onChange}
                />
            }
        </Background>
    );
}