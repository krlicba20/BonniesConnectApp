import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Themes = () => {
    const colorScheme = useColorScheme();
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(colorScheme === 'dark');
    const navigation = useNavigation();

    const toggleDarkMode = () => {
        setIsDarkModeEnabled(!isDarkModeEnabled);
    };

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkModeEnabled ? '#000000' : '#FFFFFF' }]} behavior="padding">
            {/* Upcoming events */}
            <Text style={styles.sectionHeaders}>
                Themes
            </Text>

            {/* Dark mode toggle button */}
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={toggleDarkMode}
            >
                <Text style={styles.buttonText}>
                    {isDarkModeEnabled ? 'Turn Off Dark Mode' : 'Turn On Dark Mode'}
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

export default Themes;
