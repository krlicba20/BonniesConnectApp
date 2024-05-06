import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, Button, StyleSheet, Linking } from 'react-native';
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

            {/* Header saying Safety & Security */}
            <View style={styles.header}>
                <Text>
                    Safety & Security
                </Text>
            </View>

            <View>
                <Text>
                    Phone Number: (716)-375-2525
                    Location: Robinson Hall
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Call Safety & Security'
                    onPress={callSafetySecurity}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Report a Crime'
                    onPress={() => Linking.openURL('https://cm.maxient.com/reportingform.php?StBonaventureUniv&layout_id=13')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Additional Info'
                    onPress={() => Linking.openURL('https://www.sbu.edu/life-at-sbu/student-health-safety-conduct/safety-security')}
                />
            </View>
            <View>
                <Text>
                    Interested in joining MERT?
                    Email mert@sbu.edu and download the following form
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Click here to access MERT application'
                    onPress={() => Linking.openURL('https://www.sbu.edu/docs/default-source/campus-safety-security/sbu-mert-student-application.pdf')}
                />
            </View>
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
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    }
});

export default SafetySecurity;
