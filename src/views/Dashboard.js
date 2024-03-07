import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.gifContainer}>
        <Image source={require("../../assets/car.gif")} style={styles.gif} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Pickup"
          onPress={() => navigation.navigate("Pickup")}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  text: {
    // flex: 5,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  gifContainer: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gif: {
    width: 400,
    height: 350,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
};

export default Dashboard;
