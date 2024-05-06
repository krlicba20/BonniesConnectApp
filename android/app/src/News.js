import React from 'react';
import { ScrollView, View, Text, KeyboardAvoidingView, useColorScheme, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const News = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollView}>
                {/* SBU TV section */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        SBU TV
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('URL_FOR_LATEST_NEWS')}>
                    <Text style={styles.buttonText}>Latest News</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('URL_FOR_FULL_EPISODES')}>
                    <Text style={styles.buttonText}>Full Episodes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('URL_FOR_SPORTS')}>
                    <Text style={styles.buttonText}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('URL_FOR_WEATHER')}>
                    <Text style={styles.buttonText}>Weather</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('URL_FOR_CURRENT_EVENTS')}>
                    <Text style={styles.buttonText}>Current Events</Text>
                </TouchableOpacity>

                {/* The Bona Venture section */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        The Bona Venture
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.thebvnewspaper.com/category/news/')}>
                    <Text style={styles.buttonText}>Bonaventure Articles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.thebvnewspaper.com/category/sports/')}>
                    <Text style={styles.buttonText}>Sports Articles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.thebvnewspaper.com/category/opinion/')}>
                    <Text style={styles.buttonText}>Opinion Articles</Text>
                </TouchableOpacity>

                {/* The Buzz section */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        The Buzz
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://player.listenlive.co/37351')}>
                    <Text style={styles.buttonText}>Click Here to Listen Live</Text>
                </TouchableOpacity>

                {/* Local News Section */}
                <View>
                    <Text style={styles.sectionHeaders}>
                        Local News
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.tapinto.net/towns/greater-olean/')}>
                    <Text style={styles.buttonText}>TapintoGreater Olean</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://www.oleantimesherald.com/')}>
                    <Text style={styles.buttonText}>Olean Times Herald</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        marginBottom: 10,
        backgroundColor: '#8B4513',
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default News;


