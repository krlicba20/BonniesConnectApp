import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentSuccess = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">

            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>
                    Location: Plassmann Hall
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/tutoring-and-academic-support')}>
                <Text style={styles.buttonText}>Tutoring</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/first-year-programs')}>
                <Text style={styles.buttonText}>First-Year Programs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/accessibility-services-and-accommodations')}>
                <Text style={styles.buttonText}>Accessibility Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/international-student-services')}>
                <Text style={styles.buttonText}>International Student Services</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    locationContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    locationText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#8B4513',
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default StudentSuccess;

