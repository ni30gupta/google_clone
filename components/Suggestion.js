import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'react-native-elements';

const Suggestion = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.suggestionContainer}>
                {/* Left Icon */}
                <MaterialIcons style={styles.icon} name="search" size={24} color="#9aa0a6" />

                {/* Text */}
                <Text style={styles.text}>{item.title}</Text>

                {/* Right Icon */}
                <Icon
                  type="feather"
                  name="arrow-up-left"
                  color={'#9aa0a6'}
                  size={24}
                />
                {/* <MaterialIcons style={styles.icon} type='fontawesome' name="search" size={24} color="#9aa0a6" /> */}

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#1a1a1a',
    },
    suggestionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 16,
        // borderRadius: 30,
    },
    icon: {
        marginHorizontal: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
        flex: 1,
    },
});


export default Suggestion