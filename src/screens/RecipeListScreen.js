import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight  } from 'react-native';

import RecipeDetailScreen from './RecipeDetailScreen';
import RecipeCell from './RecipeCell';
import { recipeListData } from '../helper/mock-data';

class RecipeListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  _onRecipePress = ({ recipeData }) => {
    this.props.navigation.navigate('RecipeDetail', { ...recipeData });
  };

  _renderRecipeCell = (rowData, sectionID, rowID) => {
    return <RecipeCell recipeData={rowData} onPress={this._onRecipePress} />;
  }

  render() {
    const dataSource = this.state.ds.cloneWithRows(recipeListData);

    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRecipeCell}
          enableEmptySections
        />
      </View>
    );
  }
}

export default RecipeListScreen;
