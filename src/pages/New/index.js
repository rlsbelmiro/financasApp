import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';

import {
    Background,
    Input,
    SubmitButton,
    SubmitText,
    AreaOpcoes,
    Opcao,
    OpcaoText,
    AlertText
} from './styles';

export default function New() {

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('receita');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState(mensagem);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setLoading(false);
        setValor('');
    }, []);

    function submit() {
        if (isNaN(parseFloat(valor))) {
            alert('Informe um valor');
            return;
        } else if (parseFloat(valor) <= 0) {
            alert('Informe um valor maior que zero');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo ${tipo} - Valor: ${parseFloat(valor.replace(',', '.'))}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => salvarRegistro()
                }
            ]
        );
    }

    async function salvarRegistro() {
        setLoading(true);
        let uid = user.uid;
        let key = await firebase.database().ref('historico').child(uid).push().key;
        let vl = parseFloat(valor.replace(',', '.'));
        await firebase.database().ref('historico').child(uid).child(key).set({
            tipo: tipo,
            valor: vl,
            data: format(new Date(), 'dd/MM/yyyy')
        });

        //atualizando saldo
        let users = firebase.database().ref('users').child(uid);
        await users.once('value').then((obj) => {
            let saldo = parseFloat(obj.val().saldo);
            tipo === 'despesa' ? saldo -= parseFloat(vl) : saldo += parseFloat(vl);

            users.child('saldo').set(saldo);
        });

        setValor('');
        setLoading(false);
        Keyboard.dismiss();
        setMensagem('Registro salvo com sucesso!!!');
        setTimeout(() => {
            setMensagem('')
        }, 2000);
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header />

                <SafeAreaView style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Input
                        placeholder="Valor desejado"
                        value={valor}
                        onChangeText={(val) => setValor(val)}
                        keyboardType="numeric"
                        returnKeyType="next"

                    />
                    <AreaOpcoes>
                        <Opcao selecionado={tipo === 'receita'} onPress={() => setTipo('receita')}>
                            <OpcaoText selecionado={tipo === 'receita'} tipo={tipo}>Receita</OpcaoText>
                        </Opcao>
                        <Opcao selecionado={tipo === 'despesa'} onPress={() => setTipo('despesa')}>
                            <OpcaoText selecionado={tipo === 'despesa'} tipo={tipo}>Despesa</OpcaoText>
                        </Opcao>
                    </AreaOpcoes>
                    <SubmitButton tipo={tipo} onPress={() => submit()}>
                        {
                            loading ? <ActivityIndicator color="#fff" /> : <SubmitText>Registrar</SubmitText>
                        }
                    </SubmitButton>

                    <AlertText>
                        {mensagem}
                    </AlertText>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}