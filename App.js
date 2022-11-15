import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./src/pages/Categories";
import MealsScreen from "./src/pages/Meals/MealsScreen";
import DetailsScreen from "./src/pages/Details/DetailsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
