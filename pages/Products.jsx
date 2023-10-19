import { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, Pressable, Button, ImageBackground, TextInput } from 'react-native'
import { useSelector } from 'react-redux'

const Products = () => {
    let products = useSelector((store) => store.products.products)
    let categories = useSelector((store) => store.categories.categories)
    const [checked, setChecked] = useState([])
    const [nameFilter, setNameFilter] = useState("");
    const arrayChecked = checked.map(checkbox => checkbox);
    const [search, setSearch] = useState(false)

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setChecked((prevChecked) => [...prevChecked, value]);
        } else {
            setChecked((prevChecked) => prevChecked.filter((item) => item !== value));
        }
    }

    function filterByCategory(products, categories) {
        if (categories.length === 0) {
            return products;
        } else {
            const filtered = products.filter(product => categories.includes(product.category_id.name));
            return filtered;
        }
    }

    function filterByName(products, name) {
        const filtered = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
        return filtered;
    }

    const filteredProductsByName = filterByName(products, nameFilter);
    const filteredProducts = filterByCategory(filteredProductsByName, arrayChecked);

    return (
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Pressable onPress={() => setSearch(!search)}>
                    <Image style={{ width: 30, height: 30, position: 'absolute', top: 45, right: 30 }} source={require('../assets/search.png')} />
                </Pressable>
                {search&&
                <TextInput style={{position:'absolute',top:45,left:20,width:'70%',borderWidth:1,borderRadius:10,paddingHorizontal:5}}/>}
            </View>
            <Text style={{ fontSize: 30, width: '100%', paddingHorizontal: 10 }}>Our Products</Text>
            <View style={{ width: '100%', height: '10%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
                <ScrollView overScrollMode="never" horizontal={true} contentContainerStyle={{ gap: 20, alignItems: 'center', justifyContent: 'center' }} style={{ width: 'auto', height: '100%' }}>
                    {categories?.map((category) => {
                        return (<ImageBackground source={require('../public/src/madera.png')} borderRadius={20} style={styles.checkboxes}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{category.name}</Text>
                        </ImageBackground>)
                    })}
                </ScrollView>
            </View>
            <ScrollView overScrollMode="never" contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', rowGap: 20 }} style={{ width: '100%', height: '100%', paddingVertical: 20 }}>
                {products?.map((product) => {
                    return (<View style={styles.cards}>
                        <Image style={{ position: 'absolute', top: 5, right: 5, width: 25, height: 25 }} source={require('../assets/notAddedCheckout.png')} />
                        <Image source={{ uri: product.product_photo[0] }} style={{ width: '100%', height: '55%', objectFit: 'contain' }} />
                        <View style={{ width: '100%', height: '45%', alignItems: 'center' }}>
                            <View style={{ width: '100%', height: '60%', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>{product.name}</Text>
                            </View>
                            <Text style={{ fontSize: 18 }}>${product.price}</Text>
                            <Text style={{ fontSize: 12 }}>Stock:{product.quantity}</Text>
                        </View>
                    </View>)
                })

                }

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',

    },
    header: {
        width: '100%',
        height: '10%',
    },
    checkboxes: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cards: {
        width: '40%',
        height: 250,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        position: 'relative'
    }

})

export default Products