import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, useColorScheme, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const findName = async () => {
        const user = await findName(); // This is defined in the database
        setName(user.name);
    };

    const toggleSearchBar = () => {
        setSearchVisible(!searchVisible);
    };

    const navigateToMyInterests = () => {
        // Navigate to the "MyInterests" screen
        navigation.navigate('My Interests');
    };

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            {/* Top Bar */}
            <View style={styles.topBar}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('./Images/home_logo.jpg')}
                        style={styles.logo}
                    />
                </View>
                <TouchableOpacity onPress={toggleSearchBar}>
                    <Text style={styles.searchButton}>Search</Text>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            {searchVisible && (
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    placeholderTextColor="#8B4513"
                />
            )}

            {/* Welcome Text */}
            <View>
                <Text style={styles.welcomeText}>
                    Welcome {name ? name : 'User'}
                </Text>
            </View>

            {/* Upcoming */}
            <View>
                <Text style={styles.upcomingHeader}>
                    Upcoming
                </Text>
            </View>

            {/* My Interests */}
            <TouchableOpacity onPress={navigateToMyInterests}>
                <Text style={styles.interestHeader}>
                    My Interests
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#8B4513', // Brown color
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: '#8B4513',
        paddingHorizontal: 10,
        color: '#8B4513',
    },
    searchButton: {
        color: '#8B4513',
        fontSize: 16,
    },
    welcomeText: {
        color: '#8B4513',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    upcomingHeader: {
        color: '#8B4513',
        marginTop: 50,
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    interestHeader: {
        color: '#8B4513',
        marginTop: 200, // Increased margin top here
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default Home;

