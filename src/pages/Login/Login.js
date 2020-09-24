import React , {useState}from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Alert} from 'react-native';
import { MaterialIcons , AntDesign} from '@expo/vector-icons'; 

import {ContainerScroll, ButtonIcon, ButtonIcons,KeyboardAvoidingView, ImageProfile, TextInput, 
    ButtonNavigation, TitleButton, SubTitle, Title, Form} from '../../components/Styles_Login';

import user from './../../assets/user.png';

export default function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function navigationToMenu(){
        console.log(email);
        console.log(password);
        if (email == "ana@hotmail.com"&& password =="123456") {
            navigation.navigate('Menu');
        }else {
            Alert.alert("ERRO", "Email ou Senha Invalidos!");
        }
    }


    return (
        <LinearGradient colors={['#820606','#280101']}
            style={{flex:1, justifyContent: 'center', alignItems:'center', width:400 }}>
            <ContainerScroll>
                <KeyboardAvoidingView behavior='padding' >
                <ImageProfile source={user}/>
                <Form>
                    <TextInput type="text"
                    placeholder="        email@example.com"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    name="email"
                    onChangeText={setEmail}
                    autoCorrect={false}/>
                    <ButtonIcon>
                        <MaterialIcons name="email"  size={25} color="#820606"/>
                    </ButtonIcon>

                    <TextInput type="senha"
                    placeholder="        Digite sua senha ..."
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                    />
                     <ButtonIcons>
                        <AntDesign name="lock"  size={25} color="#820606"/>
                    </ButtonIcons>
                    <ButtonNavigation onPress={navigationToMenu}>
                        <TitleButton>LOGIN</TitleButton>
                    </ButtonNavigation>
                    
                </Form>
                <Title onPress={()=> navigation.navigate('Password')}> Esqueci minha senha</Title>
                <SubTitle onPress={()=> navigation.navigate('Sign_up')}>CADASTRE-SE</SubTitle>
                </KeyboardAvoidingView>
            </ContainerScroll>

        </LinearGradient>
    )
}
