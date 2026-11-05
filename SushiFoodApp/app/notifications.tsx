import React,{useMemo,useState} from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from "react-native";
import NotificationCard from "../components/notification/NotificationCard";
import NotificationHeader from "../components/notification/NotificationHeader";
import NotificationTabs from "../components/notification/NotificationTabs";

import {notification} from "../data/notifications";
