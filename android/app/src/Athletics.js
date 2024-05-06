import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, useColorScheme, StyleSheet, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Athletics = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            {/* Button for basketball tickets */}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('Basketball Tickets', 'Handle basketball ticket URL')}>
                <Text style={styles.buttonText}>Basketball Tickets</Text>
            </TouchableOpacity>

            {/* D1 and Club Sports buttons */}
            <View style={styles.row}>
                <TouchableOpacity style={[styles.buttonContainer, styles.halfWidth]} onPress={() => Linking.openURL('https://gobonnies.com/')}>
                    <Text style={styles.buttonText}>D1 Sports</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.halfWidth]} onPress={() => Linking.openURL('https://www.sbu.edu/athletics/club-sports')}>
                    <Text style={styles.buttonText}>Club Sports</Text>
                </TouchableOpacity>
            </View>

            {/* Button for Intramurals (ImLeagues) */}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.imleagues.com/spa/account/login?schoolId=0aecc6ac3f5645ada52a9982740f05ae')}>
                <Text style={styles.buttonText}>Intramurals</Text>
            </TouchableOpacity>

            {/* Upcoming D1 and club sporting events */}
            <Text style={styles.sectionHeaders}>
                Upcoming Sporting Events
            </Text>

            {/* Upcoming Intramurals */}
            <Text style={[styles.sectionHeaders, styles.marginTopLarge]}>
                Upcoming Intramurals
            </Text>

            {/* Richter Center Hours */}
            <TouchableOpacity style={[styles.buttonContainer, styles.marginTopLarge]} onPress={() => Alert.alert('Richter Center Hours', 'MON-THUR: 6AM - 11PM\nFRI: 6AM - 10PM\nSAT: 9AM - 10PM\nSUN: 12PM - 11PM')}>
                <Text style={styles.buttonText}>Richter Center</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    halfWidth: {
        width: '48%', // Adjust as needed
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
    },
    marginTopLarge: {
        marginTop: 200,
    }
});

export default Athletics;
