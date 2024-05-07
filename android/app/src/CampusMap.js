import React from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet, useColorScheme, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CampusMap = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/sbucustom/interactive/sbumap/map.aspx')}>
                <Text style={styles.buttonText}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.google.com/maps/place/St.+Bonaventure+University/@42.078956,-78.4822017,16.06z/data=!4m15!1m8!3m7!1s0x89d27a78803b73b1:0xd267e67e732435fe!2sSt+Bonaventure,+NY!3b1!8m2!3d42.0803426!4d-78.4750213!16zL20vMHh5MWw!3m5!1s0x89d27a7a0b2985b7:0x1d209ba6a232adaf!8m2!3d42.0785768!4d-78.4829439!16zL20vMDJsMWZu?entry=ttu')}>
                <Text style={styles.buttonText}>Map via Google Maps</Text>
            </TouchableOpacity>
            {/* Apple Maps button is commented out as it's not applicable */}
            {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Map via Apple Maps</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.sbu.edu/images/default-source/life-at-sbu/campus-safety-conduct/student_parking_map_legend_sept_2021.jpg')}>
                <Text style={styles.buttonText}>Student Parking Map</Text>
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
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
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

export default CampusMap;
