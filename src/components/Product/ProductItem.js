import React from 'react';
import {Container, Banner, Title, Description, Price, Button, TitleButton} 
      from '../Styles_ProductItem';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ProductItem({item}){
    return(
        <Container> 
            <Banner source={{uri:`${item.img}`}}/>
            <Title>{item.title}</Title>
            <Description>{item.text}</Description> 
            <Price>{`R$${item.price},00/und.`}</Price>
            <Button onPress={()=>NavigationContainer.navigate('order')}>
                <TitleButton>Adicionar</TitleButton>
            </Button>                 
        </Container>
    )
}