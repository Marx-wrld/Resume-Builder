import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function ResumeForm({ navigation }) {
  const [userDetails, setUserDetails] = useState({
    //contains information the user is required to provide via the form inputs
    //we will use the setter method setUserDetails to populate the form as the user types into the inputs

    fullName: "",
    avatarUrl: "",
    phoneNo: "",
    email: "",
    website: "",
    company: "",
    role: "",
    jobStartDate: "",
    jobEndDate: "",
    experience: "",
    profSummary: "",
    certificate: "",
    collegeName: "",
    colStartDate: "",
    colEndDate: "",
    skill: "",
    hobby: "",
  });

  const styles = StyleSheet.create({
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
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#59cbbdd',
      marginTop: 5,
      marginBottom: 20
    },
    titleText: { 
      fontWeight: 'bold',
      color: 'yellow',
      fontSize: 15,
      marginBottom: 10
    },
    textinput: {
      alignSelf: 'stretch',
      height: 40,
      color: '#d3d3d3',
      marginBottom: '#f8f8f8',
      borderBottomWidth: 1
    }
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Resume Builder</Text>
      </View>

      {/*Creating the various input groups */}

      {/*First input group is for collecting personal info, name, avatarUrl and job title*/}

      <View style={styles.details}>
        <Text style={styles.titleText}>Personal Details</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Full Name"
          value={userDetails.fullName}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ fullName: e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Avatar URL"
          value={userDetails.avatarUrl}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ avatarUrl: e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Professional Title"
          value={userDetails.profTitle}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ profTitle: e },
            }));
          }}
        />
      </View>

    {/*Second input group for previous job details */}

      <View style={styles.details}>
        <Text style={styles.titleText}>Previous Job</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter company Name"
          value={userDetails.company}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ company: e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter Job Title"
          value={userDetails.role}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ role: e },
            }));
          }}
        />

        <TextInput

        //You can use react-native-date-picker library aside using the textinput for the date to make the project more interesting
          style={styles.textinput}
          placeholder="Enter Start Date"
          value={userDetails.jobStartDate}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ jobStartDate: e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter End Date"
          value={userDetails.role}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ jobEndDate: e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Experience"
          value={userDetails.experience}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ experience: e },
            }));
          }}
        />
      </View>

      <Button

      //when the user presses the button to submit his/her details he/she is navigated to the ShowCV screen
        title="Create Resume"
        style={styles.button}
        onPress={() => navigation.navigation('ShowCV', userDetails)}
      >
      </Button>
    </View>
  );
}
