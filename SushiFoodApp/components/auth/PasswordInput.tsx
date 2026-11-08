import React,{useState} from "react"
import {
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
interface Props{
label:string;
placeholder:string;
value:string;
onChangeText:(text:string)=>void;
}

export default function PasswordInput({
label,
placeholder,
value,
onChangeText,
}:Props){
    const [show,setShow]=useState(false);
    return (
        <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        <View style={styles.inputContainer}>
              <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={!show}
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              />

              <TouchableOpacity
              onPress={()=>setShow(!show)}
              >
              <Ionicons
              name={show?"eye-outline":"eye-off-outline"}
              size={22}
              color="#9CA3AF"
              />
              </TouchableOpacity>
        </View>
        </View>    
    );
}
const styles=StyleSheet.create({
container:{marginBottom:22,},
label:{
    marginBottom:10,
    fontSize:15,
    fontWeight:"600",
    color:"#374151",
},
inputContainer:{
    height  :58,
    borderWidth:1,
    borderColor:"#E5E7EB",
    borderRadius:16,
    paddingHorizontal:18,
    backgroundColor:"#fff",
    flexDirection:"row",
    alignItems:"center",    
},
input:{
    flex:1,
    fontSize:16,
},
});
