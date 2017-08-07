import React, { Component } from 'react';
import { CookbookTab } from './navigation/router';

import { recipeListData } from './helper/mock-data';

class App extends Component {
  render() {
    return <CookbookTab />;
  }
}

export default App;
