import { View, Text, FlatList } from "react-native";
import React from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useFetch from "../../hooks/useFetch";
import styles from "./CategoriesScreen.style";

const CategoriesScreen = () => {
  const { loading, data, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  console.log(data.categories);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const renderCategories = ({ item }) => <CategoryCard category={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        keyExtractor={(item) => item.idCategory}
        data={data.categories}
        renderItem={renderCategories}
      />
    </View>
  );
};

export default CategoriesScreen;
