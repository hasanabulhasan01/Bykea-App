import React from 'react';
import { View, Text, Button } from 'react-native';

const RideHistoryDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ride History Details</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => navigation.navigate("RideHistory")} />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
};

export default RideHistoryDetail;