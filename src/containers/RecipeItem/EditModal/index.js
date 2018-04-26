import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectFormTitle, selectFormIngridients, selectFormId } from '../selectors';
import * as recipeItemActions from '../actions';

import { Button, Form, Input, Textarea, Label } from './styles';
import { customStyles } from '../styles';

type Actions = {
  hideEditModal: Function,
  saveItemUpdates: Function,
  handleChange: Function,
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
    const { hideEditModal, saveItemUpdates, handleChange } = this.props.actions;
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={hideEditModal} style={customStyles}>
        <Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Input value={this.props.title} name="activeTitle" onChange={handleChange} />
          <Label>
            Ingridients:
          </Label>
          <Textarea value={this.props.ingridients} name="activeIngridients" onChange={handleChange} />
          <div>
            <Button type="submit" onClick={() => saveItemUpdates(this.props.id)}>
              Save
            </Button>
            <Button onClick={hideEditModal}>Cancel</Button>
          </div>
        </Form>
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
