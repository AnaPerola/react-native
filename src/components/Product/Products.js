import React, {useState} from 'react';
import {ContainerList, ContainerScroll} from '../Styles_Product';

import ProductItem from './ProductItem';

export default function Product({data}){
  const [items, setItems] = useState(data);

  return (
      <ContainerScroll horizontal={true} >
        <ContainerList data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
              return <ProductItem item={item}/>
          }}>

        </ContainerList>
      </ContainerScroll>
  )
}
