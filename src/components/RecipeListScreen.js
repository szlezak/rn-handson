import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

import { recipeListData } from '../helper/mock-data';

class RecipeListScreen extends Component {
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    console.log(id)
  }

  render() {
    console.log(recipeListData)
    return (
      <View>
        <FlatList
          data={recipeListData}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <View onPressItem={this._onPressItem}>
              <Text key="item.id">
                {item.title}
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}

export default RecipeListScreen;
