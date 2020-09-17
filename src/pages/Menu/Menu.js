import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAvoidingView, Button, Title, Scroll} from './../../components/Styles_Menu';
import { FontAwesome } from '@expo/vector-icons'; 

import Carousel from './../../components/Carousel/Carousels';
import {dummyData} from './../../data/Data'
export default function Menu({ navigation }){

    return (       
        <LinearGradient     
            colors={['#820606','#280101']}
            style={{flex:1, justifyContent: 'center', width:'100%', alignItems:'center'}}>
            <Scroll>
                <KeyboardAvoidingView behavior='padding' >
                    <Button onPress={()=> navigation.navigate("CarouselItem")}>
                        <Title>TESTE</Title>
                    </Button>
                </KeyboardAvoidingView>
            </Scroll>
        </LinearGradient>
    )
}
