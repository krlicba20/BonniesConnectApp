import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SafetySecurity = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    const SafetySecurityNumber = '7163752525'; // Safety and Security Phone Number
    const callSafetySecurity = () => {
        Linking.openURL(`tel:${SafetySecurityNumber}`); // This should link the phone number to the phone app and then initiate the call when the function is called
    }

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Phone Number: (716)-375-2525{'\n'}
                    Location: Robinson Hall
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={callSafetySecurity}>
                <Text style={styles.buttonText}>Call Safety & Security</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://cm.maxient.com/reportingform.php?StBonaventureUniv&layout_id=13')}>
                <Text style={styles.buttonText}>Report a Crime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-health-safety-conduct/safety-security')}>
                <Text style={styles.buttonText}>Additional Info</Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Interested in joining MERT?{'\n'}
                    Email mert@sbu.edu and download the following form
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/docs/default-source/campus-safety-security/sbu-mert-student-application.pdf')}>
                <Text style={styles.buttonText}>Click here to access MERT application</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        color: '#8B4513', // Brown Color
        marginTop: 10,
        width: 160,
        textAlign: 'center',
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

export default SafetySecurity;
