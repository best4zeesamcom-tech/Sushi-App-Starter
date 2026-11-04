import {useRouter} from "expo-router"
import React,{useState} from "react"
import{
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    ToucableOpacity,
    View,
} from "react-native"
import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput"
import PrimaryButton from "../../components/auth/PrimaryButton"

export default function RegisterScreen(){
const router=useRouter();
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");
const handleRegister=()=>{
    //TODO:Register API
    router.replace("/(tabs)/home");    
}
return(
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        style={{flex:1,}}
        behavior={Platform.OS==="ios"?"padding":undefined}
    >
    <ScrollView
    showVerticalScrollIndicator={false}
    contentContainerStyle={styles.scroll}
    >
    <AuthHeader
    title="Create Account"
    subtitle="Create an account to order"
    />
    <View style={styles.form}>
    <AuthInput
    label="Full Name"
    placeholder="Jhon Doe"
    value={name}
    onChangeText={setName}
    />
    <AuthInput
    label="Email Address"
    placeholder="john@gmail.com"
    keyboardType="email-address"
    value={email}
    onChangeText={setEmail}
    />
    <AuthInput
    label="Phone Number"
    placeholder="+1 234 567 890"
    keyboardType="phone-pad"
    value={phone}
    onChangeText={setPhone}
    />
    <PasswordInput
    label="Password"
    placeholder="........"
    value={password}
    onChangeText={setPassword}
    />
    <PrimaryButton
    title="Create Account"
    onPress={handleRegister}
    />
    <View style={styles.bottom}>
    <Text style={styles.text}>
        Already have an account?
    </Text>
    <ToucableOpacity
    onPress={()=>router.back()}
    >
    <Text style={style.login}>
        Sign In
    </Text>
    </ToucableOpacity>
    </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
);
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    scroll:{
        paddingBottom:40,
    },
    form:{
        paddingHorizontal:24,
        marginTop:35,
    },
    bottom:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:35,
    },
    text:{
        fontSize:16,
        color:"#777",
    },
    login:{
        marginLeft:5,
        color:"#ff6b4a",
        fontWeight:"700",
        fontSize:16,
    },
    
})