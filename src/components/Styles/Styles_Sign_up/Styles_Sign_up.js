import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView`
    align-self:center;
    width:380px;
    flex:1px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    justify-content:center;
    align-items:center;
    width:380px;
    height:760px;

`;

export const Image = styled.Image`
    align-self:center;
    width:100px;
    height:100px;    
    top:-40px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 17px;
    top:-25px;
    text-align:center;
    font-weight:bold;
    font-style:italic;
`;

export const Form = styled.View`
    justify-content:center;
    align-content:center;
    align-self:center;
    width:95%;
    height:550px;
    background-color: rgba(500,500,400,0.5);
    border-radius:9px;
    top:-10px;
    `;

export const TextInput = styled.TextInput`
    background: #FFF;
    align-self:center;
    width:95%;
    margin-bottom: 5px;
    top:-10px;
    color: gray;
    font-size: 14px;
    border-radius: 9px;
    padding: 8px;    

`;

export const SubTitle = styled.Text`
    top:-12px;
    color: #FFF;
    left:16px;
    font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #115037;
    width:95%;
    align-items:center;
    align-self:center;
    justify-content:center;
    padding: 10px;
    border-radius:9px;
    top:-2px;

`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size: 20px; 
    font-weight: bold;
`;


