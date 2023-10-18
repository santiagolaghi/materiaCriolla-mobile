import React from 'react'
import {View,Text,TextInput,Image} from 'react-native'
import {StyleSheet} from 'react-native'
const Profile = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.firstDiv}>
        <View style={styles.profileImage}>
          <Image/>
        </View>
        <View style={styles.TextUnderImg}>
        <Text style={{fontSize:36,color:'white'}}>Ricardo Fort</Text>
        <Text style={{fontSize:14,color:'white'}}>materiaCriolla@gmail.com</Text>
        </View>


      </View>
      <View style={styles.secondDiv}>
          <View>
            <Text>Email</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Date of birth</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Name</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Surname</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Address</Text>
            <View>
            <TextInput>Country</TextInput>
            <TextInput>City</TextInput>
            <TextInput>Province</TextInput>
            <TextInput>Street</TextInput>
            <View>
            <TextInput>PostalCode</TextInput>
            <TextInput>StreetNumber</TextInput>
            </View>
            </View>

          </View>
          
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  conteiner:{
    width:'100vw',
    height:'auto',
    backgroundColor:'white'
  },
  firstDiv:{
    width:'100%',
    height:'40%',
    backgroundColor:'blue',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
    gap:10
  },
  secondDiv:{
    width:'100%',
    height:'60%'
  },
  profileImage:{
    width:'30%',
    height:'40%',
    borderRadius:100,
    backgroundColor:'white'
  },
  TextUnderImg:{
    alignItems:'center'
  }
})

export default Profile