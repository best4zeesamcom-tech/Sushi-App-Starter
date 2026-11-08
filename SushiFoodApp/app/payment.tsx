import React from "react"
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
} from "react-native";
import BottomPlaceOrder from '../components/payment/BottomPlaceOrder';
import DeliveryInfoCard from "../components/payment/DeliveryInfoCard"
import MapCard from "../components/payment/MapCard"
import PaymentHeader from "../components/payment/PaymentHeader"
import PaymentMethodCard from "../components/payment/PaymentMethodCard"
export default function PaymentScreen(){
    return(
        <>
        <StatusBar
        backgroundColor="#F8F8F8"
        barStyle="dark-content"
        />
        <SafeAreaView style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        >
        <PaymentHeader/>
        <MapCard/>
        <DeliveryInfoCard/>
        <PaymentMethodCard/>
        <BottomPlaceOrder/>
        </ScrollView>
        </SafeAreaView>
        </>    
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F8F8F8",
    },
    content:{
        paddingTop:10,
        paddingBottom:40,
    },

});