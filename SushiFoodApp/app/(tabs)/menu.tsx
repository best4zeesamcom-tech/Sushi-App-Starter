import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from "react-native"
import MenuCategories from "../../components/menu/MenuCategories"
import MenuHeader from "../../components/menu/MenuHeader"
import OfferBanner from "../../components/menu/OfferBanner"
import PopularSection from "../../components/menu/PopularSection"

export default function MenuScreen(){
    return(
        <>
        <StatusBar
        barStyle="dark-content"
        backgroundColor="#f8f8f8"
        />
        <SafeAreaView style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        >
        <MenuHeader
        onSearchPress={()=>
            console.log("Search")
        }/>

        <MenuCategories/>

        <OfferBanner/>

        <PopularSection/>
        </ScrollView>
        </SafeAreaView>
        </>);}
const styles=StyleSheet.create(
  {  container:{
        flex:1,
        backgroundColor:"#f8f8f8",
    },
    content:{
        paddingBottom:120,   
    },
}
);