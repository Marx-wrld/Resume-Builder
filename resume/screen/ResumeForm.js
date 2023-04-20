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
    webiste: "",
    company: "",
    jobTitle: "",
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
          value={userDetails.jobTitle}
          onChangeText={(e) => {
            setUserDetails((userDetails) => ({
              ...userDetails,
              ...{ jobTitle: e },
            }));
          }}
        />

        <TextInput
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
          value={userDetails.jobTitle}
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
    </View>
  );
}
