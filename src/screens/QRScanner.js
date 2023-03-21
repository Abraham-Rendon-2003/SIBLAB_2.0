import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Scanner from '../components/common/Scanner'

export default function QRScanner() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Scanner/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0968ED",
        alignItems: 'center',
        justifyContent: 'center',
    }
})