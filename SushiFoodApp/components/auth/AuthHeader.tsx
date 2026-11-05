import React from "react";
import {StyleSheet,Text,View} from "react-native"
interface Props{
    title:string,
    subtitle:string,
}
export default function AuthHeader({
    title,
    subtitle,
}: Props){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        paddingHorizontal:24,
        marginTop:60,
    },
    title:{
        fontSize:34,
        fontWeight:"700",
        color:'#111827',
    },
    subtitle:{
        marginTop:10,
        fontSize:16,
        lineHeight:24,
        color:"#6b7280",

    },


});