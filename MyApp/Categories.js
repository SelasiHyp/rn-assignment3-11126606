import React from 'react';
import { StyleSheet,ScrollView,View, Text,Image } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.categoryBody} >
      <Text style={styles.textHeader}>Categories</Text>
      <ScrollView horizontal Style={styles.categoryScrollBox}showsHorizontalScrollIndicator={false}>
      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Exercise</Text>
        <Text style={styles.categorySmallText}>12 tasks</Text>
        <Image style={styles.categoryImage}
            source={require("./assets/youngWoman.png")}
        />
      </View>

      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Study</Text>
        <Text style={styles.categorySmallText}>4 hours</Text>
        <Image style={styles.categoryImage}
            source={require("./assets/youngWomanDesk.png")}
        />
      </View>

      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Coding</Text>
        <Text style={styles.categorySmallText}>2 projects</Text>
            <Image style={styles.categoryImage}
            source={require("./assets/youngWomanDesk.png")}
        />
      </View>

      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Meditate</Text>
        <Text style={styles.categorySmallText}>30 minutes</Text>
        
        <Image style={styles.categoryImage}
            source={require("./assets/meditate.png")}
        />
      </View>

      <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Read</Text>
        <Text style={styles.categorySmallText}>12 books</Text>
        <Image style={styles.categoryImage}
            source={require("./assets/youngWoman.png")}
        />
        </View>

        <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Draw</Text>
        <Text style={styles.categorySmallText}>6 tasks</Text>
        <Image style={styles.categoryImage}
            source={require("./assets/youngWoman.png")}
        />
        </View>

        <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Socialize</Text>
        <Text style={styles.categorySmallText}>3 meetings</Text>
        <Image style={styles.categoryImage}
            source={require("./assets/youngWoman.png")}
        />
        </View>
        <View style={styles.categoryBox}>
        <Text style={styles.categoryText}>Volunteer</Text>
        <Text style={styles.categorySmallText}>3 hours</Text>
        <Image style={styles.categoryImage}
            source={require("./assets/youngWoman.png")}
        />
        </View>
      
            
    </ScrollView>
    </View>
  );
};

const styles= StyleSheet.create({
 categoryBody:{
    marginTop:30,
    marginBottom: 20,
 },
 textHeader:{
    fontWeight: "700",
    fontSize: 20,
    marginBottom:20,
 },
 categoryScrollBox: {
    flexDirection: 'row', // Arrange items horizontally
  },

  categoryBox: {
    width: 190, // Set a fixed width for each item
    height: 192, // Set a fixed height for each item
    backgroundColor: '#FBF9F7',
    justifyContent: 'center',
    marginHorizontal: 10, 
    borderRadius: 15,
    
  },
  categoryImage:{
    left: 35,
    width:151,
    height:135,
  },
  categorySmallText:{
    fontSize: 12,
   left:30,
   fontWeight:"300",
  },
  categoryText:{
    alignItems: 'left',
    fontSize: 16,
    fontWeight:"700",
    left:30,
  }
});

export default Categories;