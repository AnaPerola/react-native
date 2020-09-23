import React, {useState, useRef} from 'react';
import {ContainerScroll,Container,ContainerBackground, ImagBackground, 
    } from '../Styles_Carousel';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';


export default function Carousels({data}){  
  const [items, setItems] = useState(data);
  const [background, setbackground]= useState(items[0].img)
  const carouselRef = useRef(null);

  return (
      <ContainerScroll>
          <Container>
              <ContainerBackground>
                  <ImagBackground source={{uri:background}} blurRadius={8}/>
              </ContainerBackground>

              <Carousel
              ref={carouselRef}
              data={items}
              renderItem={({ item }) => {
                return <CarouselItem item={item} />
              }}
              sliderWidth={400}
              itemWidth={400}
              inactiveSlideOpacity={0.5}
              layout={'default'}
              layoutCardOffset={10}
              onSnapToItem={(index) => {
                  setbackground(items[index].img);
              }}
              />
          </Container>
      </ContainerScroll>
  )
}
