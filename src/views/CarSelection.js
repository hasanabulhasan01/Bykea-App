import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function CarSelection({ navigation, route }) {
  const { pickup, destination } = route.params;

  const fares = {
    bike: 40,
    rickshaw: 75,
    car: 150,
    bus: 200,
    truck: 300,
    airplane: 1200,
  };

  // const images = {
  //   bike: require("./bike.jpg"), // Replace 'bike.png' with the path to your bike image
  //   rickshaw: require("./Rickshaw.jpg"), // Replace 'rickshaw.png' with the path to your rickshaw image
  //   car: require("./civic.jpeg"), // Replace 'car.png' with the path to your car image
  //   truck: require("./truck.jpeg"), // Replace 'truck.png' with the path to your truck image
  // };

  const calculateFare = (vehicle) => {
    const { latitude: pickupLat, longitude: pickupLong } = pickup.geocodes.main;
    const { latitude: destinationLat, longitude: destinationLong } =
      destination.geocodes.main;
    const distance = calcCrow(
      pickupLat,
      pickupLong,
      destinationLat,
      destinationLong
    );
    const fare = fares[vehicle] * distance;
    alert("RS." + fare.toFixed(2));
  };

  // Function takes in latitude and longitude of two locations and returns the distance between them as the crow flies (in Km).
  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.headerText}>Your Selected Pickup Location is</Text>
        <Text style={styles.locationText}>
          {pickup.name}, {pickup.location.address}
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.headerText}>Your Selected Destination Location is</Text>
        <Text style={styles.locationText}>
          {destination.name}, {destination.location.address}
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            title={`Bike | ${fares.bike} Rs./Km `}
            onPress={() => calculateFare('bike')}
            style={styles.button}
          />
        </View>
        <View style={[styles.buttonContainer, { marginLeft: 10 }]}>
          <Button
            title={`Rickshaw | ${fares.rickshaw} Rs./Km `}
            onPress={() => calculateFare('rickshaw')}
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            title={`Car | ${fares.car} Rs./Km `}
            onPress={() => calculateFare('car')}
            style={styles.button}
          />
        </View>
        <View style={[styles.buttonContainer, { marginLeft: 10 }]}>
          <Button
            title={`Bus | ${fares.bus} Rs./Km `}
            onPress={() => calculateFare('bus')}
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.bookRideButtonContainer}>
        <Button
          disabled={!pickup}
          title="Book Your Ride"
          onPress={() => navigation.navigate("CarSelection", { pickup, destination })}
          style={styles.bookRideButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  locationContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    borderRadius: 10,
  },
  bookRideButtonContainer: {
    marginTop: 'auto',
    width: '100%',
    marginBottom: 20
  },
  bookRideButton: {
    borderRadius: 10,
  },
});



export default CarSelection;