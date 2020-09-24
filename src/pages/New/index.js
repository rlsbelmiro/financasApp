import { Picker, PickerIOS } from '@react-native-community/picker';
import React, { useState } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../../components/Header';

import {
    Background,
    Input,
    SubmitButton,
    SubmitText,
    AreaOpcoes,
    Opcao,
    OpcaoText
} from './styles';

export default function New() {

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('receita')
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
                    <SubmitButton tipo={tipo}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}