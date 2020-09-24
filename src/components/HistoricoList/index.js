import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Tipo,
    IconView,
    Valor,
    TipoText
} from './styles';

export default function HistoricoList({ data }) {
    return (
        <Container>
            <Tipo>
                <IconView tipo={data.tipo}>
                    <Feather name={data.tipo === 'receita' ? 'arrow-up' : 'arrow-down'} color="#fff" size={25} />
                    <TipoText >{data.tipo}</TipoText>
                </IconView>

            </Tipo>
            <Valor>R$ {data.valor.toFixed(2).toString().replace('.', ',')}</Valor>
        </Container>
    );
}