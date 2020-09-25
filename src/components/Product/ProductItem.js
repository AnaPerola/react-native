import React from 'react';
import {Container, Banner, Title, Description, Price, Button, TitleButton} 
      from '../Styles/Styles_Product/Styles_ProductItem';
import { useNavigation } from '@react-navigation/native';

export default function ProductItem({item}){
    const navigation = useNavigation();

    return(
        <Container> 
            <Banner source={{uri:`${item.img}`}}/>
            <Title>{item.title}</Title>
            <Description>{item.text}</Description> 
            <Price>{`R$${item.price},00/und.`}</Price>
            <Button onPress={() => navigation.navigate('Order')}>
                <TitleButton>Adicionar</TitleButton>
            </Button>                 
        </Container>
    )
}