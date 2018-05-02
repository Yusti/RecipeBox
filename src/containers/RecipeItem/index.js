import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleDetailsVisibility, showEditModal } from './actions';
import { deleteItem } from '../RecipeList/actions';
import { selectActiveId } from './selectors';

import Button from '../../components/LinkedButton';

import { Item, Title, Ingridient, IngridientsWrapper } from './styles';

type Props = {
  toggleDetailsVisibilityAction: Function,
  showEditModalAction: Function,
  deleteItemAction: Function,
  title: string,
  ingridients: string,
  id: number,
  activeId: number,
};

class RecipeItem extends PureComponent {
  props: Props;
  renderIngredientsList = () => this.props.ingridients.split(',').map(ingridient => (
    <Ingridient key={ingridient}>{ingridient}</Ingridient>
  ));
  render() {
    const {
      toggleDetailsVisibilityAction,
      showEditModalAction,
      deleteItemAction,
      id,
      title,
      activeId,
    } = this.props;
    return (
      <Item>
        <Title onClick={() => toggleDetailsVisibilityAction(id)}>{title}</Title>
        {
          activeId === id
          && (
            <IngridientsWrapper>
              <h2>Ingridients:</h2>
              {this.renderIngredientsList()}
              <Button onClick={() => deleteItemAction(id)} title="Delete" />
              <Button onClick={() => showEditModalAction(id)} title="Edit" />
            </IngridientsWrapper>
          )
        }
      </Item>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  activeId: selectActiveId(),
});

const mapDispatchToProps = {
  toggleDetailsVisibilityAction: toggleDetailsVisibility,
  showEditModalAction: showEditModal,
  deleteItemAction: deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);
