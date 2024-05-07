import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TechServices = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Location: Friedsam Memorial Library{'\n'}
                    Hours: MON-FRI 8AM - 5PM{'\n'}
                    Phone Number: (716)-375-7600{'\n'}
                    Email: helpdesk@sbu.edu
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/technology-services')}>
                <Text style={styles.buttonText}>Additional Info</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infoContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    infoText: {
        fontSize: 18,
        lineHeight: 24,
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#8B4513',
        paddingVertical: 15,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TechServices;
