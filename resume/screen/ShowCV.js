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
    <View style={styles.details}>
      <Text style={styles.titleText}>Personal Details</Text>
      <Image source={{ url: dataObj.avatarUrl }} 
      //We get the imageUrl from the avatarUrl property 
      style={{ width: 80, height: 80 }}
      />
      <Text style={styles.text}>
        <Text style={styles.key}>Name: </Text>
        {/* We get the name from the fullName property */}
        <Text>{dataObj}</Text>
      </Text>
      <Text style={styles.text}> 
        <Text style={styles.key}>Professional Title: </Text>
        {/* We get the title from the profTitle property */}
        <Text>{dataObj.profTitle}</Text>
      </Text>
    </View>
    </View>
  )
}
