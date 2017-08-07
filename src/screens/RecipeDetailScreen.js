import React, { Component  } from 'react';
import { ScrollView  } from 'react-native';
import { View, Text, Image } from 'react-native';

class RecipeDetailScreen extends Component {
  render() {
    const {
      title,
      image,
      ingredients,
      preparationTime,
      directions,
      servingCount,
    } = this.props.navigation.state.params;

    const {
      name,
      amountUnit,
      amount,
    } = ingredients;

    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: image}}
        />
        <Text>{title}</Text>
        <Text>Preparation time: {preparationTime}</Text>
        <Text>Servings: {servingCount}</Text>
        <View>
          {directions.split('*)').map((direction, index) => {
            if (!index) {
              return null;
            }

            return <Text key={index}>{index} {direction}</Text>;
          })}
        </View>
        {ingredients.map(ingredient =>
          <View key={ingredient.id}>
            <Text>{ingredient.name}</Text>
            <Text>{ingredient.amount}</Text>
            <Text>{ingredient.amountUnit}</Text>
          </View>
        )}
      </View>
    );
  }
}

export default RecipeDetailScreen;
