import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HealthCenter = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    const HealthCenterNumber = '7163752310'; // Health Center Phone Number
    const callHealthCenter = () => {
        Linking.openURL(`tel:${HealthCenterNumber}`); // This should link the phone number to the phone app and then initiate the call when the function is called
    }

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Location: Doyle Hall 122{'\n'}
                    Hours: MON-FRI 8:30AM - 4:30PM{'\n'}
                    Email: bonnieswellbeing@sbu.edu
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://sbu.medicatconnect.com/')}>
                <Text style={styles.buttonText}>Patient Portal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={callHealthCenter}>
                <Text style={styles.buttonText}>Call Health Center</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://haylor.com/college/st-bonaventure-university/')}>
                <Text style={styles.buttonText}>Enroll/Waive Health Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.healthsafe-id.com/rt/login/UHCSR/en?TARGET=https%3A%2F%2Fwww.healthsafe-id.com%2Frt%2Fsecure%2Fauth%2FUHCSR%2Fen%3Fresume%3D%2Fas%2FFFLbDrvDiH%2Fresume%2Fas%2Fauthorization.ping%26spentity%3Dnull%26scope%3Dopenid%26response_type%3Dcode%26pfidpadapterid%3DHsidNewUIOidc%26redirect_uri%3Dhttps%3A%2F%2Fmyaccount.uhcsr.com%2Fdashboard%26portal%3DUHCSR%26client_id%3Dmyaccount-hsid-prod&resume=%2Fas%2F024CNI2mrg%2Fresume%2Fas%2Fauthorization.ping&reason=0')}>
                <Text style={styles.buttonText}>Health Insurance Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginVertical: 10,
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

export default HealthCenter;
