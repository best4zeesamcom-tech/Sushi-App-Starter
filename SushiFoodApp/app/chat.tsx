import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from "react-native";
import ChatBubble from "../components/chat/ChatBubble";
import ChatHeader from "../components/chat/ChatHeader";
import ChatInput from "../components/chat/ChatInput";
const messages=[
    {
        id:1,
        sender:"me",
        message:"Hello",
        time:"08:00",
    },
        {
        id:2,
        sender:"me",
        message:"Is my order on the way",
        time:"08:00",
    },
      {
        id:3,
        sender:"driver",
        message:"Is my order on the way",
        time:"08:02",
    },
       {
        id:4,
        sender:"driver",
        message:"Awesome!When do you think will you arrive?",
        time:"08:02",
    },
    {
        id:5,
        sender:"driver",
        message:"I should be there in about 15 minutes",
        time:"08:02",
    }
];

export default function ChatScreen()
{
    return(<>
    <StatusBar
    backgroundColor="#FFFFFF"
    barStyle="dark-content"/>
    <SafeAreaView style={styles.container}>
    <ChatHeader/>

    )
}