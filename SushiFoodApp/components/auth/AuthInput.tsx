import React from "react"
import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
interface Props {
    label:string,
    placeholder:string,
    value:string,
    onChangeText:(text:string)=>void;
    keyboardType?:KeyboardTypeOptions;

}

export default function AuthInput({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType="default"
}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
               {label}
            </Text>
            <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholderTextColor="#9ca3af"
            style={styles.input}/>
        </View>

    );
}
const styles=StyleSheet.create({
    container:{
        marginBottom:22,
    },
    label:{
        marginBottom:10,
        fontSize:15,
        fontWeight:"600",
        color:"#374151",
    },
    input:{
        height:58,
        borderWidth:1,
        borderColor:"#E5E7EB",
        borderRadius:16,
        paddingHorizontal:18,
        backgroundColor:"#FFFFFF",
        fontSize:16,
    },

});