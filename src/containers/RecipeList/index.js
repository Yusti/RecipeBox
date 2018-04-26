import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import getRecipesActions from './actions';
import { showNewRecipeModal } from '../RecipeItem/actions';
import selectRecipeList from './selectors';
import { selectModalState } from '../RecipeItem/selectors';

import RecipeItem from '../RecipeItem';
import DetailsModal from '../RecipeItem/DetailsModal';
import EditModal from '../RecipeItem/EditModal';

import { Wrapper, Title, Button } from './styles';

type RecipeListObj = {
  recipeList: Array,
};

type ModalState = {
  showDetails: boolean,
  editRecipe: boolean,
};

type Props = {
  getRecipes: Function,
  showNewRecipeModal: Function,
  recipeList: RecipeListObj,
  modalState: ModalState,
};

class RecipeList extends PureComponent {
  componentDidMount() {
    this.props.getRecipes();
  }
  props: Props;
  render() {
    const { showDetails, editRecipe } = this.props.modalState;
    const recipeList = Object.keys(this.props.recipeList).length > 0
      ? this.props.recipeList.recipeList
      : [];
    const recipes = recipeList.map(recipe => (
      <RecipeItem
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        ingridients={recipe.ingridients}
      />
    ));
    return this.props.recipeList && (
      <div>
        <Title>My Recipe Box</Title>
        <Wrapper>
          {recipes}
        </Wrapper>
        <Button onClick={this.props.showNewRecipeModal}>New Recipe</Button>
        <DetailsModal isOpen={showDetails} />
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
    getRecipes: bindActionCreators(getRecipesActions, dispatch),
    showNewRecipeModal: bindActionCreators(showNewRecipeModal, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
