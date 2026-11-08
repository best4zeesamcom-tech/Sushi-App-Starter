import React from "react"
import {
StyleSheet,
Text,
View, 
} from "react-native";
interface Props{
    message:string;
    time:string;
    sender:"me" | "driver";
}

export default function ChatBubble({
    message,
    time,
    sender,
}:Props){
    const isMe=sender ==="me"
    return(
        <View
        style={[styles.wrapper,
            isMe
            ? styles.rightWrapper
            : styles.leftWrapper,]}
        >
            <View
            style={[styles.bubble,
                isMe
                ? styles.myBubble
                : styles.driverBubble,
            ]}
            >
                <Text style={[
                    styles.message,
                    isMe && styles.myMessage,
                ]}>
                    {message}
                </Text>

            </View>
            <Text style={[
                styles.time,
                isMe
                ? styles.timeRight
                : styles.timeLeft,
            ]}>{time}</Text>

        </View>
    )
}
const style=StyleSheet.create({
    wrapper:{
        marginHorizontal:20,
        marginTop:18,
    },
    rightWrapper:{
        alignItems:"flex-end",
    },
    leftWrapper:{
        alignItems:"flex-start",
    },
    bubble:{
        maxWidth:"80%",
        paddingHorizontal:18,
        paddingVertical:14,
        borderRadius:22,
    },
    myBubble:{
        backgroundColor:"#FF5A36",
        borderBottomRightRadius:6,
    },
    driverBubble:{
      backgroundColor:"#F2F2F7",
      borderBottomLeftRadius:6,
    },
    message:{
        fontSize:17,
        color:"#666",
        lineHeight:24,
    },
    myMessage:{
        color:"#FFFFFF",
    },
    time:{
        marginTop:6,
        fontSize:13,
        color:"#999",
    },
    timeRight:{
        textAlign:"right",
    },
        timeLeft:{
        textAlign:"left",
    },

});

