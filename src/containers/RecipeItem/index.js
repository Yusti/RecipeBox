import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as recipeItemActions from './actions';

import { Item, Title } from './styles';

type Actions = {
  showDetailsModal: Function,
};

type Props = {
  actions: Actions,
  title: string,
  ingridients: string,
  id: number,
};

class RecipeItem extends PureComponent {
  props: Props;
  render() {
    const { showDetailsModal } = this.props.actions;
    return (
      <div>
        <Item
          onClick={() => showDetailsModal(this.props.id, this.props.title, this.props.ingridients)}
        >
          <Title>{this.props.title}</Title>
        </Item>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeItemActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(RecipeItem);
