import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    justify-content:center;
    align-items:center;
    flex:1px;  
    align-self: stretch;

`;
export const Form = styled.View`
    width:380px;
    height:440px;
    background-color: rgba(500,500,400,0.5);
    border-radius:10px;
    margin-top:50px;
`;
export const Image = styled.Image`
    top: 30px;
    width:100px;
    height:100px;
    left:135px;
`;

export const Title = styled.Text`
    color: #FFF;
    margin-bottom: 10px;
    font-size: 14px;
    top:60px;
    text-align:center;
`;
export const TextInput = styled.TextInput`
    background: #FFF;
    width:94%;
    margin-bottom: 2px;
    color: #222;
    font-size: 14px;
    border-radius: 9px;
    padding: 5px;
    left:10px;

`;
export const Label = styled.Text`
    font-Weight: bold;
    color: #FFF;
    left:20px;
    margin-bottom: 10px;
    font-size: 17px;
    top:10px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #115037;
    width:380px;
    align-items:center;
    justify-content:center;
    padding: 10px;
    border-radius:9px;
    position:absolute; 
    top:630px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size: 22px; 
    font-weight: bold;
`;


