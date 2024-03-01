import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../views/Dashboard";
import Pickup from "../views/Pickup";
import CarSelection from "../views/CarSelection";
import Destination from "../views/Destination";
import RideHistory from "../views/RideHistory";
import RideHistoryDetail from "../views/RideHistoryDetails";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard =) " component={DashboardNavigator} />
        <Drawer.Screen name="Ride History" component={HistoryNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function DashboardNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Pickup" component={Pickup} />
      <Stack.Screen name="CarSelection" component={CarSelection} />
      <Stack.Screen name="Destination" component={Destination} />
    </Stack.Navigator>
  )
}

function HistoryNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="RideHistory" component={RideHistory} />
      <Stack.Screen name="RideHistoryDetail" component={RideHistoryDetail} />
    </Stack.Navigator>
  )
}
