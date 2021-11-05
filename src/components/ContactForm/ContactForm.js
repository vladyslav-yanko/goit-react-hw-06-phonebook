import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    if (!this.state.name || !this.state.number) {
      alert('Enter the name!');
      return;
    }

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} already exists. Try another name`);
      return;
    }

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.labelTitle}>
          Name:
          <input
            type="text"
            name="name"
            className={styles.input}
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={styles.labelTitle}>
          Phone:
          <input
            type="text"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The telephone number must contain numbers and may contain spaces, dashes, parentheses and may start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
