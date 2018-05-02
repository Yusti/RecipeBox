import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentRecipe } from '../selectors';
import { hideEditModal } from '../actions';
import { saveItemUpdates } from '../../RecipeList/actions';

import Button from '../../../components/LinkedButton';

import { Form, Input, Textarea, Label } from './styles';
import { customStyles } from '../styles';

type Recipe = {
  title: string,
  ingridients: string,
  id: number,
}

type Props = {
  hideEditModalAction: Function,
  saveItemUpdatesAction: Function,
  recipe: Recipe,
  isOpen: boolean,
};

class EditModal extends PureComponent {
  static getDerivedStateFromProps(nextProps) {
    return {
      title: nextProps.recipe.title,
      ingridients: nextProps.recipe.ingridients,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      title: props.recipe.title,
      ingridients: props.recipe.ingridients,
    };
  }

  props: Props;

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleIngridientsChange = (event) => {
    this.setState({ ingridients: event.target.value });
  };

  render() {
    const { hideEditModalAction, saveItemUpdatesAction, recipe: { id } } = this.props;
    const { title, ingridients } = this.state;
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={hideEditModalAction}
        style={customStyles}
        ariaHideApp={false}
      >
        <Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Input value={title} name="title" onChange={this.handleTitleChange} />
          <Label>Ingridients:</Label>
          <Textarea value={ingridients} name="ingridients" onChange={this.handleIngridientsChange} />
          <div>
            <Button
              type="submit"
              onClick={() => saveItemUpdatesAction(id, title, ingridients)}
              title="Save"
            />
            <Button onClick={hideEditModalAction} title="Cancel" />
          </div>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recipe: selectCurrentRecipe(),
});

function mapDispatchToProps(dispatch) {
  return {
    hideEditModalAction: bindActionCreators(hideEditModal, dispatch),
    saveItemUpdatesAction: bindActionCreators(saveItemUpdates, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
