import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAvoidingView, Image, Form} from './../../components/Styles_Menu';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu({ navigation }){

    return (
        <LinearGradient     
            colors={['#820606','#280101']}
            style={{flex:1, justifyContent: 'center', width:'100%', alignItems:'center'}}>
            <ScrollView>
                    <KeyboardAvoidingView behavior='padding' >
                        
                        <Form>

                        </Form>
                    </KeyboardAvoidingView>
            </ScrollView>
        </LinearGradient>

    )
}
