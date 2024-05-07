import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    // State to track whether notifications are enabled or not
    const [generalNotificationsEnabled, setGeneralNotificationsEnabled] = useState(false);
    const [classesNotificationsEnabled, setClassesNotificationsEnabled] = useState(false);
    const [activitiesNotificationsEnabled, setActivitiesNotificationsEnabled] = useState(false);
    const [interestNotificationsEnabled, setInterestNotificationsEnabled] = useState(false);

    // Function to toggle general notifications
    const toggleGeneralNotifications = () => {
        setGeneralNotificationsEnabled(!generalNotificationsEnabled);
    };

    // Function to toggle classes notifications
    const toggleClassesNotifications = () => {
        setClassesNotificationsEnabled(!classesNotificationsEnabled);
    };

    // Function to toggle activities notifications
    const toggleActivitiesNotifications = () => {
        setActivitiesNotificationsEnabled(!activitiesNotificationsEnabled);
    };

    // Function to toggle interest notifications
    const toggleInterestNotifications = () => {
        setInterestNotificationsEnabled(!interestNotificationsEnabled);
    };

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}
        behavior="padding">

        {/* General Notifications */}
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={toggleGeneralNotifications}
        >
            <Text style={styles.buttonText}>
                {generalNotificationsEnabled ? 'General Notifications ON' : 'General Notifications OFF'}
            </Text>
        </TouchableOpacity>

        {/* Buttons to toggle specific notifications */}
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={toggleClassesNotifications}
        >
            <Text style={styles.buttonText}>
                {classesNotificationsEnabled ? 'Classes Notifications ON' : 'Classes Notifications OFF'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={toggleActivitiesNotifications}
        >
            <Text style={styles.buttonText}>
                {activitiesNotificationsEnabled ? 'Activities Notifications ON' : 'Activities Notifications OFF'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={toggleInterestNotifications}
        >
            <Text style={styles.buttonText}>
                {interestNotificationsEnabled ? 'Interest Notifications ON' : 'Interest Notifications OFF'}
            </Text>
        </TouchableOpacity>

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

export default Notifications;

