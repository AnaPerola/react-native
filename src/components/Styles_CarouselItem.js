import styled from 'styled-components/native';

export const ContainerCarousel = styled.View`
    width:100%;
    height:100%;
    justify-content:center;
    align-content:center;
`;
export const ButtonCarousel = styled.TouchableOpacity`
    flex:1px;
    overflow:visible;
    border-color:white;
    
`;
export const Banner = styled.Image`
    align-self: center;
    justify-content:center;
    width: 380px;
    height: 220px;
    top:8px;
    left:-4px;
    border-radius:20px;

`;
export const Title = styled.Text`
    padding:15px;
    color: white;
    position: absolute;
    bottom: 15px;
    left:10px;
    font-weight:bold; 
    font-size:24px;   
    
`;
export const SubTitle = styled.Text`
    font-size:12px;
    left:25px;
    top:-15px;
    color:white;
`;


