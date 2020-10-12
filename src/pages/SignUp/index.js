import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function cadastrar() {
        signUp(email, senha, nome);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={cadastrar}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff" />
                        ) : (
                                <SubmitText>Cadastrar</SubmitText>
                            )
                    }

                </SubmitButton>
            </Container>
        </Background>
    );
}