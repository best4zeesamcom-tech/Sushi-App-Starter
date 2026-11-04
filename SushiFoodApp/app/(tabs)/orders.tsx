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
    return <>
    <StatusBar
    barStyle="dark-content"
    backgroundColor="#f8f8f8"
    />

    <SafeAreaView style={styles.container}>
        <Screen
}