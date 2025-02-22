import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
// import * as Animatable from 'react-native-animatable';

const data = new Array(50).fill(0).map((_, index) => ({ id: index }))

const BusinessListByCategoryScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            animation={'fadeInUp'}
                            duration={1000}
                            delay={index * 100}
                            style={{
                                width: '90%',
                                height: 100,
                                backgroundColor: '#DDD',
                                marginTop: 30,
                                borderRadius: 20,
                                alignSelf: 'center'
                            }}>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default BusinessListByCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})