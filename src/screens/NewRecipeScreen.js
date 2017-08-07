import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Recipe = t.struct({
  title: t.String,
  title: t.String,
  image: t.String,
  preparationTime: t.Number,
  servingCount: t.Number,
  directions: t.String,
});

class NewRecipeScreen extends Component {
  _onPress = () => {
    let value = this.refs.recipeForm.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    return (
      <View>
        <Form
          ref="recipeForm"
          type={Recipe}
        />
        <TouchableHighlight onPress={this._onPress}>
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default NewRecipeScreen;
