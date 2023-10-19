import React, { useEffect } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import  login  from '../redux/actions/singInAction'; 
import  Products  from '../redux/actions/productosAction'; 
import  Categories  from '../redux/actions/categoriesAction'; 
import  Carousel  from 'react-native-snap-carousel';
import storage from '../utils/asyncStorage';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
         dispatch(Products());
         dispatch(Categories());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const products = useSelector((store) => store.products.products);
  const { user, token } = useSelector((store) => store.profile);

  async function isLogged() {
    const tokenStorage = await storage.load({ key: 'token' })
    const userStorage = await storage.load({ key: 'user' })
    if (tokenStorage) {
      const data2 = {
        token: tokenStorage.token,
        user: userStorage.user
      }
      dispatch(login(data2))
    }

  }

  useEffect(() => {
    if (!token || !token.length) {
      isLogged()
    }
  },[token])

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: 16 }}>
        <View style={{ shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 3 }}>
          <Carousel
            layout={'default'}
            layoutCardOffset={9}
            data={[
              { image: require('../public/src/mate1.png') },
              { image: require('../public/src/mate1.png') },
              { image: require('../public/src/mate1.png') },
            ]}
            sliderWidth={300}
            itemWidth={250}
            renderItem={({ item }) => (
              <Image source={item.image} style={{ width: 250, height: 200 }} />
            )}
          />
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>Celebrating Mate: A Visual Journey</Text>
        <Text>
          Explore the rich and cultural world of mate through this captivating carousel. Discover the vibrant hues and unique shapes of traditional mate gourds, the lush greenery of yerba mate leaves, and the warmth of shared moments over steaming mate cups. Join us on a visual journey into the heart of South American tradition with these captivating images.
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', margin: 16 }}>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 3 }}>
            <Image source={products[0]?.product_photo} style={{ width: '100%', height: 150 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>{products[0]?.name}</Text>
            <Text>{products[0]?.description}</Text>
            <Button title="Buy" color="blue" />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 3 }}>
            <Image source={products[1]?.product_photo} style={{ width: '100%', height: 150 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>{products[1]?.name}</Text>
            <Text>{products[1]?.description}</Text>
            <Button title="Buy" color="blue" />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 8, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 3 }}>
            <Image source={products[2]?.product_photo} style={{ width: '100%', height: 150 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>{products[2]?.name}</Text>
            <Text>{products[2]?.description}</Text>
            <Button title="Buy" color="blue" />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'center' }}>
        <Image source={require('../public/src/mate1.png')} style={{ width: '100%', height: '100%' }} />
      </View>
    </ScrollView>
  );
};

export default Home;
