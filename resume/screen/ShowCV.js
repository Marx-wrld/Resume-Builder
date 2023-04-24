import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react'; 

export default function ShowCV ({route}) {

  const styles = StyleSheet.create({ //we are done with the view, now lets make it look good
    cont: {
      flex: 1,
      backgroundColor: '#36485f',
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 40
    },
    header: {
      marginBottom: 20,
      alignSelf: 'stretch'
    },
    details: {
      marginBottom: 15
    },
    headerText: {
      fontSize: 24,
      color: '#fff',
      borderBottomColor: '#199187',
      paddingBottom: 10,
      borderBottomWidth: 1
    },
    titleText: {
      fontWeight: 'bold',
      color: 'yellow',
      fontSize: 15,
      marginBottom: 10
    },
    key: {
      fontWeight: 'bold'
    },
    text: {
      color: '#d3d3d3'
    }
  })

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
  //Both screens are now set next is to make a screen navigator in App.js
}
