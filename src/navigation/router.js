import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon  } from 'react-native-elements';

import NewRecipeScreen from '../screens/NewRecipeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';

export const RecipeStack = StackNavigator({
  RecipeList: {
    screen: RecipeListScreen,
    navigationOptions: {
      title: 'RecipeList',
    },
  },
  RecipeDetail: {
    screen: RecipeDetailScreen,
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    // }),
  },
});

export const CookbookTab = TabNavigator({
  RecipeList: {
    screen: RecipeStack,
    navigationOptions: {
      tabBarLabel: 'RecipeList',
      tabBarIcon: ({ tintColor  }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  NewRecipe: {
    screen: NewRecipeScreen,
    navigationOptions: {
      tabBarLabel: 'NewRecipe',
      tabBarIcon: ({ tintColor }) => <Icon name="note-add" size={35} color={tintColor} />
    },
  },
});
