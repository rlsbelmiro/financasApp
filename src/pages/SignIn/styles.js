import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;
export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const Logo = styled.Image`
    margin-bottom: 15px;
`;
export const AreaInput = styled.View`
    flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeHolderTextColor: 'rgba(255,255,255,0.60)'
})`
    background: #ccc;
    width: 90%;
    font-size: 17px;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
    border-width: 1;
    border-color: #00b94a
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #131313;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 15px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #fff;
`;
