// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import MealCard from "../../components/MealCard/MealCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const MealsScreen = ({ route }) => {
  const { error, loading, data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  const renderMeals = (item) => <MealCard meal={item} />;

  return (
    <View style={{ backgroundColor: "orange", flex: 1 }}>
      <FlatList
        data={data.meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsScreen;
