import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentResources = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <View style={styles.row}>
                {/** First Column */}
                <View style={styles.column}>
                    {/**Button for Dining */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Dining')}>
                        <Text style={styles.buttonText}>Dining</Text>
                    </TouchableOpacity>
                    {/**Button for Laundry */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.laundryview.com/selectProperty')}>
                        <Text style={styles.buttonText}>Laundry</Text>
                    </TouchableOpacity>
                    {/**Button for Safety and Security */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Safety & Security')}>
                        <Text style={styles.buttonText}>Safety & Security</Text>
                    </TouchableOpacity>
                    {/**Button for Tech Services */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Tech Services')}>
                        <Text style={styles.buttonText}>Tech Services</Text>
                    </TouchableOpacity>
                </View>

                {/** Second Column */}
                <View style={styles.column}>
                    {/**Button for Health Center */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Health Center')}>
                        <Text style={styles.buttonText}>Health Center</Text>
                    </TouchableOpacity>
                    {/**Button for Student Success */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Student Success')}>
                        <Text style={styles.buttonText}>Student Success</Text>
                    </TouchableOpacity>
                    {/**Button for Academic Calendar */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/docs/default-source/academics-documents/registrar/calendars/2023-2024-undergraduate-calendar-revised-6-20-23.pdf')}>
                        <Text style={styles.buttonText}>Academic Calendar</Text>
                    </TouchableOpacity>
                    {/**Button for Campus Map */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Campus Map')}>
                        <Text style={styles.buttonText}>Campus Map</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        color: '#8B4513', // Brown Color
        marginTop: 10,
        width: 160,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
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
});

export default StudentResources;
