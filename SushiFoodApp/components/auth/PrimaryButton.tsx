import React from "react"
import{
ActivityIndicator,
StyleSheet,
Text,
TouchableOpacity,
} from "react-native"
interface Props {
title:string;
onPress:()=>void;
loading?: boolean,
}
export default function PrimaryButton({
    title,
    onPress,
    loading=false,    
}:Props){
    return(
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.85}
        onPress={onPress}
        disabled={loading}
        >
            {loading ? (
                <ActivityIndicator color="#FFFFFF"/>
            ):(
                <Text style={styles.text}>
                    {title}
                </Text>
            )}

        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    button:{
        height:58,
        backgroundColor:"#FF6B4A",
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center",
        marginTop:12,
    },
    text:{
        color:"#FFFFFF",
        fontSize:18,
        fontWeight:"700",
    },
});