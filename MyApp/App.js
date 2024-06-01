import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Categories from './Categories';
import OngoingTask from './ongoingTask';
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <View style={styles.header}>
          <Text style={styles.text}>Hello , Devs</Text>
          <Image
            style={styles.profilePic}
            source={require("./assets/person.png")}
          />
        </View>
        <View>
          <Text style={styles.smallText}>14 tasks today</Text>
        </View>
      </View>
      <View style={styles.searchFilter}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("./assets/searchIcon.png")}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#808080"
            onChangeText={(text) => {}}
          />
        </View>
        <View style={styles.filterButtonContainer}>
          <TouchableOpacity style={styles.filterButton} onPress={() => {}}>
            <Image
              style={styles.filterIcon}
              source={require("./assets/filter.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Categories/>
      <OngoingTask/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F0E8",
    flex: 1,
    padding: 20,
  },
  headerRow: {
    flexDirection: "column",
    marginTop: 40,
   },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "times new roman",
  },
  profilePic: {
    height: 46,
    width: 45,
    padding:10,
    borderRadius: 45 / 2,
    backgroundColor: "#FFF",
  },
  smallText: {
    fontSize: 12,
    fontWeight:"500",
  },
  searchFilter: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: 200,
    height: 48,
    paddingHorizontal: 12,
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  filterButtonContainer: {
    marginLeft: 20,
  },
  filterButton: {
    padding: 10,
    backgroundColor: "#F0522F",
    borderRadius: 10,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
});
