import {useRouter} from "expo-router";
import React from "react"
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import AddressCard from "../components/delivery/AddressCard";
import ConfirmButton from "../components/delivery/ConfirmButton";
import DeliveryHeader from "../components/delivery/DeliveryHeader";
import DeliveryMap from "../components/delivery/DeliveryMap";
import LocationPin from "../components/delivery/LocationPin";
export default function DeliveryAddressScreen(){
    const router=useRouter();
    return(
        <>
        <StatusBar
        backgroundColor='#FFFFFF'
        barStyle="dark-content"
        />
        <SafeAreaView style={styles.container}>
            <DeliveryHeader/>
        <View style={styles.mapContainer}>
        <DeliveryMap/>
        <LocationPin/>
        </View>


        <View style={styles.bottomCard}>
        <AddressCard/>
        <ConfirmButton/>
        </View>
        </SafeAreaView>
        </>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF",        
    },
    mapContainer:{
        flex:1,
        marginTop:10,
    },
    bottomCard:{
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
        paddingTop:10,
        paddingBottom:30,
        shadowColor:"#000",
        shadowOpacity:0.12,
        shadowRadius:15,
        shadowOffset:{
            width:0,
            height:-4,
        },
        elevation:20,

    },
});


