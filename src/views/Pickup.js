import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Pickup = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      Location.watchPositionAsync(
        {
          accuracy: 6,
          distanceInterval: 1,
          timeInterval: 100,
        },
        (location) => {
          console.log("location", location);
          setLocation(location);
        }
      );


    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "Loading...";
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pickup</Text>
      {location && (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0031,
            longitudeDelta: 0.0031,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Your Location"}
            description={"My Home"}
          />
        </MapView>
      )}
      <View style={styles.buttonContainer}>
        <Button
          title="Car Selection"
          onPress={() => navigation.navigate("CarSelection")}
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
    height: "80%",
  },
};

export default Pickup;
