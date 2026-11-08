import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from "react-native"
import DeliveryInfoCard from "../components/review/DeliveryInfoCard";
import DeliverySummaryCard from "../components/review/DeliverySummaryCard";
import RatingCard from "../components/review/RatingCard";
import ReviewHeader from "../components/review/ReviewHeader";
import SubmitReviewButton from "../components/review/SubmitReviewButton";
export default function ReviewScreen()
{
    return(
        <>
        <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        />
        <SafeAreaView
        style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        >
        <ReviewHeader/>
        <DeliverySummaryCard/>
        <DeliveryInfoCard/>
        <RatingCard/>
        <SubmitReviewButton/>
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
        paddingBottom:40,
    }
});
