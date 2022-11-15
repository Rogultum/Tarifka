import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import styles from "./MealCard.style";
import { useNavigation } from "@react-navigation/native";

const MealCard = (props) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Details", { id: props.meal.item.idMeal })
      }
    >
      <Image
        style={styles.image}
        source={{ uri: props.meal.item.strMealThumb }}
      />
      <Text style={styles.meal_name}>
        {props.meal.item.strMeal}
        {"  "}
      </Text>
    </Pressable>
  );
};

export default MealCard;
