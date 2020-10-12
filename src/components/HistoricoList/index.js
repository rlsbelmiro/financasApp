import React, { useContext } from 'react';
import { Text, View, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import {
    Container,
    Tipo,
    IconView,
    Valor,
    TipoText,
    Data
} from './styles';

export default function HistoricoList({ data, saldo }) {

    const { user } = useContext(AuthContext);
    const uid = user && user.uid;

    function excluir() {
        Alert.alert(
            'Cuidado Atenção',
            `Você deseja excluir ${data.tipo} - Valor: ${data.valor}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => confirmarExclusao()
                }
            ]
        );
    }

    async function confirmarExclusao() {
        await firebase.database().ref('historico').child(uid).child(data.key).remove().then(async () => {
            let saldoAtual = saldo;
            data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);

            await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual)
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <Container>
            <Tipo>
                <IconView tipo={data.tipo}>
                    <Feather name={data.tipo === 'receita' ? 'arrow-up' : 'arrow-down'} color="#fff" size={25} />
                </IconView>
            </Tipo>
            <TipoText>
                <Data>{data.data}</Data>
                <Valor>R$ {data.valor.toFixed(2).toString().replace('.', ',')}</Valor>
            </TipoText>
            <Tipo>
                <IconView tipo={'acoes'}>
                    <MaterialIcons name="edit" color="#000" size={25} />
                </IconView>
                <IconView tipo={'acoes'}>
                    <TouchableOpacity onPress={() => excluir()}>
                        <MaterialIcons name="delete" color="#000" size={25} />
                    </TouchableOpacity>
                </IconView>

            </Tipo>
        </Container>
    );
}