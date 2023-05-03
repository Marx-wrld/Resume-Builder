import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
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
    container: {
      flex: 1,
      backgroundColor: "#004987",
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 40,
    },
    header: {
      marginBottom: 20,
      alignSelf: "stretch",
    },
    details: {
      marginBottom: 15
    },
    headerText: {
      fontSize: 24,
      color: "#fff",
      borderBottomColor: "#199187",
      paddingBottom: 10,
      borderBottomWidth: 1,
    },
    button: {
      alignSelf: "stretch",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#59cbbdd",
      marginTop: 5,
      marginBottom: 20,
    },
    titleText: {
      fontWeight: "bold",
      color: "gold",
      fontSize: 15,
      marginBottom: 10,
    },
    textinput: {
      alignSelf: "stretch",
      height: 40,
      color: "#d3d3d3",
      marginBottom: "#f8f8f8",
      borderBottomWidth: 1,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Resume Builder / CV Maker</Text>
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
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'fullName': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Avatar URL"
          value={userDetails.avatarUrl}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'avatarUrl': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Professional Title"
          value={userDetails.profTitle}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'profTitle': e },
            }));
          }}
        />
      </View>

      {/* User Contact Details section */}

      <View style={styles.details}>
        <Text style={styles.titleText}>Contact Details</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your Phone Number"
          value={userDetails.phoneNo}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'phoneNo': e },
            }));
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter your Email"
          value={userDetails.email}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'email': e },
            }));
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter your website link"
          value={userDetails.website}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'website': e },
            }));
          }}
        />
      </View>

      {/*Input group for previous job details */}

      <View style={styles.details}>
        <Text style={styles.titleText}>Previous Job</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter company Name"
          value={userDetails.company}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'company': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter Job Title"
          value={userDetails.role}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'role': e },
            }));
          }}
        />

        <TextInput
          //You can use react-native-date-picker library aside using the textinput for the date to make the project more interesting
          style={styles.textinput}
          placeholder="Enter Start Date"
          value={userDetails.jobStartDate}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'jobStartDate': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter End Date"
          value={userDetails.role}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'jobEndDate': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your Experience"
          value={userDetails.experience}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'experience': e },
            }));
          }}
        />
      </View>

      {/*User Profile Details section*/}

      <View style={styles.details}>
        <Text style={styles.titleText}>Profile Details</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter your Profile summary"
          value={userDetails.profSummary}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'profSummary': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your certificate"
          value={userDetails.certificate}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'certificate': e },
            }));
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter your college name"
          value={userDetails.collegeName}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'collegeName': e },
            }));
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter start date (e.g. 20/04/2023)"
          value={userDetails.colStartDate}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'colStartDate': e },
            }));
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter end date (e.g. 10/11/2025)"
          value={userDetails.colEndDate}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'colEndDate': e },
            }));
          }}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter your best skill"
          value={userDetails.skill}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'skill': e },
            }));
          }}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your hobby"
          value={userDetails.hobby}
          onChangeText={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails,
              ...{ 'hobby': e },
            }));
          }}
        />
      </View>

      <Button
        //when the user presses the button to submit his/her details he/she is navigated to the ShowCV screen
        title="Create Resume"
        style={styles.button}
        onPress={() => navigation.navigate("ShowCV", userDetails)}
      ></Button>
    </View>
  );
}
