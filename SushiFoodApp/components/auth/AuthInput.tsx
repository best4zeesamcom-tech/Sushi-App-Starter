import React from "react"
import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
interface Props{
    label:string,
    placeholder:string,
    value:string,
    onChangeText:(text:string)=>void;
    keyboardType?:KeyboardTypeOptions;

}

export default function AuthInput({})