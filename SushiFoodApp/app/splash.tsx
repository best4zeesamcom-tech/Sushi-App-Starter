import {useRouter} from "expo-router";
import {useEffect} from "react";
import{
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native"
const {width}=Dimensions.get("window");
export default function SplashScreen(){
    const router=useRouter();
    useEffect(()=>{
        const timer=setTimeout(()=>{
            router.replace("/(auth)/login")
        },2500);
        return ()=>clearTimeout(timer);

    },[]);
    return(
        <>
        <StatusBar
        barStyle="light-content"
        backgroundColor="#FF6B4A"/>
        <SafeAreaView style={styles.container}>
        <View style={styles.center}>
            <Text style={styles.logo}>Oroshi</Text>
        </View>
        <Image
        source={require("../assets/images/splash/sushi.png")}
        resizeMode="contain"
        style={styles.image}
        />
        </SafeAreaView>
        </>
    );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FF6B4A",
        justifyContent:"space-between",
    },
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    logo:{
        color:"#FFFFFF",
        fontSize:44,
        fontWeight:"700",
        letterSpacing:0.5,
    },
    image:{
        width:width,
        height:240,
        alignSelf:"center",
    },
});