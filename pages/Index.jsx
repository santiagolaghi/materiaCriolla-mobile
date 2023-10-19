import React, { useEffect } from 'react';
import { View, Text, Image, Button, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import login from '../redux/actions/singInAction';
import Products from '../redux/actions/productosAction';
import Categories from '../redux/actions/categoriesAction';
import Carousel from 'react-native-snap-carousel';
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
    const tokenStorage = await storage.load({ key: 'token' });
    const userStorage = await storage.load({ key: 'user' });
    if (tokenStorage) {
      const data2 = {
        token: tokenStorage.token,
        user: userStorage.user,
      };
      dispatch(login(data2));
    }
  }

  useEffect(() => {
    if (!token || !token.length) {
      isLogged();
    }
  }, [token]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          layout={'default'}
          layoutCardOffset={9}
          data={[
            { image: require('../public/src/mates2.jpg') },
            { image: require('../public/src/side-cover2.jpg') },
            { image: require('../public/src/yerba3.png') },
          ]}
          sliderWidth={300}
          itemWidth={250}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.carouselImage} />
          )}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Celebrating Mate: A Visual Journey</Text>
        <ScrollView style={styles.descriptionScrollView}>
          <Text style={styles.descriptionText}>
            Explore the rich and cultural world of mate through this captivating carousel. Discover the vibrant hues and unique shapes of traditional mate gourds, the lush greenery of yerba mate leaves, and the warmth of shared moments over steaming mate cups. Join us on a visual journey into the heart of South American tradition with these captivating images.
          </Text>
        </ScrollView>
      </View>
      {products.slice(0, 3).map((product, index) => (
        <View key={index} style={styles.productContainer}>
          <View style={styles.productImageContainer}>
            <Image source={{ uri: product.product_photo[0] }} style={styles.productImage} />
          </View>
          <Text style={styles.productTitle}>{product.name}</Text>
          <ScrollView style={styles.productDescriptionScrollView}>
            <Text style={styles.productDescription}>{product.description}</Text>
          </ScrollView>
          <ImageBackground
            source={require('../public/src/madera.png')}
            style={styles.buyButton}
          >
            <Text style={styles.buyButtonText}>Buy</Text>
          </ImageBackground>
        </View>
      ))}      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  carouselContainer: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  carouselImage: {
    width: 250,
    height: 200,
  },
  descriptionContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionScrollView: {
    maxHeight: 150,
  },
  descriptionText: {
    marginBottom: 16,
  },
  productContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  productImageContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: '40%',
    height: 150,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productDescriptionScrollView: {
    maxHeight: 100,
  },
  productDescription: {
    marginBottom: 8,
  },
  buyButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
  
  bottomImage: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
