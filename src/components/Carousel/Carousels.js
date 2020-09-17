import React from 'react';
import {ContainerScroll,List, ContainerBackground, ImagBackground, 
    } from '../Styles_Carousel';


export default function Carousels({data}){  

  return (
    <ContainerScroll 
      data={data} 
      keyExtractor={(item, index) => 'key' + index}>

    </ContainerScroll>
)}
