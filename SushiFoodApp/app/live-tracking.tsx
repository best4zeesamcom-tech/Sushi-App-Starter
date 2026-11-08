import React from "react"
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native"
import DriverCard from "../components/liveTracking/DriverCard";
import LiveTrackingHeader from "../components/liveTracking/LiveTrackingHeader";
import MapSection  from "../components/liveTracking/MapSection";
import OrderDetailsButton  from "../components/liveTracking/OrderDetailsButton";
import TrackingProgress  from "../components/liveTracking/TrackingProgress";

export default function LiveTrackingScreen(){
    return(
        <>
        <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        />
        <SafeAreaView style={styles.container}>
            <MapSection/>
            <LiveTrackingHeader/>
        <View style={styles.bottomSheet}>
        <View style={styles.handle}/>
            <TrackingProgress/>
            <DriverCard/>
            <OrderDetailsButton/>
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
    bottomSheet:{
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"#FFFFFF",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingTop:12,
        paddingBottom:35,
        shadowColor:"#000",
        shadowOpacity:0.12,
        shadowRadius:15,
        shadowOffset:{
            width:0,
            height:-5,            
        },
        elevation:20,

    },
    handle:{
        alignSelf:"center",
        width:45,
        height:5,
        borderRadius:3,
        backgroundColor:"#D6D6D6",
        marginBottom:20,

    },

});