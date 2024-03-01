import React from 'react';
import { View, Text, Button } from 'react-native';

const RideHistory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ride History</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ride History Details" onPress={() => navigation.navigate("RideHistoryDetail")} />
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

export default RideHistory;