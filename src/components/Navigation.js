import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import Cart from "../Cart";
import Dasar from "./paketKelas/Dasar";
import Intermediate from "./paketKelas/Intermediate";
import Advance from "./paketKelas/Advance";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import User from "../User";
import EditUser from "./EditUser";

const Tab = createMaterialBottomTabNavigator();

const TopBar = () => {
  return (
    <Tab.Navigator activeColor="#e91e63">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main Menu" component={TopBar} />
      <Stack.Screen name="Dasar" component={Dasar} />
      <Stack.Screen name="Intermediate" component={Intermediate} />
      <Stack.Screen name="Advance" component={Advance} />
      {/* <Stack.Screen name="EditUser" component={EditUser} /> */}
    </Stack.Navigator>
  );
};

export default Navigation;
