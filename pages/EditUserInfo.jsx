import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image,Pressable,ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import NotAllow from './NotAllow'
import storage from '../utils/asyncStorage'
import login from '../redux/actions/singInAction'
import userChangeAction from '../redux/actions/userChangeAction'

const EditUserInfo = ({ navigation }) => {
  const { user, token } = useSelector((store) => store.profile)
  const [renderizar, setRenderizar] = useState(false)
  const [edit, setedit] = useState(false)
  const [data, setData] = useState({})

  const dispatch = useDispatch()

  function changeData(params) {
    const info={
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
  return (
    <>
      {token ? (
        <View style={styles.conteiner}>
          <View style={styles.firstDiv}>
            <View style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center',position:'relative'}}>
            <Image style={styles.profileImage} src={data.photo} />
            <View style={{position:'absolute',bottom:15,right:25,paddingVertical:6,paddingHorizontal:6,borderWidth:1,borderRadius:100,backgroundColor:'white'}}>
            <Pressable>
            <Image style={{width:25,height:25}} source={require('../assets/changeImage.png')}/>
            </Pressable>
            </View>
            </View>
          </View>

          <View style={styles.secondDiv}>
          <View style={styles.infoDiv}>
              <Text style={styles.infoText}>Name</Text>
              <TextInput onChangeText={(text)=>setData({...data,name:text})} defaultValue={data.name} style={styles.input}></TextInput>
            </View>
            <View style={styles.infoDiv}>
              <Text style={styles.infoText}>Surname</Text>
              <TextInput onChangeText={(text)=>setData({...data,surname:text})} defaultValue={data.surname} style={styles.input}></TextInput>
            </View>
            <View style={styles.infoDiv}>
              <Text style={styles.infoText}>Email</Text>
              <TextInput keyboardType='email-address' onChangeText={(text)=>setData({...data,email:text})} defaultValue={data.email} style={styles.input}></TextInput>
            </View>
            <View style={styles.infoDiv}>
              <Text style={styles.infoText}>Date of birth</Text>
              <TextInput keyboardType='numeric' onChangeText={(text)=>setData({...data,birthdate:text})} defaultValue={data.birthdate} style={styles.input}></TextInput>
            </View>
          </View>

          <View style={styles.ThirdDiv}>
            <Pressable onPress={()=>changeData()} style={{width:'100%',height:'100%'}}>
              <ImageBackground source={require('../public/src/madera.png')} style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Update</Text>
              </ImageBackground>
            </Pressable>
          </View>

        </View>
      )
        :
        <NotAllow navigation={navigation} />
      }
    </>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    width: '100vw',
    height: 'auto',
    backgroundColor: 'white'
  },
  firstDiv: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'start',
  },
  secondDiv: {
    width: '100%',
    height: '65%',
    alignItems: 'start',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  ThirdDiv:{
    width:'100%',
    height:'10%',
    paddingHorizontal:'20%',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
  },
  profileImage: {
    width:'100%',
    height: '100%',
    borderRadius: 100,
    objectFit: 'contain'
  },
  input: {
    fontSize: 15,
    width:'100%',
    height:'50%',
    borderWidth:1,
    borderColor:'#666',
    borderRadius:10,
    paddingHorizontal:10
  },
  TextUnderImg: {
    alignItems: 'center'
  },
  adressInfoConteiner: {
    width: '50%',
    paddingRight: 5,
  },
  infoDiv: {
    width: '100%',
    height: '25%',
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal:5
  },
  addressDiv: {
    width: '100%',
    height: '40%',
    borderBottomWidth: 1,
    borderBottomColor: '#666'
  }
})

export default EditUserInfo