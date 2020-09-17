import React, {useState} from 'react';
import {ContainerScroll, Banner, Title, SubTitle, ContainerCarousel, ButtonCarousel,Container,
    ContainerBackground, ImagBackground} from './../Styles_ItemCarousel';
import Carousel from 'react-native-snap-carousel'


export default function CarouselItem({item}){
    const [items, setItems] = useState([
        {
            title: "Lanches",
            text:"CONFIRA NOSOS LANCHES MARAVILHOSOS",
            release:2020,
            img: 'https://i.pinimg.com/564x/f9/bc/0c/f9bc0c3885c0fd4225bc3602d4663164.jpg',
        },
        {
            title: "Bebidas",
            text:"ESCOLHA A BEBIDA PERFEITA",
            release:2020,
            img: 'https://i.pinimg.com/236x/3e/1e/28/3e1e28e5fdb98daf0262f9b0e4fdbc32.jpg',
        },
        {
            title: "Porções",
            text:"CONFIRA NOSSAS PORÇÕES MARAVILHOSAS",
            release:2020,
            img: 'https://i.pinimg.com/564x/90/fa/e2/90fae24c5fc8d5808f756bb29f0e369d.jpg',
        },   
        {
            title: "Promoções",
            text:"CLIQUE PARA MAIS DETALHES",
            release:2020,
            img: 'https://i.pinimg.com/564x/ce/e0/86/cee086990ffbf60b6a1d8e13c5ba790b.jpg'
        },   
    ]);
    const [background, setbackground]= useState(items[0].img)

    const _renderItem = ({item, index})=> {
        return(
            <ContainerCarousel>
                <ButtonCarousel>
                    <Banner source={{uri:`${item.img}`}}/>
                    <Title>{item.title}</Title>
                    <SubTitle>{item.text}</SubTitle>
                </ButtonCarousel>
            </ContainerCarousel>
        )   
    }

    return (
        <ContainerScroll>
            <Container>
                <ContainerBackground>
                    <ImagBackground source={{uri:background}} blurRadius={8}>
                    </ImagBackground>
                </ContainerBackground>

                <Carousel
                layout={'default'}
                layoutCardOffset={10}
                data={items}
                sliderWidth={400}
                itemWidth={400}
                renderItem={_renderItem}
                inactiveSlideOpacity={0.5}
                />
            </Container>
        </ContainerScroll>
    )
}

