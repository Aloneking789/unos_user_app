import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ActivityIndicator, KeyboardAvoidingView, Platform, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Colors from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserScreen = ({ navigation }) => {
    const [authState, setAuthState] = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            if (!userName || !userEmail) {
                alert('Please enter both UserName and UserEmail');
                return;
            }

            setLoading(true);
            setAuthState({ userName, userEmail });
            await AsyncStorage.setItem('userName', userName);
            await AsyncStorage.setItem('userEmail', userEmail);
            setUserName('');
            setUserEmail('');
            navigation.navigate('Home');
            alert('User data saved successfully!');
        } catch (error) {
            console.error('Error saving user data:', error);
            alert('Failed to save user data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>
                <View style={styles.logoContainer}>
                    {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Welcome to Home Service!</Text>
                    <Text style={styles.subHeaderText}>Enter your details to get started.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        placeholderTextColor="#aaa"
                        onChangeText={(text) => setUserName(text)}
                        value={userName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="john.doe@example.com"
                        placeholderTextColor="#aaa"
                        onChangeText={(text) => setUserEmail(text)}
                        value={userEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.button} disabled={loading}>
                    {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Get Started</Text>}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    header: {
        marginBottom: 30,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subHeaderText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#ff6600',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
