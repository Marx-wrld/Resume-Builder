import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function ResumeForm({ navigation }){
    return (
        const [userDetails, setUserDetails] = useState({
            //contains information the user is required to provide via the form inputs
            //we will use the setter method setUserDetails to populate the form as the user types into the inputs
            
            fullName: '',
            avatarUrl: '',
            phoneNo: '',
            email: '',
            webiste: '',
            company: '',
            jobTitle: '',
            jobStartDate: '',
            jobEndDate: '',
            experience: '',
            profSummary: '',
            certificate: '',
            collegeName: '',
            colStartDate: '',
            colEndDate: '',
            skill: '',
            hobby: ''
        });
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Resume Builder</Text>
            </View>
        </View>
    )
}