import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, Button, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TechServices = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">

            <View>
                <Text>
                    Location: Friedsam Memorial Library
                    Hours: MON-FRI 8AM - 5PM
                    Phone Number: (716)-375-7600
                    Email: helpdesk@sbu.edu
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title='Additional Info'
                    onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-services/technology-services')}
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
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
    },
});

export default TechServices;
