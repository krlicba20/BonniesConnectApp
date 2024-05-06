import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dining = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollView}>
                {/* Header for the Hickey Dining Hall */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        Hickey Dining Hall
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert(
                        'Hickey Dining Hall Hours',
                        'MON-FRI: 7AM - 9PM',
                        'SAT-SUN: 9AM - 9PM'
                    )}>
                        <Text style={styles.buttonText}>Hours</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://sbu.campusdish.com/LocationsAndMenus/HickeyDiningHall')}>
                        <Text style={styles.buttonText}>Menu</Text>
                    </TouchableOpacity>
                </View>

                {/* Header for Freshens */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        Freshens
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert(
                        'Freshens Hours',
                        'Breakfast',
                        'MON-FRI: 8AM - 10:30AM (Meal Exchange: 8AM - 10:30AM)',
                        'SAT-SUN: Closed',
                        'Lunch',
                        'MON-THU: 10:30AM - 4PM (Meal Exchange: 11AM - 1PM)',
                        'FRI: 11AM - 1:30PM (Meal Exchange: 11AM - 1PM)',
                        'SAT-SUN: Closed',
                        'Dinner',
                        'MON-THU,SUN: 4PM - 9PM (Meal Exchange 4:30 PM - 8PM',
                        'FRI-SAT: Closed'
                    )}>
                        <Text style={styles.buttonText}>Hours</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://freshens.com/menu/')}>
                        <Text style={styles.buttonText}>Menu</Text>
                    </TouchableOpacity>
                </View>

                {/* Header for RC Cafe */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        RC Cafe
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert(
                        'RC Cafe Hours',
                        'MON-FRI: 8AM - 7PM',
                        'SAT-SUN: 12PM - 8PM'
                    )}>
                        <Text style={styles.buttonText}>Hours</Text>
                    </TouchableOpacity>
                </View>

                {/* Header for The Rathskeller */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        The Rathskeller
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert(
                        'Rathskeller Hours',
                        'MON-FRI: 6PM - 12AM (Meal Exchange: 8PM - 10PM)',
                        'SAT-SUN: 12PM - 12AM (Meal Exchange: 8PM - 10PM)'
                    )}>
                        <Text style={styles.buttonText}>Hours</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} disabled={true}>
                        <Text style={styles.buttonText}>Menu</Text>
                    </TouchableOpacity>
                </View>

                {/* Header for Cafe La Verna */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        Cafe La Verna
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert(
                        'Cafe La Verna Hours',
                        'MON-FRI: 8AM - 11PM',
                        'SAT-SUN: 9AM - 11PM'
                    )}>
                        <Text style={styles.buttonText}>Hours</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHeaders: {
        color: '#8B4513',
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
    button: {
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

export default Dining;

