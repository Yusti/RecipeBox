import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadRecipes } from './actions';
import { showNewRecipeModal } from '../RecipeItem/actions';
import selectRecipeList from './selectors';
import { selectModalState } from '../RecipeItem/selectors';

import RecipeItem from '../RecipeItem';
import EditModal from '../RecipeItem/EditModal';

import { Wrapper, Title, Button, EmptyBox } from './styles';

type RecipeListObj = {
  recipeList: Array,
};

type ModalState = {
  showDetails: boolean,
  editRecipe: boolean,
};

type Props = {
  loadRecipes: Function,
  showNewRecipeModalAction: Function,
  recipeList: RecipeListObj,
  modalState: ModalState,
};

class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.loadRecipes();
  }
  props: Props;
  renderRecipeList = () => {
    const { recipeList } = this.props;
    const recipes = Object.keys(recipeList).length > 0 ? recipeList.recipeList : [];
    if (!recipes.length) {
      return (
        <EmptyBox>
          <h2>Your Recipe Box is empty.</h2>
          <p>Click the button below and add new recipe to your box.</p>
        </EmptyBox>
      );
    }
    return recipes.map(recipe => (
      <RecipeItem
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        ingridients={recipe.ingridients}
      />
    ));
  };
  render() {
    const { modalState: { editRecipe }, showNewRecipeModalAction, recipeList } = this.props;
    return recipeList && (
      <div>
        <Title>My Recipe Box</Title>
        <Wrapper>
          {this.renderRecipeList()}
        </Wrapper>
        <Button onClick={showNewRecipeModalAction}>New Recipe</Button>
        <EditModal isOpen={editRecipe} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recipeList: selectRecipeList(),
  modalState: selectModalState(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadRecipes: bindActionCreators(loadRecipes, dispatch),
    showNewRecipeModalAction: bindActionCreators(showNewRecipeModal, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
