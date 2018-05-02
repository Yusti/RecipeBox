import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadRecipes } from './actions';
import { showNewRecipeModal } from '../RecipeItem/actions';
import selectRecipeList from './selectors';
import { selectEditModalVisibility } from '../RecipeItem/selectors';

import RecipeItem from '../RecipeItem';
import EditModal from '../RecipeItem/EditModal';

import { Wrapper, Title, Button, EmptyBox } from './styles';

type Props = {
  loadRecipesAction: Function,
  showNewRecipeModalAction: Function,
  recipeList: Array,
  editModalVisibility: boolean,
};

class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.loadRecipesAction();
  }
  props: Props;
  renderRecipeList = () => {
    const { recipeList } = this.props;
    if (!recipeList.length) {
      return (
        <EmptyBox>
          <h2>Your Recipe Box is empty.</h2>
          <p>Click the button below and add new recipe to your box.</p>
        </EmptyBox>
      );
    }
    return recipeList.map(recipe => (
      <RecipeItem
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        ingridients={recipe.ingridients}
      />
    ));
  };
  render() {
    const { editModalVisibility, showNewRecipeModalAction, recipeList } = this.props;
    return recipeList && (
      <div>
        <Title>My Recipe Box</Title>
        <Wrapper>
          {this.renderRecipeList()}
        </Wrapper>
        <Button onClick={showNewRecipeModalAction}>New Recipe</Button>
        <EditModal isOpen={editModalVisibility} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recipeList: selectRecipeList(),
  editModalVisibility: selectEditModalVisibility(),
});

const mapDispatchToProps = {
  loadRecipesAction: loadRecipes,
  showNewRecipeModalAction: showNewRecipeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
