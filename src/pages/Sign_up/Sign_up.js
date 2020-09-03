import React, {useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {KeyboardAvoidingView, Form, Image, Title, Label, TextInput,
        Button, TextButton} from './../../components/Styles_Sign_up'
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
            <KeyboardAvoidingView behavior='height'>
                <ScrollView style={{  backgroundColor:'gray'}}>
                    <Image source={user}/>
                    <Title>* PREENCHA OS DADOS ABAIXO: *</Title>
                    <Form>
                        <Label >NOME COMPLETO *</Label>
                        <TextInput
                            placeholder="Digite o nome completo"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="userName"
                            onChangeText={setUserName}></TextInput>

                        <Label >E-MAIL*</Label>
                        <TextInput type="email"
                            placeholder="Digite o seu melhor E-mail ..."
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="email"
                            onChangeText={setEmail}></TextInput>

                        <Label >SENHA*</Label>
                        <TextInput 
                            placeholder="Digite sua melhor senha ..."
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="password"
                            onChangeText={setPassword}></TextInput>

                        <Label >CPF *</Label>
                        <TextInput 
                            placeholder="Digite seu CPF ..."
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="cpf"
                            onChangeText={setcpf}></TextInput>

                        <Label >GÊNERO*</Label>
                        <TextInput 
                            placeholder="Feminino/Masculino"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="sexo"
                            onChangeText={setSexo}></TextInput>

                        <Label >TELEFONE*</Label>
                        <TextInput 
                            placeholder="Digite seu Número ..."
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="phone"
                            onChangeText={setPhone}></TextInput>
                        <Label>NASCIMENTO*</Label>
                        <TextInput 
                            placeholder="XX/XX/XXXX..."
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="birthday"
                            onChangeText={setBirthday}></TextInput>
                        </Form>
                </ScrollView> 
                        <Button onPress={handleSubmit}>
                            <TextButton>
                                CADASTRAR
                            </TextButton>
                        </Button>
            </KeyboardAvoidingView>
        </LinearGradient>
    )

};