import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OngoingTask = () => {
  // Define an array of ongoing tasks
  const ongoingTasks = [
    { id: '1', title: 'Mobile App Develop' },
    { id: '2', title: 'Web App Develop' },
    { id: '3', title: 'UI/UX Design' },
    { id: '4', title: 'Backend Development' },
    { id: '5', title: 'Testing and QA' },
    { id: '6', title: 'Database Management' },
    { id: '7', title: 'Frontend Development' },
    { id: '8', title: 'Project Management' },
    { id: '9', title: 'DevOps' },
    { id: '10', title: 'Technical Writing' },
    { id: '11', title: 'System Administration' },
    { id: '12', title: 'Cloud Computing' },
    { id: '13', title: 'Data Analysis' },
    { id: '14', title: 'Machine Learning' },
    { id: '15', title: 'Network Security' },
  ];

  return (
    <View>
      <Text style={styles.textHeader}>Ongoing Task</Text>
      {ongoingTasks.map(task => (
        <View key={task.id} style={styles.ongoingView}>
          <View style={styles.ongoingBox}>
            <Text style={styles.ongoingText}>{task.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: "700",
    fontSize: 20,
  },
  ongoingView: {
    flexDirection: 'column',
    alignItems: 'center', // Center the boxes horizontally
  },
  ongoingBox: {
    width: 320, // Set a fixed width for each item
    height: 128, // Set a fixed height for each item
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    marginVertical: 10,
    justifyContent: 'center', // Center content vertically
    paddingLeft: 10, // Add some padding for the text
  },
  ongoingText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default OngoingTask;
