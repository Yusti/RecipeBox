import React, { PureComponent } from 'react';

import { Wrapper, RecipeItem } from './styles';

class RecipeList extends PureComponent {
  render() {
    return (
      <div>
        <div>My Recipe Box</div>
        <Wrapper>
          <RecipeItem>
            1
          </RecipeItem>
          <RecipeItem>
            2
          </RecipeItem>
          <RecipeItem>
            3
          </RecipeItem>
        </Wrapper>
        <button onClick={this.setNewRecipe()}>New Recipe </button>
      </div>
    );
  }
}

export default RecipeList;
