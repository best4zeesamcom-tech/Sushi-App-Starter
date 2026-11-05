import React  from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {Feather} from "@expo/vector-icons";
import OrderSummaryCard from "../../components/orders/OrderSummaryCard"
import OrderedItemsSection from "../../components/orders/OrderedItemsSection"

export default function OrdersScreen(){
    return (<>
    <StatusBar
    barStyle="dark-content"
    backgroundColor="#f8f8f8"
    />

    <SafeAreaView style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        >
        <View style={styles.header}>
        <Text style={styles.headerTitle}>
            My Orders
        </Text>
        <TouchableOpacity style={styles.searchButton}>
        <Feather
        name="search"
        size={22}
        color="#222"
        />
        </TouchableOpacity>
        </View>


        <Text style={styles.sectionTitle}>
            Order Summary
        </Text>

        <OrderSummaryCard/>

        <OrderedItemsSection/>
        </ScrollView>
        </SafeAreaView>
        </>)
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#f8f8f8",
        },
        content:{
            paddingBottom:120,
        },
        header:{
            marginTop:15,
            marginHorizontal:20,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
        },
        headerTitle:{
            fontSize:34,
            fontWeight:"700",
            color:"#222",
        },
        searchButton:{
            width:52,
            height:52,
            borderRadius:26,
            backgroundColor:"#FFFFFF",
            justifyContent:"center",
            alignItems:"center",
            shadowColor:"#000",
            shadowOpacity:0.08,
            shadowRadius:10,
            shadowOffset:{
                width:0,
                height:4,
            },
            elevation:5,
        },
        sectionTitle:{
            marginTop:30,
            marginLeft:20,
            fontSize:24,
            fontWeight:"700",
            color:"#222",            
        },

    }
);