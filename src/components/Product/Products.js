import React, {useState} from 'react';
import { ContainerScroll, Container} from '../Styles_Product';
import Carousel from 'react-native-snap-carousel';
import ProductItem from './ProductItem';

export default function Product({data}){
  const [items, setItems] = useState(data);

  return (
      <ContainerScroll data={items}
        keyExtractor={item => item.id}
        horizontal
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return <ProductItem item={item}/>
        }}>
          <Container>
                <List>
                  
                </List>
          </Container>

      </ContainerScroll>
  )
}
