import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectFormTitle, selectFormIngridients, selectFormId } from '../selectors';
import * as recipeItemActions from '../actions';

import Button from '../../../components/LinkedButton';

import { Title, Ingridient, IngridientsWrapper, Subtitle } from './styles';
import { customStyles } from '../styles';

type Actions = {
  hideDetailsModal: Function,
  showEditModal: Function,
  deleteItem: Function,
};

type Props = {
  actions: Actions,
  title: string,
  ingridients: string,
  id: number,
  isOpen: boolean,
};

class DetailsModal extends PureComponent {
  props: Props;
  render() {
    const ingridientsList = this.props.ingridients.split(',').map(ingridient => (
      <Ingridient key={ingridient}>{ingridient}</Ingridient>
    ));
    const { hideDetailsModal, showEditModal, deleteItem } = this.props.actions;
    const { id, title, ingridients } = this.props;
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={hideDetailsModal} style={customStyles}>
        <Title>{this.props.title}</Title>
        <IngridientsWrapper>
          <Subtitle>Ingridients:</Subtitle>
          <ul>
            {ingridientsList}
          </ul>
          <Button onClick={() => showEditModal(id, title, ingridients)} title="Edit" />
          <Button onClick={() => deleteItem(id)} title="Delete" />
          <Button onClick={hideDetailsModal} title="Back" />
        </IngridientsWrapper>
      </Modal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  title: selectFormTitle(),
  ingridients: selectFormIngridients(),
  id: selectFormId(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeItemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);
