import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import RecipeListScreen from './RecipeListScreen';

const RecipeScreen = ({ navigation, screenProps }) => (
  <RecipeListScreen props={navigation, screenProps } />
);

const RecipeStackNavigation = StackNavigator({
  RecipeList: { screen: RecipeScreen },
});

export default RecipeStackNavigation;

