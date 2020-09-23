import styled from 'styled-components/native';

export const Container = styled.View`
    width:100%;
    height:100%;
    justify-content:center;
    align-content:center;

`;
export const Banner = styled.Image`
    align-self: center;
    width: 90px;
    height: 100px;
    top:-130px;
    left:-145px;
    border-radius:20px;
`;
export const Title = styled.Text`
    top:-225px;
    left: 105px;
    color: white;
    font-weight:bold; 
    font-size:20px;  
`;
export const Description = styled.Text`
    top:-225px;
    color: white;
    left:105px;
    font-size:15px;  
`;
export const Price = styled.Text`
    font-size:10px;
    left:105px;
    top:-225px;
    color:white;
    font-weight:bold;

`;
export const Button = styled.TouchableOpacity`
    flex:1px;
    overflow:visible;
    border-color:white;

`;
