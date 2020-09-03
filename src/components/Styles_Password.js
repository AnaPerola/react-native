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
export const SubTitle = styled.Text`
    font-Weight: bold;
    color: #FFF;
    left:-130px;
    margin-bottom: 10px;
    font-size: 18px;
    top:-15px;
`;
export const TextInput = styled.TextInput`
    background: #FFF;
    width:90%;
    margin-bottom: 15px;
    color: #222;
    font-size: 17px;
    border-radius: 9px;
    padding: 10px;
    top:-23px;   
`;
export const Form = styled.View`    
justify-content:center;
align-items:center;
width:370px;
height:250px;
background-color: rgba(500,500,400,0.5);
border-radius:9px;
top:70px;
left:-5px;
`;
export const Button = styled.TouchableOpacity`
    top:185px;
    background-color: #115037;
    width:333px;
    align-items:center;
    justify-content:center;
    padding: 10px;
    border-radius:9px;
    position:absolute; 

`;
export const TitleButton = styled.Text`
    color: #FFF;
    font-size: 22px; 
    font-weight: bold;
`;