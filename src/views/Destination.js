import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Destination = ({ navigation, route }) => {
  const { pickup } = route.params;
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [destination, setDestination] = useState();

  useEffect(() => {
    (async () => {
      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== "granted") {
      //   setErrorMsg("Permission to access location was denied");
      //   return;
      // }
      Location.watchPositionAsync(
        {
          accuracy: 6,
          distanceInterval: 1,
          timeInterval: 1000,
        },
        (location) => {
          // console.log("location", location);
          setLocation(location);
        }
      );
    })();
  }, []);

  const searchPlaces = (text) => {
    setDestination(null);
    // setPlaces([]);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "fsq3XsqU3wZrbb3/K+3PN7gTLNueI4J/LVsvIpZSAZBp4OE=",
      },
    };
    const { latitude, longitude } = location.coords;

    fetch(
      `https://api.foursquare.com/v3/places/search?
    query=${text}&ll=${latitude},${longitude}&radius=7000`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("response...", response);
        setPlaces(response.results);
      })
      .catch((err) => console.error(err));
  };

  const onPlaceSelect = (item) => {
    setDestination(item);
  };

  //early return
  // if (errorMsg) {
  //   return <Text>{errorMsg}</Text>;
  // }

  if (!location) {
    return <Text>Loading...</Text>;
  }

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = "Loading...";
  // }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Pickup</Text> */}
      <View>
        <Text>Your Selected Pickup Location is:</Text>
        <Text>
          {pickup.name}, {pickup.location.address}
        </Text>
      </View>
      <TextInput
        placeholder="Search places here..."
        onChangeText={searchPlaces}
      />
      {!destination && (
        <View>
          {places.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => onPlaceSelect(item)}>
                <Text>
                  {item.name}, {item.location.address}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      {destination && (
        <View>
          <Text>Your Selected destination location is:</Text>
          <Text>
            {destination.name}, {destination.location.address}
          </Text>
        </View>
      )}
      {location && (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0041,
            longitudeDelta: 0.0041,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            // title={"Your Location"}
            // description={"My Home"}
          />
        </MapView>
      )}
      <View style={styles.buttonContainer}>
        <Button
          disabled={!pickup}
          title="Select Vehicle"
          onPress={() => navigation.navigate("CarSelection", { pickup, destination })}
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
    fontSize: 24,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  map: {
    width: "100%",
    height: "70%",
  },
};

export default Destination;

//fsq3XsqU3wZrbb3/K+3PN7gTLNueI4J/LVsvIpZSAZBp4OE=    API KEY

// Abul hasan.......
