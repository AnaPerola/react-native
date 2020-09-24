import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    justify-content:center;
    align-items:center;
    flex:1px;  
    align-self: stretch;

`;

export const Form = styled.View`
    width:95%;
    height:450px;
    background-color: rgba(500,500,400,0.5);
    border-radius:10px;
    margin-top:2px;
`;
export const ContainerInput = styled.View`
    justify-content:center;
    align-items:center;  
    margin-top:20px;
    background-color:#FFF;
    border-radius:10px;
    width: 95%;
    flex-direction: row;
    align-self: center;
    top:-10px;
`;
export const TextInput = styled.TextInput`
    font-size:17px;
    width:95%;
    padding:7px;
    padding-left:20px;
`;
export const Button = styled.TouchableOpacity`
    position:absolute;
    right:10px;
    top:8px;
    align-items:center;
    
`;
export const Scroll = styled.ScrollView`

`;

export const TitleDescription = styled.Text`
    font-size:18px;
    padding:7px;
    padding-left:10px;
    font-weight:bold;
    color:white;

`;

