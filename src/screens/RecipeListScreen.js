import React from 'react';
import { View, Text, FlatList } from 'react-native';

import RecipeDetailScreen from './RecipeDetailScreen';


function RecipeListScreen() {
// <FlatList
//   data={recipesData}
//   renderItem={({item}) => <RecipeItem recipeData={item} />}
// />

  return (
      <View>
          <Text>Recipe List</Text>
        </View>
  );

}

export default RecipeListScreen;
