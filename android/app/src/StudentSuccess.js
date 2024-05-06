import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, Button, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentSuccess = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    const HealthCenterNumber = '7163752310'; // Health Center Phone Number
    const callHealthCenter = () => {
        Linking.openURL(`tel:${HealthCenterNumber}`); // This should link the phone number to the phone app and then initiate the call when the function is called
    }

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">

            <View>
                <Text>
                    Location: Plassmann Hall
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Tutoring'
                    onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/tutoring-and-academic-support')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='First-Year Programs'
                    onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/first-year-programs')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Accessibility Services'
                    onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/accessibility-services-and-accommodations')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='International Student Services'
                    onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/student-success-center/international-student-services')}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
    },
});

export default StudentSuccess;
