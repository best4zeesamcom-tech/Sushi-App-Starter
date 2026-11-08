import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from "react-native"
import HelpCard from "../../components/profile/HelpCard";
import ProfileHeader from "../../components/profile/ProfileHeader";
export default function ProfileScreen()
{
    return(
        <>
        <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
        />
        <SafeAreaView style={styles.container}
        >
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        >
        <ProfileHeader/>


        <HelpCard/>
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
        paddingBottom:120,

    },
});