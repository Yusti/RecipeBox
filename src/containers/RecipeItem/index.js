import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { showDetails, showEditModal } from './actions';
import { deleteItem } from '../RecipeList/actions';
import { selectActiveId } from './selectors';

import Button from '../../components/LinkedButton';

import { Item, Title, Ingridient, IngridientsWrapper } from './styles';

type Props = {
  showDetailsAction: Function,
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
      showDetailsAction,
      showEditModalAction,
      deleteItemAction,
      id,
      title,
      ingridients,
      activeId,
    } = this.props;
    return (
      <div>
        <Item onClick={() => showDetailsAction(id, title, ingridients)}>
          <Title>{title}</Title>
          {
            activeId === id
            && (
              <IngridientsWrapper>
                <h2>Ingridients:</h2>
                {this.renderIngredientsList()}
                <Button onClick={() => deleteItemAction(id)} title="Delete" />
                <Button onClick={() => showEditModalAction(id, title, ingridients)} title="Edit" />
              </IngridientsWrapper>
            )
          }
        </Item>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  activeId: selectActiveId(),
});

function mapDispatchToProps(dispatch) {
  return {
    showDetailsAction: bindActionCreators(showDetails, dispatch),
    showEditModalAction: bindActionCreators(showEditModal, dispatch),
    deleteItemAction: bindActionCreators(deleteItem, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);
