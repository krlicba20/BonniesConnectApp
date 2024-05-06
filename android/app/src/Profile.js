import React from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <View style={styles.row}>
                {/** First Column */}
                <View style={styles.column}>
                    {/**Button for Edit Profile */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                    {/**Button for My Activities */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('MyActivities')}>
                        <Text style={styles.buttonText}>My Activities</Text>
                    </TouchableOpacity>
                </View>

                {/** Second Column */}
                <View style={styles.column}>
                    {/**Button for My classes */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('MyClasses')}>
                        <Text style={styles.buttonText}>My Classes</Text>
                    </TouchableOpacity>
                    {/**Button for My Interests */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('MyInterests')}>
                        <Text style={styles.buttonText}>My Interests</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                {/** First Column */}
                <View style={styles.column}>
                    {/**Button for Notifications */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Notifications')}>
                        <Text style={styles.buttonText}>Notifications</Text>
                    </TouchableOpacity>
                    {/**Button for Student ID */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('StudentID')}>
                        <Text style={styles.buttonText}>Student ID</Text>
                    </TouchableOpacity>
                </View>

                {/** Second Column */}
                <View style={styles.column}>
                    {/**Button for Themes */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Themes')}>
                        <Text style={styles.buttonText}>Themes</Text>
                    </TouchableOpacity>
                    {/**Button for Settings */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.buttonText}>Settings</Text>
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

export default Profile;

