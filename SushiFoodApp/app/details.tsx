import {useRouter} from "expo-router"
import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import BottomCheckout from "../components/details/BottomCheckout";
import CategoryChips from "../components/details/CategoryChips";
import DetailsHeader from "../components/details/DetailsHeader";
import ProductInfoCard from "../components/details/ProductInfoCard";
import RelatedProductCard from "../components/details/RelatedProductCard";
import {relatedProducts} from "../data/relatedProducts"
export default function DetailScreen(){
    const router=useRouter();
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            >
            <DetailsHeader
            image={require("../assets/images/sushi/sakura.png")}
            />
            <ProductInfoCard
            title="Sakura Sushi"
            price="$18"
            rating={4.8}
            reviews="1.2k"
            time="25 mins"
            description="Enjoy premium Japanese sushi prepared with fresh salmon, avocado, cucumber and perfectly seasoned rice.Crafted daily to deliver an authentic and unforgettable dining experience"
            />
            <CategoryChips/>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Popular Choices
                </Text>
                <Text style={styles.seeAll}>
                    See All
                </Text>
            </View>

            <View style={styles.relatedContainer}>
                {relatedProducts.map((item)=>(
                    <RelatedProductCard
                    key={item.id}
                    item={item}
                    />
                ))}
                </View>
                </ScrollView>

                <BottomCheckout
                price={18}
                onAddToCart={()=>router.push("/checkout")}
                />
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F7F7F7",        
    },
    content:{
        paddingBottom:130,
    },
    sectionHeader:{
        marginTop:30,
        marginBottom:8,
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    sectionTitle:{
        fontSize:24,
        fontWeight:"700",
        color:"#222",
    },
    seeAll:{
        fontSize:15,
        fontWeight:"600",
        color:"#FF5A36",       
    },
    relatedContainer:{
        paddingBottom:30,

    },
});