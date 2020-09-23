import React from 'react';
import {Container, Banner, Title, Description, TitlePrice, Button, TitleButton} 
      from '../Styles_ProductItem';
import { FontAwesome } from '@expo/vector-icons'; 

export default function ProductItem({item}){
    return(
        <Container> 
            <Banner source={{uri:`${item.img}`}}/>
            <Title>{item.title}</Title>
            <Description>{item.text}</Description> 
            {/*<TitlePrice>{item.price}</TitlePrice>*/}                   
        </Container>
    )
}