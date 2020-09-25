import styled from 'styled-components/native';

export const Container = styled.View`
    width: 365px;
    height:100px;
    align-self:center;
    max-height:50%;
    
`;
export const Banner = styled.Image`
    align-self: flex-start;
    width: 80px;
    height: 80px;
    border-radius:20px;
`;
export const Title = styled.Text`
    top:-80px;
    color: white;
    font-weight:bold; 
    font-size:20px; 
    left:85px; 
`;
export const Description = styled.Text`
    color: white;
    font-size:15px; 
    left:85px;  
    top:-80px;
    width:250px;
`;
export const Price = styled.Text`
    color: black;
    font-size:18px; 
    left:85px;  
    top:-80px;
    font-weight:bold;

`;
export const Button = styled.TouchableOpacity`
    background-color: #115037;
    width:90px;
    height:20px;
    border-radius:9px;
    justify-content:center;
    top:-100px;
    left:190px;

`;
export const TitleButton = styled.Text`
    color: #FFF;
    font-size: 15px; 
    font-weight: bold;
    text-align:center;

`;
