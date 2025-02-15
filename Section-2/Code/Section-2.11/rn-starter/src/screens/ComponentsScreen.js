// Part 1 - imports
import React from 'react';
//view element allows us to position or group together multiople elements inside of it
import {Text, StyleSheet, View} from 'react-native';

//Part 2 - create component via JSX
    //Text is a primitive React element - provided by React library
    //other primitive elements include View, Image, Button, etc.
    //jsx allows us to use react native bundler that uses Babel to turn JSX into plain JS code
const ComponentsScreen = () => {
    //js variables can be referred to in JSX block via curly braces
    //Text elements cant show JS object
    const introduction = 'My name is';
    const name = 'Yinzhe';

    //can refer to JSX elements in variables and show that in JSX block
    //conditionally created JSX can be displayed via this method
    const greeting2 = <Text> Hello to you!</Text>;

    //no semicolons at end of elements inside of View element
    //style is a prop - configuration elements
    //can build elements to accept # of props
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={{fontSize : 20}}>{introduction} {name}</Text>
            <Text>{greeting2}</Text>
        </View>
    )
};

//Part 3 - create stylesheet
    //styles object uses StyleSheet.create react function call
    //StyleSheet.create validates style changes
    //gives us error messages verus vague warning msgs, provides information about issue
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

//Part 4 - export component
export default ComponentsScreen;