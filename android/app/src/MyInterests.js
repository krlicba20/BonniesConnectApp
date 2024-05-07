import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyInterests = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}
        behavior="padding">

        {/* Upcoming events */}
        <Text style={styles.sectionHeaders}>
            MyInterests
        </Text>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        marginBottom: 10,
        backgroundColor: '#8B4513',
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionHeaders: {
            color: '#8B4513',
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
        }
});

export default MyInterests;