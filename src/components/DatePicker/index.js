import React, { useState } from 'react';
import { Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Header, BotaoTextoIOS } from './styles';

export default function DatePicker({ onClose, date, onChange }) {
    const [dateNow, setDateNow] = useState(new Date(date));
    return (
        <Container>
            {
                Platform.OS === 'ios' && (
                    <Header>
                        <TouchableOpacity
                            style={{
                                borderRightWidth: 1,
                                borderRightColor: 'rgba(0,0,0,0.3)',
                                paddingRight: 5,
                                marginRight: 5
                            }}
                            onPress={() => {
                                const currentDate = new Date();
                                setDateNow(currentDate);
                                onChange(currentDate);
                            }}>
                            <BotaoTextoIOS>Ir para hoje</BotaoTextoIOS>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose}>
                            <BotaoTextoIOS>Fechar</BotaoTextoIOS>
                        </TouchableOpacity>

                    </Header>
                )
            }
            <DateTimePicker
                value={dateNow}
                mode="date"
                display="default"
                style={{ backgroundColor: 'white' }}
                onChange={(e, d) => {
                    const currentDate = d || dateNow;
                    setDateNow(currentDate);
                    onChange(currentDate);
                }}
            />
        </Container>
    );
}