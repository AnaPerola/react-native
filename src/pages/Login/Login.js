import React , {useState}from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import {Alert, Input} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {KeyboardAvoidingView, ImageProfile, TextInput, SubTitle,
     Button, TitleButton, SubText, RegTitle, Form} from '../../components/Styles_Login';

import user from './../../assets/user.png';

export default function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function navigationToMenu(){
        console.log(email);
        console.log(password);
        if (email == "ana@hotmail.com"&& password =="123456") {
            Alert.alert("Login efetuado com Sucesso!", navigation.navigate('Menu'));
        }else {
            Alert.alert("ERRO", "Email ou Senha Invalidos!");
        }
    }


    return (
        <LinearGradient colors={['#820606','#280101']}
            style={{flex:1, justifyContent: 'center', alignItems:'center', width:400 }}>
                <ScrollView>
                    <KeyboardAvoidingView behavior='padding' >
                    <ImageProfile source={user}/>
                    <Form>
                        <SubTitle>E-MAIL *</SubTitle>
                        <TextInput type="text"
                        placeholder="email@example.com"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        name="email"
                        onChangeText={setEmail}
                        autoCorrect={false}>                          
                        </TextInput>

                          
                        <SubTitle>SENHA *</SubTitle>
                        <TextInput type="senha"
                        placeholder="Digite sua senha ..."
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="Password"
                        onChangeText={setPassword}
                        secureTextEntry={true}></TextInput>
                        <Button onPress={navigationToMenu}>
                            <TitleButton>LOGIN</TitleButton>
                        </Button>
                        
                    </Form>
                    <SubText onPress={()=> navigation.navigate('Password')}> X Esqueci a senha</SubText>
                    <RegTitle onPress={()=> navigation.navigate('Sign_up')}>CADASTRE-SE</RegTitle>
                    </KeyboardAvoidingView>
                </ScrollView>
        </LinearGradient>
    )
}
