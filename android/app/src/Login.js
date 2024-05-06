import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, useColorScheme, Alert } from 'react-native';
// import SQLite from 'react-native-sqlite-storage'; // Commented out the SQLite import
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const colorScheme = useColorScheme(); // Got this from the basic app they start you out with and essentially it just makes it so that if a person uses dark mode it works with this app
  const isDarkMode = colorScheme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // useEffect(() => {
    //   const db = SQLite.openDatabase({ name: 'database.db', location: 'default' });
    // }, []);

  const LoginNavigation = () => {
  // Open database connection
  // const db = SQLite.openDatabase(
  //   { name: 'database.db', location: 'default' },
  //   () => {
  //     // Query the database for the username and password
  //     db.transaction(tx => {
  //       tx.executeSql(
  //         'SELECT * FROM users WHERE username = ? AND password = ?',
  //         [username, password],
  //         (_, result) => {
  //           const { rows } = result;
  //           if (rows && rows.length > 0) {
  //             // If user exists, login
  //             navigation.navigate('Main');
  //           } else {
  //             // If user does not exist, display an error message
  //             Alert.alert('Invalid Credentials', 'Please enter valid username and password');
  //           }
  //         },
  //         (_, error) => {
  //           console.error('Failed to query data:', error);
  //           // Handle error if query fails
  //           Alert.alert('Error', 'Failed to authenticate. Please try again.');
  //         }
  //       );
  //     });
  //   },
  //   error => {
  //     console.error('Failed to open database:', error);
  //     // Handle error if database connection fails
  //     Alert.alert('Error', 'Failed to connect to database. Please try again later.');
  //   }
  // );

    navigation.navigate('Main');
  }

  return (
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}
    behavior="padding">
      <View style={styles.logoContainer}>
        <Image
          source={require('/Users/b17kr/BonniesConnectApp/android/app/src/Images/st_bonaventure-university_logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={LoginNavigation} // Calls the LoginNavigation function so you can get to the home screen.
        >
          <Text style={styles.buttonText}>Login</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={[styles.forgotPasswordText, { color: isDarkMode ? '#999999' : '#ffffff' }]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  },
  title: {
    color: '#8B4513', // Brown Color
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(139, 69, 19, 0.5)', // Brown color that matches the other shades of brown I used for other things
    marginBottom: 10,
    color: '#ffffff',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#8B4513', // Brown color
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  forgotPasswordText: {
    color: '#ffffff'
  }
});


export default Login;