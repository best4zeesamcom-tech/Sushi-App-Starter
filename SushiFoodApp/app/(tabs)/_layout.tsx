import {Feather,Ionicons,MaterialIcons,} from "@expo/vector-icons"
import {Tabs} from "expo-router"
export default fuction TabsLayout(){
return(
    <Tabs
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
            position:"absolute",
            left:20,
            right:20,
            bottom:20,
            height:78,
            borderRadius:24,
            backgroundColor:"#ffff",
            elevation:15,
            borderTopWidth:0,
        },

    }}>
    <Tabs.Screen
    name="home", options:{{tabBarIcon:({focused})=>(
        <Ionicons
        name={focused?"home":"home-outline"}
        size={28}
        color={focused? "#FF6B4A":"#999"}/>
    )}}/>


    <Tabs.Screen
    name="menu",
    options:{{tabBarIcon:({focused})=>(
        <MaterialIcons
        name="restaurant-menu"
        size={28}
        color={focused? "#FF6B4A":"#999"}/>
    )}}/>


        <Tabs.Screen
    name="orders",
    options:{{tabBarIcon:({focused})=>(
        <Feather
        name="shopping-bag" 
        size={25}
        color={focused? "#FF6B4A":"#999"}/>
    )}}/>




     <Tabs.Screen
    name="profile",
    options:{{tabBarIcon:({focused})=>(
        <Feather
        name="shopping-bag" 
        size={25}
        color={focused? "#FF6B4A":"#999"}/>
    )}}/>






    )
}