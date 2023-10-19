import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import NotAllow from './NotAllow'

const Checkout = ({navigation}) => {
    const {user,token}=useSelector((store)=>store.profile)

    useEffect(()=>{
    },[token])
  return (<>
  
    {token?<View>

    </View>:<NotAllow navigation={navigation}/>}
  </>
  )
}

export default Checkout