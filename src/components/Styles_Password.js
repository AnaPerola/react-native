import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    justify-content:center;
    align-items:center;
    flex:1px;  
    align-self: stretch;
    width:400px;
    height:770px;
    margin-top:-90px;
    
`;

export const ImageProfile = styled.Image`    
    margin-top:-50px;
    left:-5px;
`;

export const Title = styled.Text`
    font-Weight: bold;
    color: #FFF;
    margin-bottom: -40px;
    font-size: 16px;
    text-align:center;  
    top:22px;
`;

export const Form = styled.View`    
    justify-content:center;
    align-items:center;
    width:95%;
    height:150px;
    background-color: rgba(500,500,400,0.5);
    border-radius:9px;
    top:70px;

`;

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 18px;
    top:-28px;
    left:-78px; 
`;

export const TextInput = styled.TextInput`
    background: #FFF;
    width:95%;
    color: #222;
    font-size: 17px;
    border-radius: 9px;
    padding: 10px;
    top:-25px;   
`;

export const Button = styled.TouchableOpacity`
    top:95px;
    background-color: #115037;
    width:95%;
    align-items:center;
    justify-content:center;
    padding: 10px;
    border-radius:9px;
    position:absolute; 

`;

export const TitleButton = styled.Text`
    color: #FFF;
    font-size: 20px; 
    font-weight: bold;
`;