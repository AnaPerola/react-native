import styled from 'styled-components/native';
export const ContainerScroll = styled.ScrollView`
    align-self:center;
    width:100%;
    height:100%;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    justify-content:center;
    align-items:center;
    align-self: stretch;
    width:100%;
    height:766px;
`;
export const ImageProfile = styled.Image`    
    margin-top:-200px;

`;
export const Form = styled.View`    
    justify-content:center;
    align-items:center;
    width:370px;
    height:200px;
    background-color: rgba(500,500,400,0.5);
    border-radius:9px;
    margin-top:30px;
    margin-right:7px;

`;
export const TextInput = styled.TextInput`
    background: #FFF;
    width:95%;
    margin-bottom: 15px;
    color: #222;
    font-size: 17px;
    border-radius: 9px;
    padding: 10px;
    top:-10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    top:40px;
    width:60px;
    left:20px;
    position:absolute;
    bottom:10px;
`;
export const ButtonIcons = styled.TouchableOpacity`
    top:100px;
    width:60px;
    left:20px;
    position:absolute;
    bottom:10px;
`;

export const ButtonNavigation = styled.TouchableOpacity`
    top:145px;
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
    font-size: 22px; 
    font-weight: bold;
`;

export const Title= styled.Text`
    color: gray;
    font-size: 18px; 
    left:100px;
    font-style:italic;
    margin-top:5px;
`;
export const SubTitle = styled.Text`
    color: white;
    top:150px;
    font-weight:bold;
    font-size:26px;
    margin-top:-90px;
`;