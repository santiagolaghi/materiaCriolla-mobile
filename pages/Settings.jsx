import { useEffect } from "react"
import { View, Image, Text, Pressable, ImageBackground, StyleSheet } from "react-native"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import SignOut from '../redux/actions/signOutAction'
import storage from "../utils/asyncStorage"

const Settings = ({ navigation }) => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((store) => store.profile)

    const Logout = async () => {
        // Despacha la acción de logoutUser para actualizar el estado de Redux
        dispatch(SignOut(token))
            .then(() => {
                navigation.navigate('Home')
            })
        // Redirige al usuario a la pantalla de inicio (reemplaza 'Home' por el nombre de tu pantalla de inicio)

    };


    useEffect(() => {

    }, [])

    return (
        <View style={styles.conteiner}>

            <ImageBackground style={styles.userDiv}>
                {token ? <>
                    <Image style={styles.profileImage} src={user.photo} />
                    <View>
                        <Text style={{ fontSize: 12, color: '#666', paddingHorizontal: 5 }}>Hello</Text>
                        <Text style={{ fontSize: 40 }}>{user.name}</Text>
                        <Text style={{ fontSize: 30, color: '#666', paddingHorizontal: 5 }}>{user.surname}</Text>
                    </View></>
                    :
                    <>
                        <Image style={styles.profileImage} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }} />
                        <View style={{width:'100%',height:'100%',paddingVertical:15}}>
                            <Text>Hello</Text>
                            <Text style={{ fontSize: 35 }}>User</Text>
                        </View></>
                }
            </ImageBackground>

            <View style={styles.buttonsDiv}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Pressable onPress={() => navigation.navigate('EditUserInfo')} style={styles.buttons}>
                            <Image style={styles.icons} source={require('../assets/editUserInfo.png')} />
                            <Text style={styles.buttonText}>Edit Information </Text>
                            <Image style={styles.arrowIcon} source={require('../assets/arrowEdit.png')} />
                        </Pressable>
                        <Pressable style={styles.buttons} onPress={() => navigation.navigate('EditAddress')}>
                            <Image style={styles.icons} source={require('../assets/editAddress.png')} />
                            <Text style={styles.buttonText}>Edit Address</Text>
                            <Image style={styles.arrowIcon} source={require('../assets/arrowEdit.png')} />
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Support</Text>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Pressable style={styles.buttons} onPress={() => navigation.navigate('')}>
                            <Image style={styles.icons} source={require('../assets/contactUs.png')} />
                            <Text style={styles.buttonText}>ContactUs</Text>
                            <Image style={styles.arrowIcon} source={require('../assets/arrowEdit.png')} />
                        </Pressable>
                        <Pressable style={styles.buttons}>
                            <Image style={styles.icons} source={require('../assets/aboutUs.png')} />
                            <Text style={styles.buttonText}>About Us</Text>
                            <Image style={styles.arrowIcon} source={require('../assets/arrowEdit.png')} />
                        </Pressable>
                    </View>
                </View>
            </View>

            {token&&<View style={styles.logOutDiv}>
                <Pressable style={{ backgroundColor: 'red', width: '50%', height: '50%', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }} onPress={() => Logout()}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Log Out</Text>
                </Pressable>
            </View>}

        </View>
    )
}
const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    userDiv: {
        width: '100%',
        height: '25%',
        paddingVertical: 20,
        paddingHorizontal: 40,
        flexDirection: 'row',
        gap: 20,

    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    buttonsDiv: {
        width: '100%',
        height: '65%',
        paddingHorizontal: '12%',
        paddingVertical: '5%',
        alignItems: 'center',
        gap: 20
    },
    logOutDiv: {
        width: '90%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#666',
        borderTopWidth: 1
    },
    buttons: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    icons: {
        width: 30,
        height: 30
    },
    buttonText: {
        fontSize: 14,
        width: '70%'
    },
    arrowIcon: {
        width: 10,
        height: 10
    }
})
export default Settings