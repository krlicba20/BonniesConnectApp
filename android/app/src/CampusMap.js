import React from 'react';
import { View, KeyboardAvoidingView, Button, StyleSheet, useColorScheme, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CampusMap = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <View style={styles.buttonContainer}>
                <Button
                    title='Map'
                    onPress={() => Linking.openURL('https://www.sbu.edu/sbucustom/interactive/sbumap/map.aspx')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Map via Google Maps'
                    onPress={() => Linking.openURL('https://www.google.com/maps/place/St.+Bonaventure+University/@42.078956,-78.4822017,16.06z/data=!4m15!1m8!3m7!1s0x89d27a78803b73b1:0xd267e67e732435fe!2sSt+Bonaventure,+NY!3b1!8m2!3d42.0803426!4d-78.4750213!16zL20vMHh5MWw!3m5!1s0x89d27a7a0b2985b7:0x1d209ba6a232adaf!8m2!3d42.0785768!4d-78.4829439!16zL20vMDJsMWZu?entry=ttu')}
                />
            </View>
            {/* Apple Maps button is commented out as it's not applicable */}
            {/* <View style={styles.buttonContainer}>
                <Button
                    title='Map via Apple Maps'
                />
            </View> */}
            <View style={styles.buttonContainer}>
                <Button
                    title='Student Parking Map'
                    onPress={() => Linking.openURL('https://www.sbu.edu/images/default-source/life-at-sbu/campus-safety-conduct/student_parking_map_legend_sept_2021.jpg')}
                />
            </View>
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
    },
});

export default CampusMap;
