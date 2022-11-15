import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CategoryCard.style";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Meals", {
          category: props.category.strCategory,
        })
      }
    >
      <Image
        style={styles.image}
        source={{ uri: props.category.strCategoryThumb }}
      />
      <Text style={styles.c_name}>{props.category.strCategory}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
