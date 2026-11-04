import {useRouter} from "expo-router"
import React, {useState} from "react";
import {
SafeAreaView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View,
} from "react-native";
export default function LoginScreen() {
const router=useRouter();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");   
return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome Back<Text/>
            <Text style={styles.subtitle}>Login to continue ordering delicious sushi<Text/>
            <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />


            <TextInput
            placeholder="Password"
            secureTextEntry=
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            />

            <TouchableOpacity onPress={()=>router.push("/(auth)/forgot-password")}>
                <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity> 


            <TouchableOpacity 
            style={styles.button}
            onPress={()=>router.replace("/(tabs)/home")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>



            <View style={styles.bottom}>
                <Text style={styles.buttonText}>Don't have an account?</Text>
            </View>   

            <TouchableOpacity
            onPress={()=>router.push("/(auth)/register")}>
                <Text style={styles.signup}>Sign Up<Text/>
            </TouchableOpacity>
            </View>
            </SafeAreaView>


            


); 
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:25,
        justifyContent:"center",
        backgroundColor:"#fff",

    },
    title:{
        fontSize:34,
        fontWeight:"700",
        color:"#111",
    },
    subtitle:{
        marginTop:10,
        fontSize:17,
        color:"#777",
        marginBottom:40,

    },
    input:{
        height:60,
        borderWidth:1,
        borderColor:"#E5E5E5",
        borderRadius:18,
        paddingHorizontal:18,
        marginBottom:18,
        fontSize:16,
    }
    forgot:{
        color:"#FF6B4A",
        alignSelf:"flex-end",
        marginBottom:30,
    }
    button:{
        height:58,
        backgroundColor:"#ff6b4a",
        borderRadius:18,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
        color:"#fff",
        fontWeight:"700",
        fontSize:18,
    },
    bottom:{
        marginTop:35,
        flexDirection:"row",
        justifyContent:"center",
    },
    signup:{
        marginLeft:5,
        color:"#FF6B4A",
        fontWeight:"700",
},});