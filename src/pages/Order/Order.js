import React from 'react';
import { ContainerUser , Title, Image,SubTitle, ContainerScroll} from '../../components/Styles/Styles_Order/Styles_Order';
import { LinearGradient } from 'expo-linear-gradient';
export default function Order({ navigation }) {
  return (
    <LinearGradient colors={['#820606','#280101']}
      style={{flex:1, justifyContent: 'center', alignItems:'center', width:400 }}>
    
    <ContainerUser>
      <Image source={{uri:'https://lh3.googleusercontent.com/proxy/GxBvcO4ePws6QApDLLD3KU52-Q3uEtVbyp_34oey9HVl_1O5RClzarE8gE2eK3M3_AuMQuqa7U3Pd3OOZENBK-T1lpJfVZmyJcHDiyi_WXil512Go5R8y3G9mLWi__KF1I0DSYgDVA'}}/>
      <Title>Ana Pérola Simões Ines</Title>
      <SubTitle>Entregar em: </SubTitle>
    </ContainerUser>
    </LinearGradient>

  )
}
