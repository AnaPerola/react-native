import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content:center;
    align-items: center;

`;

export const Image = styled.Image`    
    height:400px;
    width: 400px;
    justify-content:center;
    margin-top:-200px;
`;

export const TitleButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    text-align:center; 
    font-family:sans-serif;
`;

export const TouchableOpacity = styled.TouchableOpacity`
    top:550px;
    background-color: #115037;
    align-items:center;
    width:90%;
    padding: 15px 50px;
    border-radius:10px;
    position:absolute; 
`;
