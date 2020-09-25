import React from 'react';
import {Banner, Title, SubTitle, ContainerCarousel, ButtonCarousel} 
    from '../Styles/Styles_Carousel/Styles_CarouselItem';

export default function CarouselItem({item}){

        return(
            <ContainerCarousel>
                <ButtonCarousel>
                    <Banner source={{uri:`${item.img}`}}/*source={{ uri: item.img }}*//>
                    <Title >{item.title}</Title>
                    <SubTitle >{item.text}</SubTitle>
                </ButtonCarousel>
            </ContainerCarousel>
        )   
}

