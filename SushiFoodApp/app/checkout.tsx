import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from "react-native";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutProductCard from "../components/checkout/CheckoutProductCard";
import ContinueButton from "../components/checkout/ContinueButton";
import DeliveryCard from "../components/checkout/DeliveryCard";
import PriceSummary from "../components/checkout/PriceSummary";
import { checkoutItems } from "../data/checkoutData";

export default function CheckoutScreen() {
    return (
        <>
            <StatusBar
                backgroundColor="#F8F8F8"
                barStyle="dark-content"
            />
            <SafeAreaView style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content} // Fixed: Styles -> styles
                >
                    <CheckoutHeader />
                    <CheckoutProductCard
                        item={checkoutItems[0]}
                    />

                    <CheckoutProductCard
                        item={checkoutItems[1]}
                    />

                    <DeliveryCard />
                    <PriceSummary />
                    <ContinueButton />
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    content: {
        paddingTop: 10,
        paddingBottom: 40,
    },
});