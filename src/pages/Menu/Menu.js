import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAvoidingView, Button, TextInput, Scroll, ContainerInput, Form,
    TitleDescription} from './../../components/Styles_Menu';
import { FontAwesome } from '@expo/vector-icons'; 

import Carousel from './../../components/Carousel/Carousels';
import {dummyData} from '../../data/FeaturedData'; 
import {productData} from '../../data/ProductData';  
import Product from '../../components/Product/Products';

export default function Menu({ navigation }){

    return (       
        <LinearGradient     
        colors={['#820606','#280101']}
        style={{flex:1, justifyContent: 'center', width:'100%', alignItems:'center'}}>
        <Scroll>
            <KeyboardAvoidingView>
                <Carousel data={dummyData}/>
                <ContainerInput>
                    <TextInput 
                    type="text"
                    placeholder="Procurando algo?"
                    placeholderTextColor="#999"
                    autoCapitalize="none"/>
                   <Button>
                        <FontAwesome name="search" size={23} color="black"/>
                    </Button>
                </ContainerInput>
                <Form>
                    <TitleDescription>
                        Destaques do Dia: 
                    </TitleDescription>
                    <Product data={productData}/>
                </Form>
            </KeyboardAvoidingView>
        </Scroll>
    </LinearGradient>
    )
}
