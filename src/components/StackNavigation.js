import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import RecipeListScreen from './RecipeListScreen';

const RecipeStackNavigation = StackNavigator({
  RecipeList: { screen: RecipeListScreen },
}, {
  initialRouteName: 'RecipeList',
  swipeEnabled: true,
});

export default RecipeStackNavigation;

