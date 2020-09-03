import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Container, Image , TouchableOpacity, TitleButton} from './../../components/Styles_Index';

import logo from './../../assets/logo.png';

export default function Index({ navigation }){

    return (
        <Container>
            <LinearGradient     
                colors={['#820606','#280101']}
                style={{flex:1, justifyContent: 'center'}}>
                <Image source={logo}/>
            </LinearGradient>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <TitleButton >ACESSAR</TitleButton>
            </TouchableOpacity>
        </Container>
    )
}
