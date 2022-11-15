import { ScrollView, View, Text, FlatList, Image, Button } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import styles from "./DetailsScreen.style";
import * as Linking from "expo-linking";

const DetailsScreen = ({ route }) => {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
  );
  // console.log("details", data);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const URL = data.meals[0].strYoutube;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: data.meals[0].strMealThumb }}
      />
      <Text style={styles.title}>{data.meals[0].strMeal}</Text>
      <Text style={styles.origin}>{data.meals[0].strArea}</Text>
      <View style={styles.divider} />
      <Text style={styles.instructions}>{data.meals[0].strInstructions}</Text>
      <Button
        color="#ff4040"
        title="Watch on Youtube"
        onPress={() => Linking.openURL(data.meals[0].strYoutube)}
      />
    </ScrollView>
  );
};

export default DetailsScreen;
