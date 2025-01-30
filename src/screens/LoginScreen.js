import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY} />
            
            {/* App Logo */}
            <View style={styles.logoContainer}>
                {/* <Image
                    source={require('../assets/logo.png')} // Replace with your app logo
                    style={styles.logo}
                /> */}
            </View>

            {/* Hero Image */}
            <View style={styles.heroContainer}>
                {/* <Image
                    source={require('../assets/hero-image.png')} // Replace with your hero image
                    style={styles.heroImage}
                /> */}
            </View>

            {/* Content Section */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Let's Get Started</Text>
                <Text style={styles.subtitle}>
                    Best App to find services near you which deliver you a professional service
                </Text>

                {/* Get Started Button */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('User')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity>

                {/* Skip Button */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Animation')}
                    style={styles.skipButton}
                >
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    heroContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    heroImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 40,
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 24,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    skipButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    skipText: {
        fontSize: 16,
        color: Colors.PRIMARY,
        fontWeight: '600',
    },
});