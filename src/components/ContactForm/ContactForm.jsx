import propTypes from 'prop-types';
import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };
  handleNumberChange = e => {
    this.setState({
      number: e.target.value,
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({ name: '', number: '' }));
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <p>Name</p>
        <input
          className="form__input"
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          className="form__input"
          value={number}
          onChange={this.handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className="form__submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
};
