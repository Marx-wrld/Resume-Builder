import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function ShowCV({ route }) {
  const styles = StyleSheet.create({
    //we are done with the view, now lets make it look good
    container: {
      flex: 1,
      backgroundColor: "#36485f",
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 40,
    },
    header: {
      marginBottom: 20,
      alignSelf: "stretch",
    },
    details: {
      marginBottom: 15,
    },
    headerText: {
      fontSize: 24,
      color: "#fff",
      borderBottomColor: "#199187",
      paddingBottom: 10,
      borderBottomWidth: 1,
    },
    titleText: {
      fontWeight: "bold",
      color: "yellow",
      fontSize: 15,
      marginBottom: 10,
    },
    key: {
      fontWeight: "bold",
    },
    text: {
      color: "#d3d3d3",
    },
  });

  let dataObj = route.params

  return (
    //Creating the resume ShowCV screen
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Resume</Text>
      </View>

      {/*Rendering Personal Details section */}
      <View style={styles.details}>
        <Text style={styles.titleText}>Personal Details</Text>
        <img
          source={{ uri: dataObj.avatarUrl }}
          //We get the imageUrl from the avatarUrl property
          style={{ width: 80, height: 80 }}
        />
        <Text style={styles.text}>
          <Text style={styles.key}>Name: </Text>
          {/* We get the name from the fullName property */}
          <Text>{dataObj.fullName}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.key}>Professional Title: </Text>
          {/* We get the title from the profTitle property */}
          <Text>{dataObj.fullName}</Text>
        </Text>
      </View>

      {/*Rendering Contact Details Section */}
      <View style={styles.details}>
        <Text style={styles.titleText}> Contact Details </Text>

        <Text style={styles.text}>
          <Text style={styles.key}> Phone Number: </Text>
          <Text>{dataObj.phoneNo}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Email: </Text>
          <Text>{dataObj.email}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}> Website: </Text>
          <Text>{dataObj.website}</Text>
        </Text>
      </View>

      {/*Rendering previous Job Details section */}
      <View style={styles.details}>
        <Text style={styles.titleText}>Previous Job</Text>

        <Text style={styles.text}>
          <Text styles={styles.key}>Company: </Text>
          <Text>{dataObj.company}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Role: </Text>
          <Text>{dataObj.role}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Start & End Dates: </Text>
          <Text>
            {dataObj.jobStartDate} - {dataObj.jobEndDate}
          </Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>Job Experience: </Text>
            <Text>{dataObj.experience}</Text>
        </Text>
      </View>

      {/*Rendering Profile Details section */}

      <View style={styles.details}>
        <Text style={styles.titleText}>Profile Details</Text>
        <Text style={styles.text}>
          <Text style={styles.key}>Profile Summary: </Text>
          <Text>{dataObj.profSummary}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Certificate: </Text>
          <Text>{dataObj.certificate}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>College Name: </Text>
          <Text>{dataObj.collegeName}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Start & End Dates: </Text>
          <Text>
            {dataObj.colStartDate} - {dataObj.colEndDate}
          </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Skill: </Text>
          <Text>{dataObj.skill}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.key}>Hobby: </Text>
          <Text>{dataObj.hobby}</Text>
        </Text>
      </View>
    </View>
  );
  //Both screens are now set, next is to make a screen navigator in App.js
}
