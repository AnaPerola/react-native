import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView`
    flex: 1;
`;
export const Container = styled.View`
    flex:1;
`;

export const ContainerBackground = styled.View`
    position:absolute;
    background-color: #000;

`;
export const Banner = styled.Image`
    align-self: center;
    width: 400px;
    height: 150px;
    border-radius: 12px;
    background-color: rgba(0,0,0,0.5);

`;
export const Title = styled.Text`
    
    color: white;
    position: absolute;
    bottom: 2px;
    left: 2px;
    font-weight:bold;    
`;
export const SubTitle = styled.Text`
    font-size:12px;
    color: white;
    position: absolute;
    

`;


export const ContainerCarousel = styled.View`
    background-color: #333;
    border-radius:4px;
    height:250px;
    padding:20px;
    margin-top:5px;
`;
export const ButtonCarousel = styled.TouchableOpacity`

`;





export const ImagBackground = styled.ImageBackground`
    flex:1px;
    opacity:1px;
    justify-content:flex-start;
    background-color:#000;
`;





