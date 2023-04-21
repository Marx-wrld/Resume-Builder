import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react'; 

export default function ShowCV ({route}) {
  let dataObj = route.params

  return (
    //Creating the resume ShowCV screen
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Your Resume</Text>
    </View>

    </View>
  )
}
