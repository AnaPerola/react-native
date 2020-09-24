import React, {useState} from 'react';
import {KeyboardAvoidingView, Form, Image, Title,TextInput,SubTitle,
        Button, TextButton, ContainerScroll} from './../../components/Styles_Sign_up'

import { LinearGradient } from 'expo-linear-gradient';

import user from './../../assets/user.png';

export default function Sign_up({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [cpf, setcpf] = useState('');
    const [sexo, setSexo] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');

    async function handleSubmit(){
        //console.log(userName, email, password);
        //console.log(cpf, sexo, phone, birthday);
    }

    return ( 
        <LinearGradient colors={['#820606','#280101']}
        style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <ContainerScroll>
                <KeyboardAvoidingView behavior='height'>
                <Image source={user}/>
                <Title>* PREENCHA OS DADOS ABAIXO: *</Title>
                   <Form>
                       <SubTitle>Digite seu nome completo: </SubTitle>
                        <TextInput
                            placeholder="Nome Completo"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="userName"
                            onChangeText={setUserName}
                        />
                        <SubTitle>Digite seu melhor email: </SubTitle>
                        <TextInput type="email"
                            placeholder="email@example.com"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="email"
                            onChangeText={setEmail}
                        />
                        <SubTitle>Digite sua melhor senha </SubTitle>
                        <TextInput 
                                placeholder="Senha"
                                placeholderTextColor="#999"
                                autoCapitalize="none"
                                autoCorrect={false}
                                name="password"
                                onChangeText={setPassword}
                        />
                        <SubTitle>Digite seu CPF</SubTitle>
                        <TextInput 
                            placeholder="CPF"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="cpf"
                            onChangeText={setcpf}
                        />
                        <SubTitle>*Escolha seu Gênero*</SubTitle>
                        <TextInput 
                            placeholder="Feminino/Masculino"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="sexo"
                            onChangeText={setSexo}
                        />
                        <SubTitle>Digite sua melhor número para contato</SubTitle>
                        <TextInput 
                            placeholder="(   ) 00000-0000"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="phone"
                            onChangeText={setPhone}
                        />
                        <SubTitle>Digite a data do seu aniversário</SubTitle>
                        <TextInput 
                            placeholder="00/00/0000"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="birthday"
                            onChangeText={setBirthday}
                        />
                        <Button onPress={handleSubmit}>
                            <TextButton>
                                CADASTRAR
                            </TextButton>
                        </Button>
                   </Form> 
                </KeyboardAvoidingView>
            </ContainerScroll>
        </LinearGradient>
    )

};