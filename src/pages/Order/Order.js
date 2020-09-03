import React from 'react';
import { View , Button} from 'react-native';

// import { Container } from './styles';

export default function OrderScrenn ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back login" />
    </View>
  )
}
