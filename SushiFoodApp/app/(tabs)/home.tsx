import React,{useState} from "react";
import {ScrollView,StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import BottomTabs from '../../components/home/BottomTabs';
import Categories from '../../components/home/Categories';
import Header from '../../components/home/Header';
import PopularSection from '../../components/home/PopularSection';
import SearchBar from '../../components/home/SearchBar';
export default function HomeScreen(){
    const [search,setSearch]=useState("");
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <Header/>
        <SearchBar
        value={search}
        onChangeText={setSearch}
        />
        <Categories/>
        <PopularSection/>
        </ScrollView>
        <BottomTabs active="home"/>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f8f8f8",    
    },
});