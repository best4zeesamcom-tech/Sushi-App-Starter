import React from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import BottomDeliveryCard from "../components/tracking/BottomDeliveryCard";
import InfoBanner from "../components/tracking/InfoBanner";
import OrderStatusCard from "../components/tracking/OrderStatusCard";
import OrderStatusCard from "../components/tracking/OrderStatusCard";
import PromotionCard from "../components/tracking/PromotionCard";
import TrackingHeader from "../components/tracking/TrackingHeader";

export default function TrackingScreen(){
    return(
        <>
        <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        />

        <SafeAreaView style={styles.container}>
        <TrackingHeader/>
        <OrderStatusCard/>
        <InfoBanner/>
        <PromotionCard/>
        <View style={styles.bottomContainer}>
            <BottomDeliveryCard/>
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
    bottomContainer:{
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
    },
});
