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
import PasswordInput "../../components/auth/PasswordInput"
import PrimaryButton from "../../components/auth/PrimaryButton"