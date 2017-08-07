import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator  } from 'react-navigation';

import RecipeStackNavigation from './components/StackNavigation';
import NewRecipeScreen from './components/NewRecipeScreen';

const App = TabNavigator({
  RecipeList: () => { screen: RecipeStackNavigation },
  NewRecipe: { screen: NewRecipeScreen },
}, {
  initialRouteName: 'RecipeList',
  swipeEnabled: true,
});

export default App;
