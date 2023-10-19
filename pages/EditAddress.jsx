import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TextInput,Pressable,ImageBackground, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import NotAllow from './NotAllow'
import login from '../redux/actions/singInAction'
import userChangeAction from '../redux/actions/userChangeAction'
import storage from '../utils/asyncStorage'

const EditAddress = ({ navigation }) => {

  const { user, token } = useSelector((store) => store.profile)
  const [data, setData] = useState({})
  const dispatch = useDispatch()

  function changeData() {
    const info = {
      city: data.city || data.address.city,
      country: data.country || data.address.country,
      postalCode: data.postalCode || data.address.postalCode,
      province: data.province || data.address.province,
      street: data.street || data.address.street,
      streetNumber: data.streetNumber || data.address.streetNumber,
      name: data.name,
      surname: data.surname,
      birthdate: data.birthdate,
      email: data.email
    }
    dispatch(userChangeAction(info))
    .then((res)=>{
      console.log(res);
     if (!res.payload.error) {
       navigation.navigate('Settings')
     }
    })
  }


  async function isLogged() {
    const tokenStorage = await storage.load({ key: 'token' })
    const userStorage = await storage.load({ key: 'user' })
    if (tokenStorage) {
      const data2 = {
        token: tokenStorage.token,
        user: userStorage.user
      }
      dispatch(login(data2))
        .then((res) => {
          setData({ ...res.payload.user, ...res.payload.user.address, birthdate: res.payload.user.birthdate.slice(0, 10).replaceAll("-", "/") })
        })
    }

  }
  useEffect(() => {
    if (!token || !token.length) {
      isLogged()
    } else {
      setData({ ...user, ...user.address, birthdate: user.birthdate.slice(0, 10).replaceAll("-", "/") })
    }
  }, [token])

  return (<>
    {token ?
      <View style={styles.conteiner}>
        <View style={styles.firstDiv}>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>Country</Text>
          <TextInput onChangeText={(text)=>setData({...data,country:text})} style={styles.input} defaultValue={data.address?.country}></TextInput>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>Province</Text>
          <TextInput onChangeText={(text)=>setData({...data,province:text})} style={styles.input} defaultValue={data.address?.province}></TextInput>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>City</Text>
          <TextInput onChangeText={(text)=>setData({...data,city:text})} style={styles.input} defaultValue={data.address?.city}></TextInput>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>Street</Text>
          <TextInput onChangeText={(text)=>setData({...data,street:text})} style={styles.input} defaultValue={data.address?.street}></TextInput>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>StreetNumber</Text>
          <TextInput onChangeText={(text)=>setData({...data,streetNumber:text})}  keyboardType='numeric' style={styles.input} defaultValue={data.address?.streetNumber}></TextInput>
        </View>
        <View style={styles.infoDiv}>
          <Text style={styles.infoText}>PostalCode</Text>
          <TextInput onChangeText={(text)=>setData({...data,postalCode:text})} keyboardType='numeric' style={styles.input} defaultValue={data.address?.postalCode}></TextInput>
        </View>
        </View>
        <View style={styles.secondDiv}>
        <Pressable onPress={() => changeData()} style={{ width: '100%', height: '100%' }}>
          <ImageBackground source={require('../public/src/madera.png')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Update</Text>
          </ImageBackground>
        </Pressable>
        </View>


      </View>
      :
      <NotAllow navigation={navigation} />
    }
  </>
  )
}
const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  firstDiv:{
    width:'100%',
    height:'90%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent:'center',
  },
  secondDiv:{
    width:'100%',
    height:"10%",
    paddingHorizontal:'20%',
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'center'
  },
  infoDiv: {
    width: '100%',
    height: '15%',
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5
  },
  input: {
    fontSize: 15,
    width: '100%',
    height: '50%',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 10
  },
})

export default EditAddress